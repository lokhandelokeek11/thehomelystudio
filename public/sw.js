// Service Worker for The Homely Studio PWA Offline Fallback & Asset Caching

const CACHE_NAME = 'homely-studio-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Prevent returning cached HTML for script/style requests
        const contentType = cachedResponse.headers.get('content-type') || '';
        const isScriptOrStyle = event.request.url.endsWith('.js') || event.request.url.endsWith('.css');
        if (!isScriptOrStyle || !contentType.includes('text/html')) {
          return cachedResponse;
        }
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const contentType = response.headers.get('content-type') || '';
        const isScriptOrStyle = event.request.url.endsWith('.js') || event.request.url.endsWith('.css');
        if (isScriptOrStyle && contentType.includes('text/html')) {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        const accept = event.request.headers.get('accept') || '';
        if (accept.includes('text/html')) {
          return caches.match('/');
        }
      });
    })
  );
});


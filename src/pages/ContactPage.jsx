import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail, MapPin, Send, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import WhatsAppButton from '../components/common/WhatsAppButton';
import InstagramButton from '../components/common/InstagramButton';
import { BRAND_INFO } from '../constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Festive Deity Garland',
    customDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build direct WhatsApp message link from form inputs
    const msg = `Hello! My name is ${formData.name || 'a customer'}.\nPhone: ${formData.phone || 'N/A'}\nInterested In: ${formData.interest}\nCustom Request Details: ${formData.customDetails || 'General Inquiry'}`;
    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Custom Orders | The Homely Studio</title>
        <meta name="description" content="Get in touch with The Homely Studio in Ravet, Pune on WhatsApp (8087995835) or Instagram (@_thehomelystudio) for handcrafted product inquiries, custom colors, and size alterations." />
      </Helmet>

      <main className="min-h-screen bg-brand-bg py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Get In Touch"
            title="We'd Love To Hear From You"
            description="Since all our products are handcrafted with love, we process inquiries directly on WhatsApp & Instagram for personalized assistance."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-brand-border/60 shadow-soft space-y-4 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-brand-text">WhatsApp Direct Chat</h3>
                  <p className="text-sm font-medium text-brand-primary mt-0.5">{BRAND_INFO.whatsappFormatted}</p>
                  <p className="text-xs text-brand-muted font-light mt-1">
                    Fastest way to order, customize sizes, or send reference photos.
                  </p>
                </div>
                <div className="pt-2">
                  <WhatsAppButton size="medium" text="Open WhatsApp Chat" className="w-full" />
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-brand-border/60 shadow-soft space-y-4 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-brand-text">Instagram DM & Updates</h3>
                  <p className="text-sm font-medium text-[#E1306C] mt-0.5">{BRAND_INFO.instagramHandle}</p>
                  <p className="text-xs text-brand-muted font-light mt-1">
                    Follow us @_thehomelystudio for new drop announcements and styling reels.
                  </p>
                </div>
                <div className="pt-2">
                  <InstagramButton size="medium" text="Follow & DM on Instagram" className="w-full" />
                </div>
              </div>

              {/* Email & Location Card */}
              <div className="bg-brand-secondary/50 p-6 md:p-8 rounded-3xl border border-brand-border/60 space-y-4 text-xs text-brand-muted font-light">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                  <div>
                    <span className="font-medium text-brand-text block">Email Inquiries:</span>
                    <span>{BRAND_INFO.email}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-brand-text block">Studio Address:</span>
                    <span>Ravet, Pune, Maharashtra, India — Shipping Across India</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Custom Inquiry Form Generator */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-brand-border/60 shadow-soft">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-medium text-brand-text flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-accent" />
                  Quick Inquiry & Customization Form
                </h3>
                <p className="text-xs text-brand-muted font-light mt-1">
                  Fill in your details below and hit submit to launch a pre-formatted WhatsApp chat with us.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-brand-text mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full min-h-[48px] px-4 py-3 bg-brand-bg rounded-xl border border-brand-border text-brand-text focus:outline-none focus:border-brand-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-brand-text mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 80879 95835"
                    className="w-full min-h-[48px] px-4 py-3 bg-brand-bg rounded-xl border border-brand-border text-brand-text focus:outline-none focus:border-brand-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-brand-text mb-1">Interested Product Category</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full min-h-[48px] px-4 py-3 bg-brand-bg rounded-xl border border-brand-border text-brand-text focus:outline-none focus:border-brand-primary text-sm cursor-pointer"
                  >
                    <option value="Festive & Deity Garlands">Festive & Deity Garlands (Haar)</option>
                    <option value="Asaan for Idol">Asaan for Idol Seating</option>
                    <option value="Home Decor & Curtain Tiebacks">Home Decor & Curtain Tiebacks</option>
                    <option value="Hair Accessories & Bands">Hair Ornaments & Hair Bands</option>
                    <option value="Custom Keychain & Bags Charms">Custom Keychains & Bag Charms</option>
                    <option value="Bulk Festive Gifting">Bulk / Festive Event Gifting</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-brand-text mb-1">Custom Details / Questions</label>
                  <textarea
                    rows={4}
                    value={formData.customDetails}
                    onChange={(e) => setFormData({ ...formData, customDetails: e.target.value })}
                    placeholder="Specify idol dimensions, color preferences, or specific product titles..."
                    className="w-full px-4 py-3 bg-brand-bg rounded-xl border border-brand-border text-brand-text focus:outline-none focus:border-brand-primary text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 bg-brand-primary hover:bg-brand-primary-dark active:scale-[0.98] text-white font-semibold text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp ({BRAND_INFO.whatsappFormatted})</span>
                </button>

                {submitted && (
                  <div className="p-3.5 bg-green-50 text-green-700 rounded-xl flex items-center gap-2 text-xs font-medium">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Launching WhatsApp with your custom message!</span>
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Embedded Google Map - Ravet, Pune */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-brand-border/60 shadow-soft">
            <h3 className="font-serif text-xl font-medium text-brand-text mb-2">
              Studio Location — Ravet, Pune, Maharashtra
            </h3>
            <p className="text-xs text-brand-muted font-light mb-6">
              Our products are lovingly handcrafted in Ravet, Pune and delivered securely across India.
            </p>

            <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-brand-border bg-brand-secondary/40 relative flex items-center justify-center">
              <iframe
                title="The Homely Studio Location Map - Ravet Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.457819128063!2d73.7485303!3d18.6433299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e67d2643a1%3A0xb35a09ecfa38edb3!2sRavet%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90 contrast-95"
              />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

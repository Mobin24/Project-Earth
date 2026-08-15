import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Heart, MessageSquare, Send, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import EventsSection from '../components/EventsSection';
import LeadershipSection from '../components/LeadershipSection';
import TestimonialSlider from '../components/TestimonialSlider';
import PublicationsSection from '../components/PublicationsSection';
import AchievementsSection from '../components/AchievementsSection';

export default function Home() {
  const location = useLocation();

  // Scroll to section on hash link redirect
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      // Wait for rendering to complete
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* Cinematic Hero */}
      <Hero />

      {/* Feature Grid */}
      <FeatureGrid />

      {/* Flagship Events & Programs */}
      <EventsSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Publications Section */}
      <PublicationsSection />

      {/* Leadership Board */}
      <LeadershipSection />

      {/* Testimonials Slider */}
      <TestimonialSlider />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-forest-deep/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
                  Connect With Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif leading-tight">
                  Reach Out to The Colony
                </h2>
                <p className="text-sm text-earth-brown font-sans font-light leading-relaxed">
                  Have questions about academic collaborations, field programs, or recruitment? Drop us a line and our executive team will correspond shortly.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3 text-sm text-earth-brown">
                  <MapPin size={18} className="text-olive-accent mt-1 flex-shrink-0" />
                  <span>108 Formicary Ave, Forest Canopy, Oregon, 97401</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-earth-brown">
                  <Phone size={18} className="text-olive-accent flex-shrink-0" />
                  <span>+1 (503) 555-0194</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-earth-brown">
                  <Mail size={18} className="text-olive-accent flex-shrink-0" />
                  <span>info@earthsants.org</span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-beige-warm/40 border border-forest-deep/5 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Topic of Inquiry</label>
                  <select
                    className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                  >
                    <option>General Conservation Inquiry</option>
                    <option>Scientific Partnerships</option>
                    <option>Recruitment Support</option>
                    <option>Sponsorships & Donations</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry..."
                    className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-deep hover:bg-forest-mid text-white font-semibold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Dispatch Message</span>
                  <Send size={13} className="text-olive-accent" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

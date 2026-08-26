import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { assets } from '../data/assets';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-soft-white text-forest-deep pt-16 pb-8 border-t border-forest-deep/5 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Organization Branding & Description */}
          <div className="space-y-4 text-left">
            <Link to="/" className="flex items-center space-x-2">
              {!logoError ? (
                <img
                  src={assets.logos.main}
                  alt="Logo"
                  className="h-8 w-auto object-contain block max-w-[120px]"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-8 h-8 border border-forest-deep flex items-center justify-center bg-transparent text-[10px] font-semibold tracking-wider font-sans">
                  EA
                </div>
              )}
              <span className="text-sm font-semibold tracking-widest text-forest-deep uppercase font-sans">
               Earth's ANTS
              </span>
            </Link>
            
            <p className="text-xs text-earth-brown/85 leading-relaxed uppercase tracking-wider font-medium">
              Conservation
            </p>

            <span className="text-[9px] text-earth-brown/50 font-mono block">
              <img src="./Earth's.png"  className='h-20 ' alt="" />
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-forest-deep">
              Links
            </h3>
            <ul className="space-y-2.5 text-xs text-earth-brown/85 font-medium">
              <li>
                <Link to="/" className="hover:text-olive-accent transition-colors duration-200 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-olive-accent transition-colors duration-200 block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about#mission-vision" className="hover:text-olive-accent transition-colors duration-200 block">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-olive-accent transition-colors duration-200 block">
                  Join
                </Link>
              </li>
              <li>
                <a href="#events" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-olive-accent transition-colors duration-200 block">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-forest-deep">
              Contact
            </h3>
            <ul className="space-y-3.5 text-xs text-earth-brown/85 font-medium">
              <li className="flex items-center space-x-2">
                <MapPin size={14} className="text-forest-deep flex-shrink-0" />
                <span>Dhaka,Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} className="text-forest-deep flex-shrink-0" />
                <span>+8801572917518</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-forest-deep flex-shrink-0" />
                <span> contact@earthsants.org</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-forest-deep">
              Subscribe
            </h3>
            <p className="text-xs text-earth-brown/85 leading-relaxed uppercase tracking-wider font-medium">
              Updates
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mt-2 flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-white border border-forest-deep/15 rounded-l-lg py-2 pl-3 pr-10 text-xs text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
              />
              <button
                type="submit"
                className="bg-forest-deep text-white px-3.5 rounded-r-lg hover:bg-forest-mid transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send size={12} />
              </button>
            </form>

            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-olive-accent font-semibold"
                >
                  Subscribed
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-forest-deep/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-earth-brown/65 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>©2026</span>
            <div className="flex space-x-4 mt-2 sm:mt-0 font-medium">
              <a href="#privacy" className="hover:underline hover:text-forest-deep transition-all">Privacy</a>
              <a href="#terms" className="hover:underline hover:text-forest-deep transition-all">Terms</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Minimal Grayscale Social Icons */}
            <div className="flex space-x-4 font-medium">
              {['Twitter', 'Linkedin', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="hover:underline hover:text-forest-deep transition-all"
                >
                  {social}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 hover:text-forest-deep hover:underline transition-all bg-transparent p-1 font-medium"
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

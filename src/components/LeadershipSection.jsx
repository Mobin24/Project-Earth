import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { leadershipData } from '../data/leadershipData';

export default function LeadershipSection() {
  const [activeTab, setActiveTab] = useState('advisory');

  const tabs = [
    // { id: 'presidential', label: 'Presidential Board' },
    { id: 'advisory', label: 'Advisory Board' },
    { id: 'executive', label: 'Central Executive Council' },
    { id: 'departments', label: 'Departments' },
  ];

  const currentMembers = leadershipData[activeTab] || [];

  return (
    <section id="leadership" className="py-24 bg-beige-warm border-t border-forest-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
            Our Stewards
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
            Colony Leadership
          </h2>
          <p className="text-sm text-earth-brown font-sans max-w-md mx-auto font-light leading-relaxed">
            Meet the researchers, legal advocates, grassroots developers, and creative coordinators behind Earth's Ants.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-forest-deep/5 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-white bg-forest-deep shadow-md'
                  : 'text-forest-deep hover:bg-forest-deep/5 bg-transparent'
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeLeadershipTab"
                  className="absolute inset-0 bg-forest-deep rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {currentMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-6 border border-forest-deep/5 hover:border-olive-accent/20 hover:shadow-xl hover:shadow-olive-accent/5 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group"
                >
                  {/* Circular Image Placeholder Container */}
                  <div className="w-28 h-28 rounded-full bg-forest-mid flex-shrink-0 flex items-center justify-center text-center overflow-hidden border-2 border-olive-accent/20 group-hover:border-olive-accent transition-colors relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-olive-accent/20 opacity-90" />
                    
                    <img
  src={member.imagePlaceholder}
  alt={member.name}
  className="relative z-10 w-full h-full object-cover"
/>
                  </div>

                  {/* Profile Details Area */}
                  <div className="flex-grow space-y-3 flex flex-col justify-between h-full">
                    <div className="space-y-1.5">
                      <div>
                        <h3 className="text-xl font-bold font-serif text-forest-deep leading-none">
                          {member.name}
                        </h3>
                        <span className="text-xs text-olive-accent font-semibold tracking-wider uppercase block mt-1">
                          {member.position}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-earth-brown leading-relaxed font-light font-sans">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social networks links */}
                    <div className="flex items-center justify-center sm:justify-start space-x-3 pt-3 border-t border-forest-deep/5">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          className="text-earth-brown/70 hover:text-olive-accent transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          className="text-earth-brown/70 hover:text-olive-accent transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="text-earth-brown/70 hover:text-olive-accent transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

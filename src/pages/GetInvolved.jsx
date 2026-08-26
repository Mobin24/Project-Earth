import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Sparkles, Send, Gift, ShieldAlert } from 'lucide-react';

export default function GetInvolved() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('member');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    affiliation: '',
    volunteerType: 'field',
    sponsorLevel: 'seed'
  });

  // Handle URL tab parameters (e.g. ?tab=volunteer)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam && ['member', 'volunteer', 'sponsor'].includes(tabParam)) {
      setActiveTab(tabParam);
    }

    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else if (!tabParam) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset submission notification after 6 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        notes: '',
        affiliation: '',
        volunteerType: 'field',
        sponsorLevel: 'seed'
      });
    }, 6000);
  };

  const tabs = [
    { id: 'member', label: 'Become a Member', icon: User },
    { id: 'volunteer', label: 'Volunteer with Us', icon: Heart },
    { id: 'sponsor', label: 'Sponsor the Mission', icon: Sparkles },
  ];

  return (
    <div className="w-full pt-24 bg-beige-warm min-h-screen">
      {/* Header Banner */}
      <section className="bg-forest-deep text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep via-forest-mid to-olive-accent/15 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold">Join The Colony</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif">Be Part of the Movement</h1>
          <p className="text-sm text-[#D0CFC9] max-w-xl mx-auto font-light font-sans">
            At Earth’s Ants, we believe meaningful environmental change happens when individuals, institutions, and communities work together.

            Whether you are a student, researcher, professional, organization or             sustainability enthusiast, there is a place for you in our growing             network of changemakers.

            Join us in advancing climate education, research, innovation, and             community-driven sustainability action.
          </p>
        </div>
      </section>

      {/* Recruitment Form Section */}
      <section id="join-colony" className="py-20 bg-white border-b border-forest-deep/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab buttons */}
          <div className="flex border-b border-forest-deep/5 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setFormSubmitted(false);
                  }}
                  className={`flex-1 py-4 text-center border-b-2 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 flex items-center justify-center space-x-2 ${
                    isSelected
                      ? 'border-olive-accent text-olive-accent bg-olive-accent/5'
                      : 'border-transparent text-earth-brown/70 hover:text-forest-deep'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Form panel */}
          <div className="bg-beige-warm/30 border border-forest-deep/5 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-olive-accent/15 border border-olive-accent flex items-center justify-center text-olive-accent mx-auto">
                    <Sparkles size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-forest-deep">Application Logged</h3>
                  <p className="text-sm text-earth-brown max-w-md mx-auto font-sans leading-relaxed">
                    Thank you! Your registration as a <strong>{activeTab}</strong> has been successfully queued in our registry system. An executive representative will make contact within 2 business days.
                  </p>
                  <span className="text-[10px] text-earth-brown/40 font-mono block">[ form-success-state ]</span>
                </motion.div>
              ) : (
                <motion.form
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@example.com"
                        className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 012-3456"
                        className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                      />
                    </div>
                     
                    {/* Member Specific Fields */}
                    {activeTab === 'member' && (
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Academic / Pro Affiliation</label>
                        <input
                          type="text"
                          name="affiliation"
                          value={formData.affiliation}
                          onChange={handleInputChange}
                          placeholder="e.g. University of Oregon"
                          className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                        />
                      </div>
                    )}

                    {/* Volunteer Specific Fields */}
                    {activeTab === 'volunteer' && (
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Field Preference</label>
                        <select
                          name="volunteerType"
                          value={formData.volunteerType}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                        >
                          <option value="field">Climate Education & Outreach</option>
                          <option value="education">Research & Publications</option>
                          <option value="digital">Community Sustainability
                            </option>
                          <option value="legal">Creative Media & Design</option>
                          <option value="digital">Events & Operations</option>
                           <option value="digital">Partnership Support</option>
                            <option value="digital">Global Youth Network</option>
                        </select>
                      </div>
                    )}

                    {/* Sponsor Specific Fields */}
                    {activeTab === 'sponsor' && (
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Organization Type</label>
                        <select
                          name="sponsorLevel"
                          value={formData.sponsorLevel}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                        >
                          <option value="seed">University / Educational Institution</option>
                          <option value="canopy">Corporate</option>
                          <option value="canopy">NGO/NPO</option>
                          <option value="canopy">Research Organization</option>
                          <option value="canopy">Government / Public Institution</option>
                          <option value="canopy">Media Organization</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">
                      {activeTab === 'sponsor' ? 'Company Details & Intent' : 'Notes / Background / Motivation'}
                    </label>
                    <textarea
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder={activeTab === 'sponsor' ? 'Tell us how your organization aligns with soil and conservation objectives...' : 'Tell us why you want to support soil micro-ecology studies...'}
                      className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest-deep hover:bg-forest-mid text-white font-semibold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Submit Application</span>
                    <Send size={13} className="text-olive-accent" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Support Our Mission */}
      <section id="support" className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">Funding Integrity</span>
                <h2 className="text-3xl font-bold font-serif text-forest-deep leading-tight">
                  Support Our Mission
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-earth-brown font-sans font-light leading-relaxed">
                As a micro-eco foundation, we pride ourselves on extreme scientific focus and operational efficiency. Your contributions go directly towards purchasing specialized research microscopes, setting up regional soil monitoring cells, and printing ecological educational booklets for children.
              </p>
              
              {/* Visual allocation chart layout */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest-deep">Fund Distribution:</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-forest-deep mb-1 font-semibold">
                      <span>Field Research & Bio-Monitoring</span>
                      <span>50%</span>
                    </div>
                    <div className="w-full bg-forest-deep/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-olive-accent h-full w-[50%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-forest-deep mb-1 font-semibold">
                      <span>Regional Reforestation & Soil Re-aeration</span>
                      <span>35%</span>
                    </div>
                    <div className="w-full bg-forest-deep/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-olive-accent h-full w-[35%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-forest-deep mb-1 font-semibold">
                      <span>Community Ecology Camps & Digital Publications</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-forest-deep/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-olive-accent h-full w-[15%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side donation options */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* <div className="bg-white border border-forest-deep/5 rounded-3xl p-6 text-center space-y-4 hover:border-olive-accent/20 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <Gift className="text-olive-accent mx-auto" size={24} />
                  <h3 className="text-base font-bold font-serif text-forest-deep">Soil Cell Kit</h3>
                  <p className="text-[11px] text-earth-brown font-light leading-relaxed">
                    Sponsor a regional soil monitoring container.
                  </p>
                </div>
                <div className="pt-4 border-t border-forest-deep/5">
                  <span className="text-lg font-bold text-forest-deep block">$75</span>
                  <button className="mt-2 w-full bg-forest-deep/5 hover:bg-olive-accent hover:text-forest-deep text-forest-deep text-[10px] font-bold uppercase tracking-wider py-2 rounded-xl transition-all">
                    Sponsor Kit
                  </button>
                </div>
              </div> */}

              {/* <div className="bg-white border border-forest-deep/5 rounded-3xl p-6 text-center space-y-4 hover:border-olive-accent/20 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <Gift className="text-olive-accent mx-auto" size={24} />
                  <h3 className="text-base font-bold font-serif text-forest-deep">Microscopes</h3>
                  <p className="text-[11px] text-earth-brown font-light leading-relaxed">
                    Purchase 3 visual field microscopes for interns.
                  </p>
                </div>
                <div className="pt-4 border-t border-forest-deep/5">
                  <span className="text-lg font-bold text-forest-deep block">$250</span>
                  <button className="mt-2 w-full bg-forest-deep/5 hover:bg-olive-accent hover:text-forest-deep text-forest-deep text-[10px] font-bold uppercase tracking-wider py-2 rounded-xl transition-all">
                    Purchase
                  </button>
                </div>
              </div>

              <div className="bg-white border border-forest-deep/5 rounded-3xl p-6 text-center space-y-4 hover:border-olive-accent/20 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <Gift className="text-olive-accent mx-auto" size={24} />
                  <h3 className="text-base font-bold font-serif text-forest-deep">Eco Camp</h3>
                  <p className="text-[11px] text-earth-brown font-light leading-relaxed">
                    Fund educational kits for a school eco-camp day.
                  </p>
                </div>
                <div className="pt-4 border-t border-forest-deep/5">
                  <span className="text-lg font-bold text-forest-deep block">$600</span>
                  <button className="mt-2 w-full bg-forest-deep/5 hover:bg-olive-accent hover:text-forest-deep text-forest-deep text-[10px] font-bold uppercase tracking-wider py-2 rounded-xl transition-all">
                    Fund Camp
                  </button>
                </div>
              </div> */}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

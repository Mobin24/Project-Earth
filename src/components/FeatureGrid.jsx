import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Newspaper, FileText, PenTool, Image as ImageIcon, UserPlus, Lightbulb, ArrowRight } from 'lucide-react';

export default function FeatureGrid() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'News & Updates',
      description: 'Daily developments, field logs, and announcements from Earth\'s Ants sites.',
      icon: Newspaper,
      link: '/#events',
      targetId: 'events',
      bgStyle: 'bg-white'
    },
    {
      title: 'Research & Articles',
      description: 'Academic studies, bioturbation papers, and environmental analytics journals.',
      icon: FileText,
      link: '/#publications',
      targetId: 'publications',
      bgStyle: 'bg-white'
    },
    {
      title: 'Member Blogs',
      description: 'First-hand reflections, research stories, and diaries from local colony members.',
      icon: PenTool,
      link: '/#publications',
      targetId: 'publications',
      bgStyle: 'bg-white'
    },
    {
      title: 'Creative Corner',
      description: 'Ecological sketches, nature inspired poems, and microscopic photography prints.',
      icon: Lightbulb,
      link: '/#events',
      targetId: 'events',
      bgStyle: 'bg-white'
    },
    {
      title: 'Gallery',
      description: 'Visual database of ant species, habitat setups, and conservation teams.',
      icon: ImageIcon,
      link: '/#events',
      targetId: 'events',
      bgStyle: 'bg-white'
    },
    {
      title: 'Join Our Mission',
      description: 'Apply to be a volunteer, formal research member, or corporate sponsor.',
      icon: UserPlus,
      link: '/get-involved',
      targetId: null,
      bgStyle: 'bg-olive-accent/15 border border-olive-accent/30 text-forest-deep'
    }
  ];

  const handleCardClick = (card) => {
    if (card.targetId) {
      const element = document.getElementById(card.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(card.link);
      }
    } else {
      navigate(card.link);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' } 
    }
  };

  return (
    <section id="features" className="py-24 bg-beige-warm">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
            Core Directories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
            Explore the Colony
          </h2>
          <p className="text-sm text-earth-brown font-sans max-w-lg mx-auto font-light leading-relaxed">
            Browse our core portals to keep up to date with active research, creative programs, field galleries, and volunteer recruitment panels.
          </p>
        </div>

        {/* 6-card row on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                onClick={() => handleCardClick(card)}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: '0 16px 24px -4px rgba(138, 168, 123, 0.2), 0 6px 10px -4px rgba(138, 168, 123, 0.1)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all border border-forest-deep/5 ${card.bgStyle} group cursor-pointer`}
              >
                {/* Subtle gradient background element */}
                <div className="absolute right-[-15%] top-[-15%] w-20 h-20 rounded-full bg-olive-accent/5 group-hover:bg-olive-accent/15 transition-colors pointer-events-none" />

                {/* Card Top: Icon & Details */}
                <div className="space-y-4 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-forest-deep text-olive-accent flex items-center justify-center group-hover:bg-olive-accent group-hover:text-forest-deep transition-all duration-300 shadow-sm">
                    <Icon size={20} />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-forest-deep tracking-wide font-serif group-hover:text-olive-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-earth-brown leading-relaxed font-sans font-light">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Action CTA */}
                <div className="mt-8 pt-4 border-t border-forest-deep/5 flex items-center justify-between relative z-10">
                  <span className="text-xs text-forest-deep group-hover:text-olive-accent font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5">
                    <span>Open Portal</span>
                    <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

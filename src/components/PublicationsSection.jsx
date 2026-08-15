import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen, ArrowRight, X, ExternalLink } from 'lucide-react';
import { publicationsData } from '../data/publicationsData';

function PublicationCard({ pub, onOpenDetail }) {
  const isExternal = Boolean(pub.externalUrl);
  const isLongText = pub.description && pub.description.length > 140;

  return (
    <div className="bg-white rounded-3xl border border-forest-deep/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-olive-accent/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
      {/* Publication Image Card Visual */}
      <div className="aspect-[16/10] bg-forest-mid relative overflow-hidden">
        <img
          src={pub.imagePlaceholder}
          alt={pub.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent opacity-50 pointer-events-none" />

        {/* Date Badge Overlay */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-sm border border-forest-deep/5 flex items-center space-x-2 text-xs font-semibold text-forest-deep">
          <BookOpen size={14} className="text-olive-accent" />
          <span>{pub.date}</span>
        </div>
      </div>

      {/* Card Info Area */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
        <div className="space-y-3">
          <h3 className="text-xl font-bold font-serif text-forest-deep leading-tight group-hover:text-olive-accent transition-colors duration-300 flex items-start gap-1 line-clamp-2">
            <span>{pub.title}</span>
            {isExternal && (
              <ArrowUpRight
                size={16}
                className="text-olive-accent flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            )}
          </h3>

          <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans line-clamp-3">
            {pub.description}
          </p>

          {isLongText && (
            <button
              type="button"
              onClick={() => onOpenDetail(pub)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-olive-accent hover:text-forest-deep transition-colors pt-1 focus:outline-none group/btn"
            >
              <span>Read Full Article</span>
              <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {isExternal && (
          <div className="pt-4 border-t border-forest-deep/5 flex items-center justify-between mt-auto">
            <a
              href={pub.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-olive-accent font-bold uppercase tracking-wider hover:text-forest-deep transition-colors"
            >
              <span>{pub.ctaText || 'Read Journal'}</span>
              <ExternalLink size={13} />
            </a>
            <span className="text-[10px] text-earth-brown/50 font-mono bg-beige-warm/50 px-2 py-0.5 rounded">
              External Link
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Full Detail Modal for Publications
function PublicationDetailModal({ pub, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!pub) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-deep/60 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-forest-deep/10 relative flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-forest-deep/80 hover:bg-forest-deep text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <X size={18} />
        </button>

        {/* Modal Image */}
        <div className="aspect-[16/10] bg-forest-mid relative overflow-hidden rounded-t-3xl">
          <img
            src={pub.imagePlaceholder}
            alt={pub.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-60" />

          {/* Date Badge */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-sm border border-forest-deep/5 flex items-center space-x-2 text-xs font-semibold text-forest-deep">
            <BookOpen size={14} className="text-olive-accent" />
            <span>{pub.date}</span>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-forest-deep leading-tight">
            {pub.title}
          </h2>

          <div className="border-t border-forest-deep/5 pt-4">
            <p className="text-sm sm:text-base text-earth-brown font-light leading-relaxed font-sans whitespace-pre-line">
              {pub.description}
            </p>
          </div>

          {pub.externalUrl && (
            <div className="pt-6 border-t border-forest-deep/5 flex items-center justify-between">
              <a
                href={pub.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-forest-deep hover:bg-forest-mid text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>{pub.ctaText || 'Read Journal'}</span>
                <ExternalLink size={14} />
              </a>
              <span className="text-xs text-earth-brown/60 font-mono">
                Opens in a new tab
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PublicationsSection() {
  const [activeModalPub, setActiveModalPub] = useState(null);

  return (
    <section id="publications" className="py-24 bg-soft-white border-t border-forest-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
              Knowledge & Creations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
              Publications & Media Journals
            </h2>
            <p className="text-sm text-earth-brown font-sans max-w-xl font-light leading-relaxed">
              Read up on peer-reviewed soil data, member stories, or general media columns tracking microscopic ecology.
            </p>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicationsData.map((pub) => (
            <PublicationCard
              key={pub.id}
              pub={pub}
              onOpenDetail={(item) => setActiveModalPub(item)}
            />
          ))}
        </div>

        {/* Animated Detail Modal */}
        <AnimatePresence>
          {activeModalPub && (
            <PublicationDetailModal
              pub={activeModalPub}
              onClose={() => setActiveModalPub(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

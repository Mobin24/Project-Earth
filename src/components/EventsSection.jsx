import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Images, X, ExternalLink } from 'lucide-react';
import { eventsData } from '../data/eventsData';

// Reusable Image Carousel Sub-component with Mobile Swipe & Touch Controls
function EventImageCarousel({ images, title, date, roundedClass = "rounded-t-3xl" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const imageList = images && images.length > 0 ? images : ['/hero-image-placeholder.jpg'];
  const hasMultiple = imageList.length > 1;

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe support for mobile users
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
    }
  };

  return (
    <div
      className={`aspect-[16/10] bg-forest-mid relative overflow-hidden group/carousel select-none ${roundedClass}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Current Image */}
      <img
        src={imageList[currentIndex]}
        alt={`${title} - image ${currentIndex + 1}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Multiple Images Navigation Controls */}
      {hasMultiple && (
        <>
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-forest-deep/80 hover:bg-forest-deep text-white flex items-center justify-center backdrop-blur-md opacity-90 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-all duration-200 shadow-md hover:scale-110 active:scale-95 z-20"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-forest-deep/80 hover:bg-forest-deep text-white flex items-center justify-center backdrop-blur-md opacity-90 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-all duration-200 shadow-md hover:scale-110 active:scale-95 z-20"
          >
            <ChevronRight size={18} />
          </button>

          {/* Image Count Badge */}
          <div className="absolute top-3 right-3 bg-forest-deep/80 backdrop-blur-md text-white text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border border-white/15 shadow-sm flex items-center gap-1.5 z-10">
            <Images size={11} className="text-olive-accent" />
            <span>
              {currentIndex + 1} / {imageList.length}
            </span>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 z-10 bg-forest-deep/60 backdrop-blur-sm px-2 py-1 rounded-full">
            {imageList.slice(0, 5).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-3.5 bg-olive-accent' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            {imageList.length > 5 && (
              <span className="text-[9px] text-white/80 font-mono pl-0.5">
                +{imageList.length - 5}
              </span>
            )}
          </div>
        </>
      )}

      {/* Date Badge Overlay */}
      {date && (
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-xl py-1.5 px-3 shadow-sm border border-forest-deep/5 flex items-center space-x-1.5 text-xs font-semibold text-forest-deep z-10">
          <Calendar size={13} className="text-olive-accent" />
          <span>{date}</span>
        </div>
      )}
    </div>
  );
}

// Reusable Event Card Component
function EventCard({ event, onOpenDetail }) {
  const isExternal = Boolean(event.externalUrl);
  const isLongText = event.description && event.description.length > 140;

  return (
    <div className="bg-white rounded-3xl border border-forest-deep/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-olive-accent/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
      {/* Interactive Image Carousel */}
      <EventImageCarousel
        images={event.images}
        title={event.title}
        date={event.date}
      />

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
        <div className="space-y-3">
          <h3 className="text-xl font-bold font-serif text-forest-deep leading-tight group-hover:text-olive-accent transition-colors duration-300 flex items-start gap-1 line-clamp-2">
            <span>{event.title}</span>
            {isExternal && (
              <ArrowUpRight
                size={16}
                className="text-olive-accent flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            )}
          </h3>

          <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans line-clamp-3">
            {event.description}
          </p>

          {isLongText && (
            <button
              type="button"
              onClick={() => onOpenDetail(event)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-olive-accent hover:text-forest-deep transition-colors pt-1 focus:outline-none group/btn"
            >
              <span>Read Full Story</span>
              <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Action footer for external links */}
        {isExternal && (
          <div className="pt-4 border-t border-forest-deep/5 flex items-center justify-between mt-auto">
            <a
              href={event.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-olive-accent font-bold uppercase tracking-wider hover:text-forest-deep transition-colors"
            >
              <span>{event.ctaText || 'Visit Website'}</span>
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

// Full-Screen Detail Modal Component with Framer Motion Animation
function EventDetailModal({ event, onClose }) {
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

  if (!event) return null;

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
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-forest-deep/10 relative flex flex-col my-auto scrollbar-thin"
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

        {/* Modal Image Carousel */}
        <EventImageCarousel
          images={event.images}
          title={event.title}
          date={event.date}
          roundedClass="rounded-t-3xl"
        />

        {/* Modal Narrative Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-olive-accent font-semibold uppercase tracking-wider">
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-forest-deep leading-tight">
              {event.title}
            </h2>
          </div>

          <div className="border-t border-forest-deep/5 pt-4">
            <p className="text-sm sm:text-base text-earth-brown font-light leading-relaxed font-sans whitespace-pre-line">
              {event.description}
            </p>
          </div>

          {event.externalUrl && (
            <div className="pt-6 border-t border-forest-deep/5 flex items-center justify-between">
              <a
                href={event.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-forest-deep hover:bg-forest-mid text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>{event.ctaText || 'Visit Website'}</span>
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

export default function EventsSection() {
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  return (
    <section id="events" className="py-24 bg-soft-white border-t border-forest-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
              Global Movements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
              Programs & Flagship Impacts
            </h2>
            <p className="text-sm text-earth-brown font-sans max-w-xl font-light leading-relaxed">
              Explore our on-ground community engagements, academic climate partnerships, youth assemblies, and national sustainability summits.
            </p>
          </div>

          <a
            href="#get-involved"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-1.5 text-xs text-forest-deep hover:text-olive-accent font-bold uppercase tracking-widest transition-colors duration-300"
          >
            <span>Learn More About Operations</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onOpenDetail={(evt) => setActiveModalEvent(evt)}
            />
          ))}
        </div>

        {/* Animated Detail Modal for Full Story Reading */}
        <AnimatePresence>
          {activeModalEvent && (
            <EventDetailModal
              event={activeModalEvent}
              onClose={() => setActiveModalEvent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

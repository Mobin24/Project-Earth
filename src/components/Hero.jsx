import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  // Leaf parameters for the floating animations
  const leaves = [
    { id: 1, size: 24, top: '15%', left: '10%', duration: 12, delay: 0 },
    { id: 2, size: 36, top: '25%', left: '80%', duration: 16, delay: 2 },
    { id: 3, size: 18, top: '65%', left: '15%', duration: 10, delay: 4 },
    { id: 4, size: 30, top: '75%', left: '75%', duration: 14, delay: 1 },
    { id: 5, size: 22, top: '45%', left: '85%', duration: 18, delay: 3 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-forest-deep">
      {/* Background Video Element */}
      <video
       autoPlay
       loop
       muted
       playsInline
       className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
       poster="/hero-image-placeholder.jpg"
>
  <source src="/hero-background.mp4" type="video/mp4" />
</video>

      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/80 to-forest-deep z-10" />
      
      {/* Visually stunning placeholder background grid with forest tones */}
      <div className="absolute inset-0 opacity-0 bg-[radial-gradient(#8AA87B_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none z-10" />

      {/* Floating leaves/particles using Framer Motion */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-olive-accent/20 z-10 hidden md:block"
          style={{ top: leaf.top, left: leaf.left }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "easeInOut"
          }}
        >
          <Leaf size={leaf.size} className="fill-current" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-8 flex flex-col items-center">
        {/* Animated badge tag */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-olive-accent/10 border border-olive-accent/30 text-olive-accent py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-olive-accent animate-ping" />
          <span>Protecting the Earth's Foundations</span>
        </motion.div> */}

        {/* Cinematic Header with fade-in-up stagger */}
        <div className="max-w-4xl space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] font-sans"
          >
            Think, Live & Work <span className="text-olive-accent block sm:inline">Like Ants </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[#D0CFC9] font-sans max-w-2xl mx-auto font-light leading-relaxed"
          >
            Empowering Youth. Advancing Climate Action. Building a Sustainable Future.
          </motion.p>
        </div>

        {/* Dual CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md pt-4"
        >
          <Link
            //to="/get-involved"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-olive-accent hover:bg-white text-forest-deep text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:shadow-olive-accent/10 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Join Us</span>
            <ArrowRight size={16} />
          </Link>
          <a
            href="#events"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-forest-mid/30 text-white border border-[#D0CFC9]/30 hover:border-white text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore Our Impact</span>
          </a>
        </motion.div>

        {/* Visual Showcase Card containing the required image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-5xl mt-12 aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-olive-accent/25 shadow-2xl relative bg-forest-mid group"
        >
          {/* Visual gradient to mimic forest floor */}
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep via-forest-mid to-olive-accent/35" />
          
          {/* Subtle animated overlay representing shadows of trees/particles */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-10 bg-[conic-gradient(from_0deg_at_50%_50%,#8AA87B_0deg,#0D2214_180deg,#8AA87B_360deg)]"
          />

          {/* phto tag*/}
<img 
  src="/Greenfluence.png" 
  alt="Deep Soil Exhibition" 
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
/>

{/* dark grad */}
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent z-10" />

{/* content */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-forest-deep/20 backdrop-blur-[1px] transition-all group-hover:backdrop-blur-0 z-20">
  <Leaf size={48} className="text-olive-accent/80 mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
  {/* <h3 className="text-xl md:text-2xl font-sans text-[#FCFAF7] font-medium drop-shadow-lg">
    Deep Soil & Reforestation Exhibition
  </h3> */}
  <a href="https://greenfluenceearthsants.com" className="text-[10px] text-olive-accent uppercase tracking-widest font-semibold mt-4 bg-forest-deep/80 py-1.5 px-3 rounded-full border border-olive-accent/10 shadow-md">
    Click here to explore Greenfluence.
  </a>
</div>
        </motion.div>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-beige-warm to-transparent z-25 pointer-events-none" />
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';



export default function AboutIntro() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-forest-deep py-20 sm:py-24 overflow-hidden"
    >
      {/* subtle gradient wash to match the hero treatment */}
      <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep via-forest-mid to-olive-accent/10 opacity-90" />

      <div
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
          About Earth&apos;s Ants
        </span>

        <p className="text-lg sm:text-xl font-serif font-semibold leading-relaxed text-white">
          Earth&apos;s Ants is an{' '}
          <span className="text-olive-accent">international award winning</span>, registered
          non-governmental youth organization committed to environmental research, climate action,
          youth empowerment and sustainable innovation.
        </p>

        <div className="w-12 h-px bg-white/15 mx-auto" />

        <p className="text-xs sm:text-sm text-[#D0CFC9] font-sans font-light leading-relaxed">
          It is registered with the Department of Youth Development under the Ministry of Youth and
          Sports, Government of the People&apos;s Republic of Bangladesh, pursuant to the Youth
          Organizations (Registration and Operation) Act, 2015 (Act No. 8 of 2015).
        </p>
      </div>
    </section>
  );
}
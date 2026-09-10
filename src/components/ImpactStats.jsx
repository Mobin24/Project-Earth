import { useEffect, useRef, useState } from "react";

/**
 * Impact stats section for Earth's Ants — animated 0 → target count-up.
 * Drop this between the hero and the "Explore the Colony" section.
 *
 * Usage:
 *   import ImpactStats from "./ImpactStats";
 *   <ImpactStats />
 *
 * No external CSS file needed — styles are scoped and injected with the component.
 */

const STATS = [
  { value: 10, suffix: "M+", label: "Digital Awareness Reach" },
  { value: 10000, suffix: "+", label: "Youth Engaged" },
  { value: 100, suffix: "+", label: "Institutions Connected" },
  { value: 16, suffix: "+", label: "Countries Connected" },
];

// Ease-out curve so the count starts fast and settles gently on the final number.
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target, { duration = 1800, delay = 0, start = false } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const timeout = setTimeout(() => {
      const step = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setValue(Math.round(target * easeOutExpo(progress)));
        if (progress < 1) {
          frame.current = requestAnimationFrame(step);
        }
      };
      frame.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, target, duration, delay]);

  return value;
}

function StatCard({ value, suffix, label, start, delay }) {
  const count = useCountUp(value, { start, delay, duration: 1800 });

  return (
    <div className="impact-stat">
      <div className="impact-stat__number">
        {count.toLocaleString("en-US")}
        <span className="impact-stat__suffix">{suffix}</span>
      </div>
      <div className="impact-stat__label">{label}</div>
    </div>
  );
}

export default function ImpactStats() {
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
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`impact-section ${inView ? "impact-section--in" : ""}`} ref={sectionRef}>
      <style>{`
        .impact-section {
          position: relative;
          padding: 88px 24px;
          background: #0f2a1f;
          background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%),
                             radial-gradient(circle at 85% 80%, rgba(255,255,255,0.04), transparent 40%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .impact-section--in {
          opacity: 1;
          transform: translateY(0);
        }
        .impact-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(30deg, transparent 48%, rgba(255,255,255,0.035) 49%, rgba(255,255,255,0.035) 51%, transparent 52%),
            linear-gradient(-30deg, transparent 48%, rgba(255,255,255,0.035) 49%, rgba(255,255,255,0.035) 51%, transparent 52%);
          background-size: 64px 110px;
          pointer-events: none;
        }
        .impact-heading {
          position: relative;
          text-align: center;
          max-width: 640px;
          margin: 0 auto 56px;
        }
        .impact-heading__eyebrow {
          color: #7fd6a5;
          font-size: 13px;
          letter-spacing: 0.08em;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .impact-heading__title {
          color: #f4f7f2;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
        }
        .impact-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
        .impact-stat {
          text-align: center;
          padding: 32px 16px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
        }
        .impact-stat__number {
          font-size: clamp(32px, 4.2vw, 44px);
          font-weight: 800;
          color: #ffffff;
          font-variant-numeric: tabular-nums;
          line-height: 1;
        }
        .impact-stat__suffix {
          color: #7fd6a5;
        }
        .impact-stat__label {
          margin-top: 12px;
          font-size: 14px;
          color: #c9d8ce;
          letter-spacing: 0.01em;
        }
        @media (prefers-reduced-motion: reduce) {
          .impact-section {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="impact-heading">
        <div className="impact-heading__eyebrow">OUR REACH</div>
        <h2 className="impact-heading__title">Impact carried across the colony</h2>
      </div>

      <div className="impact-grid">
        {STATS.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            start={inView}
            delay={i * 150}
          />
        ))}
      </div>
    </section>
  );
}

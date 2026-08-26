import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Sparkles, Compass, Eye } from 'lucide-react';

// Reusable Section Header Component
const SectionHeader = ({
  subtitle,
  title,
  description,
  align = 'center',
  dark = false,
}) => (
  <div
    className={`space-y-3 ${
      align === 'center' ? 'text-center max-w-2xl mx-auto' : ''
    }`}
  >
    <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
      {subtitle}
    </span>

    <h2
      className={`text-3xl sm:text-4xl font-bold font-serif leading-tight ${
        dark ? 'text-white' : 'text-forest-deep'
      }`}
    >
      {title}
    </h2>

    {description && (
      <p
        className={`text-sm font-sans font-light leading-relaxed ${
          dark ? 'text-[#D0CFC9]' : 'text-earth-brown'
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

// Reusable Info Card for Mission/Vision
const InfoCard = ({
  icon: Icon,
  title,
  description,
  footerLabel,
  footerText,
}) => (
  <div className="bg-white border border-forest-deep/5 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6 flex flex-col justify-between">
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-forest-deep text-olive-accent flex items-center justify-center shadow-inner">
        <Icon size={22} />
      </div>

      <h3 className="text-2xl font-bold font-serif text-forest-deep">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
        {description}
      </p>
    </div>

    <div className="border-t border-forest-deep/5 pt-4">
      <span className="text-[9px] uppercase tracking-widest text-olive-accent font-semibold block mb-1">
        {footerLabel}
      </span>

      <span className="text-xs text-earth-brown font-light">
        {footerText}
      </span>
    </div>
  </div>
);

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full pt-24 bg-beige-warm min-h-screen">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="bg-forest-deep text-white py-20 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep via-forest-mid to-olive-accent/15 opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">

          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold">
            About Us
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white">
            Think, Live &amp; Work Like Ants
          </h1>

          <p className="text-sm text-[#D0CFC9] max-w-xl mx-auto font-light font-sans">
           Building a generation of youth leaders through education, research, innovation and action; from Bangladesh to the World.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section
        id="who-we-are"
        className="py-20 bg-white border-b border-forest-deep/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* =================================================
                VISUAL BLOCK
            ================================================== */}
            <div className="lg:col-span-5 aspect-[4/3] rounded-3xl bg-forest-deep flex flex-col items-center justify-center text-center p-6 border border-olive-accent/15 relative overflow-hidden group shadow-lg">

              {/* Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-olive-accent/25 opacity-90 z-0" />

              {/* =================================================
                  REACT READY SVG
              ================================================== */}
              <div className="absolute inset-0 z-0 w-full h-full">

                <svg
                  viewBox="0 0 800 600"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                >

                  <defs>

                    {/* Background Gradient */}
                    <linearGradient
                      id="bgGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#0F2E22"
                      />

                      <stop
                        offset="100%"
                        stopColor="#1B4B34"
                      />
                    </linearGradient>

                    {/* Radial Glow */}
                    <radialGradient
                      id="glow"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#B7C77A"
                        stopOpacity="0.35"
                      />

                      <stop
                        offset="100%"
                        stopColor="#B7C77A"
                        stopOpacity="0"
                      />
                    </radialGradient>

                    {/* Ant Symbol */}
                    <symbol
                      id="ant"
                      viewBox="-30 -16 60 32"
                    >

                      {/* Ant Legs */}
                      <g
                        stroke="#F3EFE3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.9"
                      >

                        <line
                          x1="-6"
                          y1="-4"
                          x2="-16"
                          y2="-12"
                        />

                        <line
                          x1="-6"
                          y1="0"
                          x2="-18"
                          y2="0"
                        />

                        <line
                          x1="-6"
                          y1="4"
                          x2="-16"
                          y2="12"
                        />

                        <line
                          x1="6"
                          y1="-4"
                          x2="16"
                          y2="-12"
                        />

                        <line
                          x1="6"
                          y1="0"
                          x2="18"
                          y2="0"
                        />

                        <line
                          x1="6"
                          y1="4"
                          x2="16"
                          y2="12"
                        />

                      </g>

                      {/* Ant Antennae */}
                      <g
                        stroke="#F3EFE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.9"
                      >

                        <line
                          x1="-14"
                          y1="-3"
                          x2="-20"
                          y2="-8"
                        />

                        <line
                          x1="-14"
                          y1="-1"
                          x2="-21"
                          y2="-3"
                        />

                      </g>

                      {/* Ant Body */}
                      <ellipse
                        cx="8"
                        cy="0"
                        rx="11"
                        ry="8"
                        fill="#F3EFE3"
                      />

                      <ellipse
                        cx="-4"
                        cy="0"
                        rx="6"
                        ry="5"
                        fill="#F3EFE3"
                      />

                      <circle
                        cx="-13"
                        cy="0"
                        r="4.5"
                        fill="#F3EFE3"
                      />

                    </symbol>

                  </defs>

                  {/* =================================================
                      SVG BACKGROUND
                  ================================================== */}
                  <rect
                    width="800"
                    height="600"
                    fill="url(#bgGrad)"
                  />

                  {/* =================================================
                      TOPOGRAPHIC ACCENTS - TOP RIGHT
                  ================================================== */}
                  <g
                    stroke="#F3EFE3"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.18"
                  >

                    <path d="M620,20 C680,60 700,110 760,90" />

                    <path d="M600,50 C660,90 690,140 750,130" />

                    <path d="M580,80 C640,120 670,170 740,170" />

                  </g>

                  {/* Decorative dots */}
                  <g
                    fill="#F3EFE3"
                    opacity="0.35"
                  >

                    <circle
                      cx="40"
                      cy="40"
                      r="3"
                    />

                    <circle
                      cx="56"
                      cy="40"
                      r="3"
                    />

                    <circle
                      cx="40"
                      cy="56"
                      r="3"
                    />

                  </g>

                  {/* =================================================
                      TOPOGRAPHIC ACCENTS - BOTTOM LEFT
                  ================================================== */}
                  <g
                    stroke="#F3EFE3"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.15"
                  >

                    <path d="M20,560 C80,520 100,480 40,440" />

                    <path d="M40,580 C100,540 130,500 70,460" />

                  </g>

                  {/* =================================================
                      CENTER GLOW
                  ================================================== */}
                  <circle
                    cx="400"
                    cy="300"
                    r="230"
                    fill="url(#glow)"
                  />

                  {/* =================================================
                      ORBIT PATH
                  ================================================== */}
                  <circle
                    cx="400"
                    cy="300"
                    r="190.5"
                    fill="none"
                    stroke="#B7C77A"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                    opacity="0.5"
                  />

                  {/* =================================================
                      HEXAGON EMBLEM
                  ================================================== */}
                  <polygon
                    points="400,205 483,252.5 483,347.5 400,395 317,347.5 317,252.5"
                    fill="#123626"
                    stroke="#B7C77A"
                    strokeWidth="3"
                  />

                  {/* =================================================
                      SPROUTING LEAF
                  ================================================== */}
                  <g transform="translate(400,300)">

                    {/* Stem */}
                    <path
                      d="M0,26 C0,10 0,-6 0,-26"
                      stroke="#B7C77A"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />

                    {/* Left Leaf */}
                    <path
                      d="M0,-6 C-22,-14 -28,-34 -14,-46 C2,-34 8,-16 0,-6 Z"
                      fill="#B7C77A"
                    />

                    {/* Right Leaf */}
                    <path
                      d="M0,4 C22,-4 28,-24 14,-36 C-2,-24 -8,-6 0,4 Z"
                      fill="#8FA35C"
                    />

                  </g>

                  {/* =================================================
                      ANTS AROUND THE COLONY
                  ================================================== */}

                  <use
                    href="#ant"
                    x="370"
                    y="74"
                    width="60"
                    height="32"
                    transform="rotate(90 400 90)"
                  />

                  <use
                    href="#ant"
                    x="560"
                    y="174"
                    width="60"
                    height="32"
                    transform="rotate(150 590 190)"
                  />

                  <use
                    href="#ant"
                    x="560"
                    y="394"
                    width="60"
                    height="32"
                    transform="rotate(210 590 410)"
                  />

                  <use
                    href="#ant"
                    x="370"
                    y="494"
                    width="60"
                    height="32"
                    transform="rotate(270 400 510)"
                  />

                  <use
                    href="#ant"
                    x="180"
                    y="394"
                    width="60"
                    height="32"
                    transform="rotate(330 210 410)"
                  />

                  <use
                    href="#ant"
                    x="180"
                    y="174"
                    width="60"
                    height="32"
                    transform="rotate(30 210 190)"
                  />

                </svg>

              </div>

              {/* =================================================
                  WHO WE ARE OVERLAY
                  Filename removed
              ================================================== */}
              <div className="relative z-10 flex flex-col items-center p-6 border border-white/10 rounded-2xl bg-forest-deep/40 backdrop-blur-md">

                <Shield
                  className="text-olive-accent mb-3"
                  size={28}
                />

                <span className="text-xs text-white uppercase tracking-widest font-bold">
                  Who We Are
                </span>

              </div>

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <div className="lg:col-span-7 space-y-6">

              <SectionHeader
                align="left"
                subtitle="Who We Are"
                title="A Youth-Led Movement for a Sustainable Planet"
              />

              <div className="space-y-4 text-xs sm:text-sm text-earth-brown leading-relaxed font-sans font-light">

                <p>
                  Founded in 2021,{' '}
                  <strong className="text-forest-deep font-semibold">
                    Earth&apos;s Ants
                  </strong>{' '}
                  is a Bangladesh-born, youth-led environmental organization
                  advancing climate education, environmental awareness,
                  research, innovation, and community-based sustainability
                  action.
                </p>

                <p>
                  Guided by our motto, &quot;Think, Live &amp; Work Like
                  Ants,&quot; we empower young people to learn, lead, and act
                  collectively for a more sustainable future — through
                  institutional programmes, clean campus initiatives,
                  research-based discussions, digital campaigns, policy
                  engagement, and grassroots outreach.
                </p>

                <p>
                  With a growing network across{' '}
                  <strong className="text-forest-deep font-semibold">
                    100+ institutions in 16 countries
                  </strong>
                  , we work with students, educators, experts, youth leaders,
                  and communities to promote climate literacy, green skills,
                  responsible behavior, and local resilience — moving beyond
                  awareness toward measurable, scalable, partnership-driven
                  impact.
                </p>

              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-forest-deep/5">

                {/* Climate Education */}
                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 rounded-lg bg-olive-accent/15 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Shield size={16} />
                  </div>

                  <div>

                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider mb-0.5">
                      Climate Education
                    </h4>

                    <p className="text-[11px] text-earth-brown/80 font-light leading-relaxed">
                     Building climate literacy and green skills among young people.

                    </p>

                  </div>

                </div>

                {/* Global Youth Network */}
                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 rounded-lg bg-olive-accent/15 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Sparkles size={16} />
                  </div>

                  <div>

                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider mb-0.5">
                      Global Youth Network
                    </h4>

                    <p className="text-[11px] text-earth-brown/80 font-light leading-relaxed">
                      Connecting young changemakers across 16 countries for collective action.
                    </p>

                  </div>

                </div>
                  
                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 rounded-lg bg-olive-accent/15 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Sparkles size={16} />
                  </div>

                  <div>

                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider mb-0.5">
                      COMMUNITY ACTION
                    </h4>

                    <p className="text-[11px] text-earth-brown/80 font-light leading-relaxed">
                      Taking sustainability from awareness to action at the local level.
                    </p>

                  </div>

                </div>

                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 rounded-lg bg-olive-accent/15 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Sparkles size={16} />
                  </div>

                  <div>

                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider mb-0.5">
                      RESEARCH & INNOVATION
                    </h4>

                    <p className="text-[11px] text-earth-brown/80 font-light leading-relaxed">
                      Turning environmental challenges into evidence-based solutions.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section
        id="mission-vision"
        className="py-20 bg-soft-white border-b border-forest-deep/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Mission */}
            <InfoCard
              icon={Compass}
              title="Our Mission"
              description="Earth’s Ants exists to empower youth as leaders, innovators, and changemakers for a sustainable future. Through climate education, research, community engagement, and innovation-driven initiatives, we equip young people with the knowledge, skills, and opportunities to address environmental challenges. Guided by our philosophy “Think, Live & Work Like Ants,” we believe collective action creates lasting impact. By connecting youth, institutions, experts, and communities, we transform environmental awareness into practical solutions that strengthen climate resilience, protect biodiversity, and promote responsible living."
              footerLabel="Reach"
              footerText="A growing youth network across 100+ institutions nationally and over 16 countries"
            />

            {/* Vision */}
            <InfoCard
              icon={Eye}
              title="Our Vision"
              description="We envision a future where sustainability becomes a shared responsibility where communities, guided by science, education, and innovation, work together to protect nature and build a resilient planet. Our vision is to inspire a generation of environmentally responsible leaders who develop climate-smart solutions, advance green innovation, and create sustainable communities. By nurturing youth-driven action and collaboration, we aspire to contribute toward making Bangladesh a global model for sustainability by 2040 ."
              footerLabel="Our Aspiration"
              footerText="A world where sustainable living becomes a culture, and every individual becomes a guardian of the planet."
            />

             <InfoCard
              icon={Eye}
              title="Shonar Tori"
              description="Shonar Tori is Earth’s Ants’ sustainable lifestyle initiative as well as a social enterprise dedicated to preserving Bengal’s rich cultural heritage while creating opportunities for rural artisans and traditional craftsmen. By connecting authentic craftsmanship with conscious consumers, Shonar Tori promotes ethical fashion, responsible consumption, and the preservation of indigenous artistic traditions. The initiative represents our belief that sustainability is not only about protecting nature, it is also about protecting communities, culture and livelihoods."
              
            />

             <InfoCard
              icon={Eye}
              title="ANTHROGEN Lab"
              description="ANTHROGEN Lab is Earth’s Ants’ research and innovation platform dedicated to exploring environmental challenges through scientific thinking, interdisciplinary research and solution-oriented approaches. The lab aims to bridge the gap between knowledge and action by encouraging young researchers, innovators, and environmental thinkers to develop practical solutions for climate resilience, sustainability, and future challenges. Through research, experimentation, collaboration and knowledge sharing, ANTHROGEN Lab nurtures the next generation of environmental scientists and innovators"
              
            />

          </div>

        </div>
      </section>

    </div>
  );
}
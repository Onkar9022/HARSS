import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { teamMembers } from '../data/team';

function TeamCard({ member, index }) {
  return (
    <div
      className="flex-shrink-0 w-[260px] sm:w-[280px] bg-surface-container-low rounded-xl overflow-hidden group transition-all hover:bg-surface-container"
      style={{ border: '1px solid rgba(61, 73, 76, 0.3)' }}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container-high/40">
        <span className="text-label-sm text-outline font-mono">
          {member.isGuide ? 'GUIDE' : `HARSS / ${String(member.id).padStart(2, '0')}`}
        </span>
        <div className="flex items-center gap-space-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <span className="text-label-sm text-secondary font-mono">ACTIVE</span>
        </div>
      </div>

      {/* Photo */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container-lowest">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-all duration-500 filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-space-md flex flex-col gap-1">
        <h4 className="text-[16px] font-display text-on-surface font-semibold leading-tight">
          {member.name}
        </h4>
        <span className={`text-label-md font-mono ${member.isGuide ? 'text-tertiary' : 'text-primary'} uppercase`}>
          {member.role}
        </span>
        <p className="text-body-sm text-on-surface-variant">{member.focus}</p>
      </div>

      {/* Bottom accent */}
      <div className={`h-[2px] w-full ${member.isGuide ? 'bg-tertiary/50' : 'bg-primary/30'}`} />
    </div>
  );
}

export default function TeamSection() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Duplicate members for seamless infinite loop
  const extendedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let scrollPos = 0;
    const speed = 0.5; // pixels per frame

    // Calculate the width of one full set
    const singleSetWidth = carousel.scrollWidth / 3;

    function animate() {
      if (!isPaused) {
        scrollPos += speed;
        // Reset seamlessly when we've scrolled past one full set
        if (scrollPos >= singleSetWidth) {
          scrollPos -= singleSetWidth;
        }
        carousel.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="w-full py-16 lg:py-24 bg-surface-container-lowest relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="teamGrid" patternUnits="userSpaceOnUse" width="48" height="48">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-outline-variant" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#teamGrid)" />
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto flex flex-col items-center px-4 md:px-margin"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-sm text-secondary uppercase tracking-widest mb-space-xs">
            THE TEAM BEHIND HARSS
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Meet the Team
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            A multidisciplinary team working together to develop the HARSS autonomous robotics concept.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

          <div
            ref={carouselRef}
            className="flex gap-space-md overflow-x-hidden px-4 md:px-8 py-2 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extendedMembers.map((member, i) => (
              <TeamCard key={`${member.id}-${i}`} member={member} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Bottom status bar */}
        <motion.div
          className="flex items-center justify-center gap-space-lg px-4 md:px-margin"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-space-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-label-sm text-secondary font-mono">
              {teamMembers.length} MEMBERS
            </span>
          </div>
          <span className="text-outline-variant text-label-sm">|</span>
          <span className="text-label-sm text-on-surface-variant font-mono">
            MULTIDISCIPLINARY TEAM
          </span>
          <span className="text-outline-variant text-label-sm">|</span>
          <span className="text-label-sm text-primary font-mono">
            {isPaused ? 'PAUSED' : 'AUTO-SCROLL'}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

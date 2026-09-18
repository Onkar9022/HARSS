import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Radar, Eye, Cpu, Move3D, Radio, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

import perspectiveImg from '../assets/Perspective view.jpeg';
import frontImg from '../assets/FrontView.jpeg';
import leftImg from '../assets/LeftView.jpeg';
import rightImg from '../assets/RightView.jpeg';
import topImg from '../assets/TopView.jpeg';
import bottomImg from '../assets/BottomView.jpeg';
import rearImg from '../assets/RareView.jpeg';

/* ── View Data ─────────────────────────────────────── */
const modelViews = [
  {
    id: "perspective",
    label: "PERSPECTIVE",
    shortLabel: "3D",
    image: perspectiveImg,
    title: "Isometric Overview",
    desc: "Full 3D perspective of the HARSS platform showing the integrated sensor turret assembly, tracked mobility chassis, and environmental sensing arrays.",
    highlights: [
      { label: "SENSOR TURRET", color: "primary" },
      { label: "TRACKED CHASSIS", color: "secondary" },
      { label: "SENSOR ARRAYS", color: "tertiary" },
    ],
  },
  {
    id: "front",
    label: "FRONT VIEW",
    shortLabel: "FRONT",
    image: frontImg,
    title: "Forward-Facing Profile",
    desc: "Front elevation showing the primary vision system mounting, forward sensor pods, and frontal armor geometry designed for environmental protection.",
    highlights: [
      { label: "VISION PODS", color: "primary" },
      { label: "FORWARD SENSORS", color: "secondary" },
      { label: "FRONT PROFILE", color: "tertiary" },
    ],
  },
  {
    id: "rear",
    label: "REAR VIEW",
    shortLabel: "REAR",
    image: rearImg,
    title: "Rear Systems Profile",
    desc: "Rear elevation revealing the exhaust and cooling ventilation, rear-facing environmental sensors, and communication antenna mounting points.",
    highlights: [
      { label: "COOLING SYSTEM", color: "primary" },
      { label: "REAR SENSORS", color: "secondary" },
      { label: "COMMS MOUNT", color: "tertiary" },
    ],
  },
  {
    id: "left",
    label: "LEFT VIEW",
    shortLabel: "LEFT",
    image: leftImg,
    title: "Port Side Elevation",
    desc: "Left-side profile showing the tracked suspension geometry, lateral sensor placement, and side panel access points for maintenance and payload bays.",
    highlights: [
      { label: "TRACK ASSEMBLY", color: "primary" },
      { label: "LATERAL SENSORS", color: "secondary" },
      { label: "ACCESS PANELS", color: "tertiary" },
    ],
  },
  {
    id: "right",
    label: "RIGHT VIEW",
    shortLabel: "RIGHT",
    image: rightImg,
    title: "Starboard Side Elevation",
    desc: "Right-side profile displaying the symmetric track drive system, starboard sensor arrays, and ruggedized chassis construction.",
    highlights: [
      { label: "DRIVE SYSTEM", color: "primary" },
      { label: "STARBOARD ARRAY", color: "secondary" },
      { label: "CHASSIS FRAME", color: "tertiary" },
    ],
  },
  {
    id: "top",
    label: "TOP VIEW",
    shortLabel: "TOP",
    image: topImg,
    title: "Overhead Plan View",
    desc: "Top-down view revealing the overall platform footprint, sensor turret rotation clearance, and the spatial layout of environmental sensing modules.",
    highlights: [
      { label: "TURRET SWEEP", color: "primary" },
      { label: "PLATFORM FOOTPRINT", color: "secondary" },
      { label: "MODULE LAYOUT", color: "tertiary" },
    ],
  },
  {
    id: "bottom",
    label: "BOTTOM VIEW",
    shortLabel: "BTM",
    image: bottomImg,
    title: "Undercarriage Profile",
    desc: "Underside view showing the ground clearance geometry, track drive mechanisms, and ruggedized undercarriage designed for rough terrain operation.",
    highlights: [
      { label: "GROUND CLEARANCE", color: "primary" },
      { label: "DRIVE MECHANISM", color: "secondary" },
      { label: "UNDERCARRIAGE", color: "tertiary" },
    ],
  },
];

/* ── Feature Specs ─────────────────────────────────── */
const features = [
  { id: "01", icon: Radar, title: "SENSOR ARRAY", desc: "Environmental sensing and perception", color: "primary" },
  { id: "02", icon: Eye, title: "VISION SYSTEM", desc: "Computer vision for environmental understanding", color: "secondary" },
  { id: "03", icon: Cpu, title: "INTELLIGENT CORE", desc: "AI-assisted analysis and decision support", color: "tertiary" },
  { id: "04", icon: Move3D, title: "MOBILITY SYSTEM", desc: "Robotic movement and autonomous navigation", color: "primary" },
  { id: "05", icon: Radio, title: "MULTI-SENSOR FUSION", desc: "Combines information from multiple sensing sources", color: "secondary" },
  { id: "06", icon: ShieldCheck, title: "HUMAN SUPERVISION", desc: "Human-in-the-loop operational oversight", color: "tertiary" },
];

/* ── Animation Variants ────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const featureVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
  }),
};

/* ── Component ─────────────────────────────────────── */
export default function ProposedModel() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const [scanComplete, setScanComplete] = useState(false);

  const currentView = modelViews[activeIndex];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setScanComplete(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  function navigate(dir) {
    setActive(([prev]) => {
      const next = (prev + dir + modelViews.length) % modelViews.length;
      return [next, dir];
    });
  }

  function goTo(index) {
    setActive(([prev]) => [index, index > prev ? 1 : -1]);
  }

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proposed-model"
      className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface-container-lowest relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="modelGrid" patternUnits="userSpaceOnUse" width="32" height="32">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-outline-variant" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modelGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="flex flex-col max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-sm text-primary uppercase tracking-widest mb-space-xs">
            PROPOSED SYSTEM
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Meet the HARSS Platform
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            An intelligent robotic platform designed to support high-risk operations through autonomous perception,
            environmental awareness, intelligent analysis, and human-supervised mission support.
          </p>
        </motion.div>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

          {/* ═══════ LEFT — Image Gallery ═══════ */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">

            {/* Main Image Container */}
            <motion.div
              className="relative bg-surface-container-low rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              style={{ border: '1px solid rgba(76, 215, 246, 0.15)' }}
            >
              {/* Top info bar */}
              <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container-high/50 border-b border-outline-variant/20">
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-label-sm text-primary font-mono uppercase tracking-wider">
                    CAD_RENDER // {currentView.label}
                  </span>
                </div>
                <span className="text-label-sm text-on-surface-variant font-mono">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(modelViews.length).padStart(2, '0')}
                </span>
              </div>

              {/* Inner dot grid */}
              <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#4cd7f6_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* Scan line on first load */}
              {isInView && !scanComplete && (
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(76,215,246,0.08) 50%, transparent 100%)',
                    animation: 'scanDown 1.5s ease-in-out forwards',
                  }}
                />
              )}

              {/* Image Display */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={currentView.id}
                    src={currentView.image}
                    alt={`HARSS Platform — ${currentView.title}`}
                    className="absolute inset-0 w-full h-full object-contain p-4 md:p-8"
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Corner reticles */}
                <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-primary/30 pointer-events-none" />
                <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-primary/30 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-primary/30 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-primary/30 pointer-events-none" />

                {/* ◀ Arrow */}
                <button
                  onClick={() => navigate(-1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-surface-container-high/80 backdrop-blur-sm hover:bg-primary/20 text-on-surface-variant hover:text-primary transition-all flex items-center justify-center shadow-lg group"
                  style={{ border: '1px solid rgba(61, 73, 76, 0.4)' }}
                  aria-label="Previous view"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* ▶ Arrow */}
                <button
                  onClick={() => navigate(1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-surface-container-high/80 backdrop-blur-sm hover:bg-primary/20 text-on-surface-variant hover:text-primary transition-all flex items-center justify-center shadow-lg group"
                  style={{ border: '1px solid rgba(61, 73, 76, 0.4)' }}
                  aria-label="Next view"
                >
                  <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* View-specific highlights strip */}
              <div className="flex items-center gap-space-md px-space-md py-space-xs bg-surface-container-lowest/60 border-t border-outline-variant/10">
                {currentView.highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-space-xs">
                    <span className={`w-1 h-1 rounded-full bg-${h.color}`} />
                    <span className={`text-label-sm text-${h.color} font-mono`}>{h.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="flex gap-space-xs overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
              {modelViews.map((view, i) => (
                <button
                  key={view.id}
                  onClick={() => goTo(i)}
                  className={`relative flex-shrink-0 w-[72px] h-[52px] md:w-[90px] md:h-[64px] rounded-lg overflow-hidden transition-all ${
                    activeIndex === i
                      ? 'ring-2 ring-primary shadow-lg scale-[1.02]'
                      : 'ring-1 ring-outline-variant/30 opacity-60 hover:opacity-90 hover:ring-outline-variant/60'
                  }`}
                >
                  <img
                    src={view.image}
                    alt={view.label}
                    className="w-full h-full object-contain bg-surface-container-low p-1"
                    draggable={false}
                  />
                  {/* Label overlay */}
                  <span className={`absolute bottom-0 inset-x-0 text-center py-0.5 text-[7px] md:text-[8px] font-mono uppercase tracking-wider ${
                    activeIndex === i
                      ? 'bg-primary/90 text-on-primary font-bold'
                      : 'bg-surface-container-highest/80 text-on-surface-variant'
                  }`}>
                    {view.shortLabel}
                  </span>
                </button>
              ))}
            </div>

            {/* View Description Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView.id + '-info'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-container-low p-space-md rounded-lg"
                style={{ border: '1px solid rgba(61, 73, 76, 0.2)' }}
              >
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="text-label-sm text-outline font-mono">
                    VIEW_{String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-outline-variant">—</span>
                  <span className="text-label-sm text-primary font-mono font-semibold">
                    {currentView.label}
                  </span>
                </div>
                <h4 className="text-[16px] font-display text-on-surface font-semibold mb-1">
                  {currentView.title}
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {currentView.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Model Status HUD */}
            <motion.div
              className="grid grid-cols-3 gap-space-xs bg-surface-container-low p-space-sm rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="text-label-sm text-outline uppercase">PROPOSED MODEL</span>
                <span className="text-label-md text-on-surface font-semibold font-mono">HARSS-01</span>
              </div>
              <div className="flex flex-col">
                <span className="text-label-sm text-outline uppercase">STATUS</span>
                <span className="text-label-md text-tertiary font-semibold font-mono">CONCEPT / PROTOTYPE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-label-sm text-outline uppercase">SYSTEM</span>
                <span className="text-label-md text-primary font-semibold font-mono">UNDER DEVELOPMENT</span>
              </div>
            </motion.div>
          </div>

          {/* ═══════ RIGHT — Technical Info Panel ═══════ */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-space-md"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between bg-surface-container-high/60 px-space-md py-space-sm rounded-lg">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-label-md text-on-surface uppercase tracking-wider font-mono">
                  HARSS PROTOTYPE
                </span>
              </div>
              <span className="text-label-sm text-secondary font-mono">SYS_REF</span>
            </div>

            {/* Feature Cards */}
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  variants={featureVariants}
                  className="bg-surface-container-low p-space-md rounded-lg hover:bg-surface-container transition-all group flex items-start gap-space-md"
                  style={{ border: '1px solid rgba(61, 73, 76, 0.3)' }}
                >
                  <div className={`w-10 h-10 rounded bg-${feat.color}/15 text-${feat.color} flex items-center justify-center shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-space-xs mb-0.5">
                      <span className="text-label-sm text-outline font-mono">{feat.id}</span>
                      <span className="text-outline-variant">—</span>
                      <span className={`text-label-sm text-${feat.color} font-mono font-semibold`}>{feat.title}</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Tech Note */}
            <div className="bg-surface-container-lowest p-space-sm rounded text-label-sm text-outline font-mono flex items-center justify-between">
              <span>CLASSIFICATION:</span>
              <span className="text-on-surface-variant">RESEARCH PROTOTYPE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scan animation keyframe */}
      <style>{`
        @keyframes scanDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}

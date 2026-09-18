import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Terminal } from 'lucide-react';

const statusItems = [
  { label: "SYSTEM CORE", value: "AI ACTIVE", color: "secondary" },
  { label: "PERCEPTION", value: "VISION READY", color: "primary" },
  { label: "SENSORS ARRAY", value: "FUSED SYNC", color: "secondary" },
  { label: "PATHWAY PLANNER", value: "READY (RTK)", color: "tertiary" },
];

export default function Hero() {
  return (
    <section className="relative w-full px-4 md:px-margin py-space-xl lg:py-24 overflow-hidden bg-gradient-to-b from-surface via-surface-container-lowest to-surface">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tacticalGrid" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant" />
              <circle cx="0" cy="0" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tacticalGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-space-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tactical Badge */}
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-label-sm uppercase text-primary tracking-widest">
              HYBRID AUTONOMOUS ROBOTIC SURGICAL STRIKE SYSTEM
            </span>
            <span className="text-outline-variant px-space-xs">|</span>
            <span className="text-label-sm text-secondary uppercase">SIM_MODE</span>
          </div>

          {/* Headline */}
          <h1 className="flex flex-col gap-space-xs">
            <span className="text-headline-xl text-primary tracking-tight">
              HARSS
            </span>
            <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-display font-semibold text-on-surface tracking-wide leading-snug">
              Hybrid Autonomous Robotic Surgical Strike System
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Intelligent autonomy for high-risk operations — AI-powered robotic intelligence 
            engineered to analyze hazardous environments, synthesize multi-domain risk vectors, 
            and execute precise mission choices with human supervision.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <a
              href="#solution"
              className="px-space-xl py-space-md bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container text-label-md uppercase tracking-wider font-semibold rounded glow-primary-lg transition-all flex items-center gap-space-xs"
            >
              <span>Explore HARSS Platform</span>
              <ArrowDown size={16} />
            </a>
            <a
              href="#digital-twin"
              className="px-space-lg py-space-md bg-surface-container-high text-primary hover:bg-surface-variant text-label-md uppercase tracking-wider font-medium rounded transition-colors flex items-center gap-space-xs"
            >
              <GitBranch size={16} />
              <span>View Architecture</span>
            </a>
            <a
              href="#mission-control"
              className="text-label-md text-secondary hover:text-secondary-fixed uppercase tracking-wider underline underline-offset-4 flex items-center gap-space-xs py-space-sm transition-colors"
            >
              <Terminal size={16} />
              <span>Launch Cockpit Demo</span>
            </a>
          </div>

          {/* Telemetry Status Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mt-space-md bg-surface-container-low p-space-md rounded-lg shadow-sm">
            {statusItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-label-sm text-on-surface-variant uppercase">{item.label}</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`w-1.5 h-1.5 rounded-full bg-${item.color} ${item.color === 'tertiary' ? 'animate-pulse' : ''}`} />
                  <span className={`text-label-md text-${item.color} font-semibold`}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Radar Widget */}
        <motion.div
          className="lg:col-span-5 relative flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full relative bg-surface-container-low rounded-xl p-space-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-high/40 px-space-sm py-1 rounded">
              <div className="flex items-center gap-space-xs">
                <div className="w-4 h-4 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <span className="text-label-md uppercase tracking-wider text-on-surface">
                  TACTICAL_SWEEP // SENSOR_RADAR
                </span>
              </div>
              <span className="text-label-sm text-secondary font-mono">RTK-LOCK</span>
            </div>

            {/* SVG Radar Canvas */}
            <div className="relative w-full aspect-square max-w-[380px] mx-auto flex items-center justify-center bg-surface-container-lowest rounded-lg overflow-hidden">
              <svg className="w-full h-full p-4" viewBox="0 0 300 300">
                {/* Range circles */}
                <circle cx="150" cy="150" r="130" fill="none" stroke="currentColor" strokeWidth="1" className="text-outline-variant/30" />
                <circle cx="150" cy="150" r="95" fill="none" stroke="currentColor" strokeWidth="1" className="text-outline-variant/40" />
                <circle cx="150" cy="150" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-outline-variant/50" />
                <circle cx="150" cy="150" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
                
                {/* Crosshairs */}
                <line x1="20" x2="280" y1="150" y2="150" stroke="currentColor" strokeWidth="0.75" className="text-outline-variant/40" />
                <line x1="150" x2="150" y1="20" y2="280" stroke="currentColor" strokeWidth="0.75" className="text-outline-variant/40" />
                
                {/* Range ticks */}
                <text x="155" y="62" className="fill-outline text-[8px] font-mono">50m</text>
                <text x="155" y="97" className="fill-outline text-[8px] font-mono">100m</text>
                <text x="155" y="132" className="fill-outline text-[8px] font-mono">150m</text>

                {/* Animated Sweep */}
                <g style={{ transformOrigin: "150px 150px" }}>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 150 150"
                    to="360 150 150"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <path d="M 150 150 L 280 150 A 130 130 0 0 0 242 58 Z" fill="url(#radarGrad)" opacity="0.45" />
                  <line x1="150" y1="150" x2="280" y2="150" stroke="#4cd7f6" strokeWidth="1.5" />
                </g>

                <defs>
                  <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Robot Core */}
                <circle cx="150" cy="150" r="4" fill="#4cd7f6" />
                <circle cx="150" cy="150" r="8" fill="none" stroke="#4cd7f6" strokeWidth="1" className="animate-ping" />

                {/* Entities */}
                <g transform="translate(195, 105)">
                  <rect x="-4" y="-4" width="8" height="8" fill="#ffb4ab" className="animate-pulse" />
                  <circle cx="0" cy="0" r="10" fill="none" stroke="#ffb4ab" strokeWidth="0.8" strokeDasharray="2 2" />
                  <text x="12" y="3" className="fill-error text-[8px] font-mono font-bold">OBJ_01</text>
                </g>

                <g transform="translate(90, 185)">
                  <polygon points="0,-4 4,4 -4,4" fill="#ffb95f" />
                  <text x="-28" y="14" className="fill-tertiary text-[8px] font-mono">HAZARD</text>
                </g>

                <g transform="translate(110, 85)">
                  <circle cx="0" cy="0" r="3" fill="#4edea3" />
                  <text x="6" y="2" className="fill-secondary text-[8px] font-mono">RELAY_ALPHA</text>
                </g>
              </svg>

              {/* Coordinate overlay */}
              <div className="absolute bottom-2 left-2 bg-surface-container-highest/90 backdrop-blur-md px-2 py-1 rounded text-label-sm text-on-surface">
                GRID: <span className="text-primary font-mono">X:24.52 | Y:18.21 | Z:0.45</span>
              </div>
              <div className="absolute top-2 right-2 bg-surface-container-highest/90 backdrop-blur-md px-2 py-1 rounded text-label-sm text-secondary">
                SCAN: 360° LiDAR
              </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="mt-space-md grid grid-cols-4 gap-space-xs text-center bg-surface-container-lowest p-space-sm rounded">
              {[
                { label: "BATT", value: "87%", color: "secondary" },
                { label: "LATENCY", value: "LOW", color: "primary" },
                { label: "SIGNAL", value: "STRONG", color: "secondary" },
                { label: "CARRIER", value: "MESH-9", color: "on-surface" },
              ].map((t) => (
                <div key={t.label} className="flex flex-col">
                  <span className="text-label-sm text-outline">{t.label}</span>
                  <span className={`text-label-md text-${t.color} font-semibold`}>{t.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

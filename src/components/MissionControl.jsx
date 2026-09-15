import { motion } from 'framer-motion';
import { Maximize2, Pause, RotateCcw, OctagonX, Box } from 'lucide-react';

export default function MissionControl({ onLaunchCockpit }) {
  return (
    <section id="mission-control" className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">
              TACTICAL COCKPIT
            </span>
            <h2 className="text-headline-lg text-on-surface font-semibold">
              Mission Control Operations Suite
            </h2>
            <p className="text-body-md text-on-surface-variant mt-space-xs">
              Autonomous fleet orchestration with human supervision and real-time remote intervention controls.
            </p>
          </motion.div>

          <button
            onClick={onLaunchCockpit}
            className="px-space-lg py-space-sm bg-primary text-on-primary text-label-md uppercase tracking-wider font-semibold rounded hover:bg-primary-container hover:text-on-primary-container shadow transition-all flex items-center gap-space-xs w-fit"
          >
            <Maximize2 size={16} />
            <span>Launch Full Cockpit Demo</span>
          </button>
        </div>

        {/* Dashboard Container */}
        <motion.div
          className="w-full bg-surface-container-low rounded-xl p-space-md md:p-space-lg shadow-2xl flex flex-col gap-space-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Cockpit Header Strip */}
          <div className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded-lg flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-mono font-bold text-[16px] text-on-surface">MISSION: RECON-01</span>
              <span className="text-outline-variant">|</span>
              <span className="text-label-md font-mono text-primary">GRID: ECHO-7</span>
            </div>
            <div className="flex items-center gap-space-md text-label-sm font-mono">
              <span className="text-on-surface-variant">FLEET: <strong className="text-on-surface">4 UNITS ACTIVE</strong></span>
              <span className="text-secondary font-bold">STATUS: ENGAGED</span>
              <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded">LINK 100%</span>
            </div>
          </div>

          {/* 3-Column Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
            {/* Col 1: System Telemetry */}
            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-sm">
                <span className="text-label-sm text-outline uppercase font-mono">SYSTEM VITALS</span>
                
                {[
                  { label: "Core Temperature", value: "34°C (NOMINAL)", color: "secondary", pct: 42 },
                  { label: "Ground Velocity", value: "2.4 m/s", color: "primary", pct: 58 },
                  { label: "Mesh Latency", value: "LOW", color: "secondary", pct: 15 },
                ].map((v) => (
                  <div key={v.label}>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm text-on-surface-variant">{v.label}</span>
                      <span className={`font-mono text-${v.color} font-bold text-body-sm`}>{v.value}</span>
                    </div>
                    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
                      <div className={`bg-${v.color} h-full rounded-full transition-all`} style={{ width: `${v.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                <span className="text-label-sm text-outline uppercase font-mono">CHEMICAL / ATMOSPHERE</span>
                {[
                  { label: "Air Quality Index:", value: "NORMAL", color: "secondary" },
                  { label: "Methane Sniffer:", value: "0.00% LEL", color: "on-surface" },
                  { label: "Ionizing Radiation:", value: "BACKGROUND", color: "secondary" },
                ].map((c) => (
                  <div key={c.label} className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">{c.label}</span>
                    <span className={`font-mono text-${c.color} font-bold`}>{c.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Live Tactical Map */}
            <div className="lg:col-span-6 bg-surface-container-lowest rounded-lg p-space-md flex flex-col justify-between relative overflow-hidden min-h-[300px]">
              <div className="flex items-center justify-between z-10">
                <span className="text-label-sm text-primary uppercase font-mono tracking-wider">
                  LIVE PERSPECTIVE // CAMERA STREAM (SYNTHETIC)
                </span>
                <span className="text-label-sm bg-error/20 text-error px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                  REC ●
                </span>
              </div>

              {/* Wireframe background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <polygon points="200,20 380,180 20,180" fill="none" stroke="#4cd7f6" strokeWidth="1" />
                  <line x1="200" y1="20" x2="200" y2="180" stroke="#4cd7f6" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="200" cy="100" r="40" fill="none" stroke="#4edea3" strokeWidth="1" />
                </svg>
              </div>

              <div className="relative z-10 text-center my-auto">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-surface-container-high/80 text-primary mb-space-xs">
                  <Box size={32} />
                </div>
                <p className="text-[16px] font-display text-on-surface font-semibold">Autonomous Trajectory Locked</p>
                <p className="text-label-sm text-on-surface-variant font-mono">WAYPOINT 14/20 REACHED — ZERO ANOMALIES ENCOUNTERED</p>
              </div>

              <div className="flex items-center justify-between z-10 pt-space-sm bg-surface-container-low/80 backdrop-blur px-space-sm py-1 rounded">
                <span className="text-label-sm text-outline">AUTO_PILOT: ENGAGED</span>
                <span className="text-label-sm text-secondary font-mono">SWARM_SYNC: NOMINAL</span>
              </div>
            </div>

            {/* Col 3: Threat & Controls */}
            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                <span className="text-label-sm text-outline uppercase font-mono">THREAT CLASSIFICATION</span>
                {[
                  { label: "Overall Threat:", value: "LOW / SAFE", badge: true },
                  { label: "Detected Obstacles:", value: "2 (STATIONARY)", badge: false },
                  { label: "Contaminant Alert:", value: "0 DETECTED", badge: false },
                ].map((t) => (
                  <div key={t.label} className="flex items-center justify-between">
                    <span className="text-body-sm text-on-surface-variant">{t.label}</span>
                    {t.badge ? (
                      <span className="text-label-md bg-secondary/10 text-secondary px-2 py-0.5 rounded font-bold font-mono">{t.value}</span>
                    ) : (
                      <span className="font-mono text-on-surface font-bold text-body-sm">{t.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-sm">
                <span className="text-label-sm text-outline uppercase font-mono">DIRECT INTERVENTION</span>
                <button className="w-full py-space-xs bg-surface-container-high hover:bg-surface-variant text-on-surface text-label-sm uppercase font-mono rounded transition-colors flex items-center justify-center gap-1">
                  <Pause size={14} />
                  <span>Hold Position</span>
                </button>
                <button className="w-full py-space-xs bg-surface-container-high hover:bg-surface-variant text-primary text-label-sm uppercase font-mono rounded transition-colors flex items-center justify-center gap-1">
                  <RotateCcw size={14} />
                  <span>Re-Plan Corridor</span>
                </button>
                <button className="w-full py-space-xs bg-error-container hover:bg-error text-on-error-container hover:text-on-error text-label-sm uppercase font-mono font-bold rounded transition-colors flex items-center justify-center gap-1">
                  <OctagonX size={14} />
                  <span>E-STOP / RTB</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

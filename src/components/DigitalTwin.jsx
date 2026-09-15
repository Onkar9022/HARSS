import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const modes = [
  { id: "lidar", label: "LiDAR Point Cloud" },
  { id: "thermal", label: "Thermal View" },
  { id: "mesh", label: "Topological Mesh" },
];

const waypoints = [
  { x: 280, y: 280 },
  { x: 460, y: 310 },
  { x: 580, y: 180 },
  { x: 740, y: 160 },
];

function getConeFill(mode) {
  if (mode === "thermal") return "url(#thermalCone)";
  if (mode === "mesh") return "url(#meshCone)";
  return "url(#lidarCone)";
}

function getConeOpacity(mode) {
  return mode === "mesh" ? 0.2 : 1;
}

export default function DigitalTwin() {
  const [mode, setMode] = useState("lidar");
  const [robotPos, setRobotPos] = useState({ x: 460, y: 310 });

  const randomizePosition = useCallback(() => {
    const wp = waypoints[Math.floor(Math.random() * waypoints.length)];
    setRobotPos(wp);
  }, []);

  return (
    <section id="digital-twin" className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Header + Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-label-sm text-primary uppercase tracking-widest block mb-space-xs">
              VIRTUAL OPERATING THEATER
            </span>
            <h2 className="text-headline-lg text-on-surface font-semibold">
              Simulate. Analyze. Prepare.
            </h2>
            <p className="text-body-md text-on-surface-variant mt-space-xs">
              Real-time telemetry and virtual mission environment preview with synthetic rendering.
            </p>
          </motion.div>

          <div className="flex items-center gap-space-xs bg-surface-container-high p-1 rounded-lg">
            {modes.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`px-space-md py-space-xs rounded text-label-sm uppercase transition-all ${
                  mode === m.id
                    ? "bg-primary text-on-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Simulation Canvas */}
        <div className="relative w-full h-[450px] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 450"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="lidarCone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="thermalCone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb95f" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffb4ab" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="meshCone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6ffbbe" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#6ffbbe" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <g className="opacity-20" stroke="#3d494c" strokeWidth="0.5">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
                <line key={`vl-${x}`} x1={x} x2={x} y1="0" y2="450" />
              ))}
              {[90, 180, 270, 360].map((y) => (
                <line key={`hl-${y}`} x1="0" x2="1000" y1={y} y2={y} />
              ))}
            </g>

            {/* Obstacles */}
            <g className="opacity-60">
              <polygon
                points="260,140 320,110 390,160 340,210"
                fill="#31353d"
                stroke="#869397"
                strokeWidth="1"
              />
              <text x="290" y="170" className="fill-outline text-[10px] font-mono">
                SECTOR_ALPHA
              </text>

              <polygon
                points="620,240 700,200 780,260 710,310"
                fill="#31353d"
                stroke="#ffb95f"
                strokeWidth="1"
              />
              <text x="650" y="270" className="fill-tertiary text-[10px] font-mono">
                HAZARD_ZONE
              </text>

              <circle cx="850" cy="140" r="28" fill="#93000a" opacity="0.3" />
              <circle cx="850" cy="140" r="12" fill="#ffb4ab" className="animate-ping" />
              <text x="815" y="185" className="fill-error text-[10px] font-mono font-bold">
                ALERT_CLUSTER
              </text>
            </g>

            {/* Waypoint Path */}
            <path
              d="M 120,380 L 280,280 L 460,310 L 580,180 L 740,160 L 890,240"
              fill="none"
              stroke="#4cd7f6"
              strokeWidth="2"
              strokeDasharray="6 4"
              className="opacity-70"
            />

            {/* Robot Unit */}
            <g
              style={{
                transform: `translate(${robotPos.x}px, ${robotPos.y}px)`,
                transition: "transform 0.8s ease-in-out",
              }}
            >
              {/* Perception cone */}
              <path
                d="M 0 0 L 140 -80 A 160 160 0 0 1 140 80 Z"
                fill={getConeFill(mode)}
                opacity={getConeOpacity(mode)}
              />
              {/* Chassis */}
              <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#1c2027" stroke="#4cd7f6" strokeWidth="2" />
              <circle cx="0" cy="0" r="4" fill="#4edea3" />
              {/* Label */}
              <text x="-25" y="-22" className="fill-on-surface text-[10px] font-mono font-bold">
                HARSS-01 [ACTIVE]
              </text>
              <line x1="0" y1="0" x2="30" y2="0" stroke="#4cd7f6" strokeWidth="2" />
            </g>
          </svg>

          {/* HUD Overlays */}
          <div className="absolute top-4 left-4 bg-surface-container-high/90 backdrop-blur-md px-space-md py-space-sm rounded-lg shadow">
            <div className="flex items-center gap-space-xs mb-1">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span className="text-label-sm text-secondary font-mono font-bold">
                STATUS: ANALYZING SECTOR
              </span>
            </div>
            <div className="text-label-sm text-on-surface-variant font-mono space-y-0.5">
              <div>COORDINATES: <span className="text-on-surface font-semibold">X: {robotPos.x / 20}m | Y: {robotPos.y / 20}m</span></div>
              <div>HEADING: <span className="text-primary font-semibold">042° NE | VELOCITY: 1.8 m/s</span></div>
              <div>MESH INTEGRITY: <span className="text-secondary font-semibold">HIGH RES</span></div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 bg-surface-container-high/90 backdrop-blur-md px-space-md py-space-sm rounded-lg shadow flex items-center gap-space-md">
            <div className="flex flex-col text-right">
              <span className="text-label-sm text-outline">ESTIMATED CLEARANCE</span>
              <span className="text-label-md text-secondary font-mono font-bold">ROUTE READY</span>
            </div>
            <button
              onClick={randomizePosition}
              className="px-space-sm py-1 bg-primary/20 hover:bg-primary/30 text-primary text-label-sm rounded uppercase font-semibold transition-colors flex items-center gap-1"
            >
              <RefreshCw size={14} />
              <span>Next Waypoint</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader } from 'lucide-react';

export default function CockpitModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-surface/95 backdrop-blur-2xl p-space-md md:p-space-xl flex flex-col justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-space-md bg-surface-container-lowest px-space-md py-space-sm rounded-lg">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-headline-md text-on-surface font-mono uppercase">
                HARSS TACTICAL COCKPIT // SIMULATION SUITE
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-space-xs hover:bg-surface-container-high rounded text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Content */}
          <div className="my-space-md flex-1 bg-surface-container-low rounded-xl p-space-lg flex flex-col lg:flex-row gap-space-lg items-center justify-around">
            <div className="flex flex-col gap-space-md max-w-md">
              <span className="text-label-sm text-primary uppercase tracking-widest font-mono">
                COMMAND TELEMETRY FEED
              </span>
              <h3 className="text-headline-lg text-on-surface font-bold">
                Fleet Teleoperation Alpha
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Complete remote sovereignty mode. High-framerate encrypted video pipeline active with bi-directional low-latency controls.
              </p>
              <div className="grid grid-cols-2 gap-space-sm font-mono text-body-sm bg-surface-container-lowest p-space-md rounded">
                {[
                  { label: "UPLINK SPEED:", value: "HIGH BANDWIDTH", color: "secondary" },
                  { label: "PACKET LOSS:", value: "MINIMAL", color: "secondary" },
                  { label: "ENCRYPTION:", value: "END-TO-END", color: "primary" },
                  { label: "OPERATOR ID:", value: "SIM-USER-01", color: "on-surface" },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="text-outline text-label-sm block">{s.label}</span>
                    <span className={`text-${s.color} font-bold`}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Synthetic Feed Preview */}
            <div className="w-full max-w-lg aspect-video bg-surface-container-lowest rounded-lg p-space-md flex flex-col justify-between relative shadow-inner">
              <div className="flex justify-between text-label-sm text-outline">
                <span>FEED: SENSOR_POD_01</span>
                <span className="text-secondary font-mono">FPS: 60</span>
              </div>
              <div className="text-center">
                <Loader size={48} className="text-primary animate-spin mx-auto" />
                <p className="text-headline-md text-on-surface font-semibold mt-2">
                  LIVE SYNTHETIC MESH ACTIVE
                </p>
                <p className="text-body-sm text-on-surface-variant">
                  Simulation bridge synchronized
                </p>
              </div>
              <div className="flex justify-between text-label-sm text-outline">
                <span>BATTERY: 87%</span>
                <span>MISSION ELAPSED: 01:24:19</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-space-sm">
            <button
              onClick={onClose}
              className="px-space-xl py-space-sm bg-primary text-on-primary text-label-md uppercase font-semibold rounded hover:bg-primary-container hover:text-on-primary-container transition-all"
            >
              Exit Cockpit Simulation
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';
import { Zap, FileText } from 'lucide-react';

export default function CTA({ onLaunchCockpit }) {
  return (
    <section className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface">
      <motion.div
        className="max-w-7xl mx-auto relative bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high rounded-2xl p-space-xl md:p-16 overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Background glow */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs text-label-sm text-secondary uppercase tracking-widest font-mono">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>MISSION DEPLOYMENT READINESS</span>
          </div>

          <h2 className="text-headline-xl text-on-surface font-bold tracking-tight">
            Deploy Autonomous Intelligence in High-Risk Arenas.
          </h2>

          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Upgrade your hazard reconnaissance and mitigation capabilities. Transition from exposed personnel 
            to safety-oriented autonomous operation with human supervision.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <button
              onClick={onLaunchCockpit}
              className="px-space-xl py-space-md bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container text-label-md uppercase tracking-wider font-semibold rounded glow-primary-lg transition-all flex items-center gap-space-xs"
            >
              <span>Initiate Tactical Evaluation</span>
              <Zap size={16} />
            </button>
            <a
              href="#digital-twin"
              className="px-space-lg py-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-variant text-label-md uppercase tracking-wider font-medium rounded transition-colors flex items-center gap-space-xs"
            >
              <FileText size={16} />
              <span>Technical Overview</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

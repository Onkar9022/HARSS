import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { roadmapData } from '../data/roadmap';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Roadmap() {
  return (
    <section className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-sm text-secondary uppercase tracking-widest mb-space-xs">
            DEPLOYMENT MILESTONES
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Platform Development Roadmap
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Transparent multi-phase trajectory from simulation to real-world environment deployment.
          </p>
        </motion.div>

        {/* Roadmap Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {roadmapData.map((phase) => (
            <motion.div
              key={phase.id}
              variants={cardVariants}
              className={`p-space-lg rounded-lg flex flex-col justify-between ${
                phase.active
                  ? "bg-surface-container-high shadow-md"
                  : "bg-surface-container-low"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <span className={`text-label-sm font-mono ${phase.active ? "text-secondary font-bold" : "text-outline"}`}>
                    {phase.code}
                  </span>
                  {phase.active ? (
                    <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  ) : (
                    <Clock size={16} className="text-outline" />
                  )}
                </div>
                <h3 className="text-headline-md text-on-surface font-semibold mb-space-xs">
                  {phase.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {phase.desc}
                </p>
              </div>
              <div className={`mt-space-md pt-space-xs bg-surface-container-lowest p-space-xs rounded text-label-sm font-mono flex items-center justify-between ${
                phase.active ? "text-secondary" : "text-outline"
              }`}>
                <span>STATUS:</span>
                <span className={phase.active ? "font-bold" : ""}>{phase.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

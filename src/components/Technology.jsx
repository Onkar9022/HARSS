import { motion } from 'framer-motion';
import { Cpu, Eye, Network, Navigation, Box, ShieldCheck } from 'lucide-react';
import { technologiesData } from '../data/technologies';

const iconMap = { Cpu, Eye, Network, Navigation, Box, ShieldCheck };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Technology() {
  return (
    <section id="technology" className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-sm text-tertiary uppercase tracking-widest mb-space-xs">
            SYSTEM SPECIFICATIONS
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Edge Hardware &amp; Algorithmic Capabilities
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Built for challenging environments where connectivity is intermittent and low-latency processing is essential.
          </p>
        </motion.div>

        {/* 6 Tech Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologiesData.map((tech) => {
            const Icon = iconMap[tech.icon];
            return (
              <motion.div
                key={tech.id}
                variants={cardVariants}
                className="bg-surface-container-low p-space-lg rounded-lg shadow-sm hover:bg-surface-container transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className={`text-label-sm font-mono text-${tech.accent}`}>{tech.code}</span>
                    <Icon size={22} className={`text-${tech.accent}`} />
                  </div>
                  <h3 className="text-headline-md text-on-surface mb-space-xs font-semibold">
                    {tech.title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    {tech.desc}
                  </p>
                </div>
                <div className="space-y-1 text-label-sm bg-surface-container-lowest p-space-sm rounded">
                  {tech.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between text-outline">
                      <span>{spec.label}:</span>
                      <span className="text-on-surface font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

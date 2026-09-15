import { motion } from 'framer-motion';

const metrics = [
  {
    code: "METRIC // 01",
    value: "0",
    color: "primary",
    title: "Human Casualties in Uncleared Zones",
    desc: "Zero personnel deployed into contaminated or unmapped reconnaissance corridors before robot verification.",
    benchmark: "BENCHMARK: 100% ISOLATION",
    benchColor: "text-secondary",
  },
  {
    code: "METRIC // 02",
    value: "<30ms",
    color: "secondary",
    title: "Sensory Perception Latency",
    desc: "360-degree synthesized sensor fusion delivered to operators in real-time.",
    benchmark: "BENCHMARK: SIMULATED TARGET",
    benchColor: "text-secondary",
  },
  {
    code: "METRIC // 03",
    value: "4.2x",
    color: "tertiary",
    title: "Faster Route Verification",
    desc: "Expedited hazardous terrain validation compared to conventional human-led manual reconnaissance.",
    benchmark: "BENCHMARK: SIMULATED COMPARISON",
    benchColor: "text-tertiary",
  },
  {
    code: "METRIC // 04",
    value: "High",
    color: "primary",
    title: "Hazard Detection Accuracy",
    desc: "Predictive edge telemetry flags hidden structural flaws, toxic compounds, and dynamic obstacles.",
    benchmark: "BENCHMARK: SIMULATION GRADE",
    benchColor: "text-primary",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Impact() {
  return (
    <section className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-sm text-primary uppercase tracking-widest mb-space-xs">
            SIMULATED FIELD METRICS
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Operational Impact &amp; Advantage
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Projected readiness and safety improvement metrics from simulation-based evaluation.
          </p>
        </motion.div>

        {/* 4 Metric Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.code}
              variants={cardVariants}
              className="bg-surface-container-low p-space-lg rounded-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-sm"
            >
              <div>
                <span className="text-label-sm text-outline uppercase font-mono">{m.code}</span>
                <div className={`text-[44px] leading-tight text-${m.color} font-bold my-space-xs font-display`}>
                  {m.value}
                </div>
                <h3 className="text-[18px] font-display text-on-surface font-semibold mb-space-xs">
                  {m.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {m.desc}
                </p>
              </div>
              <div className={`mt-space-md pt-space-xs bg-surface-container-lowest p-space-xs rounded text-label-sm ${m.benchColor} font-mono`}>
                {m.benchmark}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

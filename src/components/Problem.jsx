import { motion } from 'framer-motion';
import { AlertTriangle, WifiOff, BrainCircuit, HeartCrack } from 'lucide-react';

const problems = [
  {
    code: "VULNERABILITY // 01",
    codeColor: "text-error",
    icon: AlertTriangle,
    iconColor: "text-error",
    title: "High-Risk Environments",
    desc: "Personnel remain physically exposed to hazardous industrial compounds, unmapped rubble, and dangerous zones during frontline manual ground-scouting maneuvers.",
    statusLabel: "HUMAN EXPOSURE RISK:",
    statusValue: "EXTREME",
    statusColor: "text-error",
  },
  {
    code: "VULNERABILITY // 02",
    codeColor: "text-tertiary",
    icon: WifiOff,
    iconColor: "text-tertiary",
    title: "Limited Autonomy",
    desc: "Conventional tele-operated UGVs become stranded immediately upon RF signal loss, lacking sovereign edge decision-making and real-time obstacle evasion.",
    statusLabel: "RF SIGNAL RELIANCE:",
    statusValue: "BRITTLE",
    statusColor: "text-tertiary",
  },
  {
    code: "VULNERABILITY // 03",
    codeColor: "text-primary",
    icon: BrainCircuit,
    iconColor: "text-primary",
    title: "Intelligence Gap",
    desc: "Raw, unprocessed video feeds flood command staff with optical noise. Operators lack synthesized edge perception that prioritizes dynamic threat severity.",
    statusLabel: "OPERATOR COGNITIVE LOAD:",
    statusValue: "OVERSATURATED",
    statusColor: "text-primary",
  },
  {
    code: "VULNERABILITY // 04",
    codeColor: "text-error",
    icon: HeartCrack,
    iconColor: "text-error",
    title: "Human Casualty Risk",
    desc: "Delayed hazard identification turns routine perimeter surveys into catastrophic casualty events before containment teams can react.",
    statusLabel: "PERIMETER CLEARANCE:",
    statusValue: "HIGH-LOSS",
    statusColor: "text-error",
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

export default function Problem() {
  return (
    <section id="problem" className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-space-xs text-error text-label-sm uppercase tracking-widest mb-space-xs">
            <AlertTriangle size={14} />
            <span>CRITICAL SYSTEM BOTTLENECKS</span>
          </div>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            High-Risk Operations Demand Better Solutions.
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Critical operational vulnerabilities plague conventional remote reconnaissance platforms and manual hazardous environment inspections.
          </p>
        </motion.div>

        {/* 4 Problem Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.code}
                variants={cardVariants}
                className="bg-surface-container-low p-space-lg rounded-lg flex flex-col justify-between hover:bg-surface-container transition-all group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-outline mb-space-md text-label-sm">
                    <span className={`font-mono ${p.codeColor} font-semibold`}>{p.code}</span>
                    <Icon size={20} className={`${p.iconColor} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-headline-md text-on-surface mb-space-sm font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm bg-surface-container-lowest/60 p-space-xs rounded text-label-sm text-outline flex items-center justify-between">
                  <span>{p.statusLabel}</span>
                  <span className={`${p.statusColor} font-bold`}>{p.statusValue}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

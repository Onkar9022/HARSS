import { motion } from 'framer-motion';
import { Globe, Brain, BarChart3, ShieldCheck, ArrowRight, Key, FileText } from 'lucide-react';

const pipelineSteps = [
  { stage: "STAGE 01", label: "Environment", icon: Globe, color: "primary" },
  { stage: "STAGE 02", label: "AI Perception", icon: Brain, color: "secondary" },
  { stage: "STAGE 03", label: "Risk Scoring", icon: BarChart3, color: "tertiary" },
];

const gate = { stage: "MANDATORY GATE", label: "OPERATOR CONFIRM", icon: ShieldCheck };

const pillars = [
  {
    icon: ShieldCheck,
    color: "primary",
    title: "Strict Boundaries",
    desc: "Geofencing algorithms enforce hardware-locked operational zones. Robot controllers automatically cease locomotion if perimeter tolerances are exceeded.",
  },
  {
    icon: Key,
    color: "secondary",
    title: "Dual-Key Verification",
    desc: "Critical path alterations require cryptographic approval from authorized mission planners before execution sequences unlock.",
  },
  {
    icon: FileText,
    color: "tertiary",
    title: "Tamper-Proof Audit",
    desc: "Every neural decision, sensor input, and human override logs to an immutable append-only flight recorder for full post-mission compliance.",
  },
];

export default function HumanInLoop() {
  return (
    <section className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-sm text-secondary uppercase tracking-widest mb-space-xs">
            GOVERNANCE &amp; SAFETY ETHICS
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Autonomous Intelligence. Human Oversight.
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Dual-custody verification architecture guarantees that no mission-critical action executes without explicit human verification.
          </p>
        </motion.div>

        {/* Linear Pipeline */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-7 gap-space-xs items-center bg-surface-container-low p-space-md rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {pipelineSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.stage} className="contents">
                <div className="bg-surface-container-high p-space-sm rounded text-center flex flex-col items-center">
                  <span className="text-label-sm font-mono text-outline">{step.stage}</span>
                  <span className="text-[14px] font-display text-on-surface font-semibold mt-1">{step.label}</span>
                  <Icon size={18} className={`text-${step.color} mt-1`} />
                </div>
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden md:flex justify-center text-outline">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Arrow before gate */}
          <div className="hidden md:flex justify-center text-outline">
            <ArrowRight size={18} />
          </div>
          
          {/* The Human Gate */}
          <div className="bg-secondary/20 p-space-sm rounded text-center flex flex-col items-center shadow-lg">
            <span className="text-label-sm font-mono text-secondary font-bold">{gate.stage}</span>
            <span className="text-[14px] font-display text-secondary font-bold mt-1">{gate.label}</span>
            <gate.icon size={18} className="text-secondary mt-1 animate-bounce" />
          </div>
        </motion.div>

        {/* Governance Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-space-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="bg-surface-container-low p-space-lg rounded-lg">
                <div className={`flex items-center gap-space-sm mb-space-xs text-${pillar.color}`}>
                  <Icon size={24} />
                  <h4 className="text-headline-md text-on-surface font-semibold">{pillar.title}</h4>
                </div>
                <p className="text-body-sm text-on-surface-variant">{pillar.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

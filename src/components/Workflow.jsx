import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workflowData } from '../data/workflow';

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const data = workflowData[activeStep];

  return (
    <section id="workflow" className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-sm text-primary uppercase tracking-widest mb-space-xs">
            EXECUTION LIFECYCLE
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Six-Stage Tactical Workflow
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            From environmental ingestion to supervised execution: the deterministic loop driving HARSS autonomous units.
          </p>
        </motion.div>

        {/* Step Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-xs bg-surface-container-low p-space-xs rounded-lg">
          {workflowData.map((step, i) => (
            <button
              key={step.code}
              onClick={() => setActiveStep(i)}
              className={`p-space-sm text-left rounded transition-all ${
                activeStep === i
                  ? "bg-primary text-on-primary"
                  : "bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              }`}
            >
              <span className="text-label-sm uppercase font-mono block opacity-80">{step.phase}</span>
              <span className="text-[14px] font-display font-semibold">{step.label}</span>
            </button>
          ))}
        </div>

        {/* Step Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-surface-container-high rounded-xl p-6 lg:p-space-xl shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
          >
            {/* Left: Info */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs text-label-sm text-primary uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{data.code}</span>
              </div>

              <h3 className="text-headline-lg text-on-surface font-bold">
                {data.title}
              </h3>

              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {data.desc}
              </p>

              <div className="grid grid-cols-2 gap-space-md mt-space-sm">
                <div className="bg-surface-container-lowest p-space-sm rounded">
                  <span className="text-label-sm text-outline block">{data.metric1Label}</span>
                  <span className="text-label-md text-secondary font-mono font-bold">{data.metric1Value}</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded">
                  <span className="text-label-sm text-outline block">{data.metric2Label}</span>
                  <span className="text-label-md text-primary font-mono font-bold">{data.metric2Value}</span>
                </div>
              </div>
            </div>

            {/* Right: Verification Panel */}
            <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-lg flex flex-col justify-center">
              <div className="flex items-center justify-between pb-space-sm text-label-sm text-outline">
                <span>TACTICAL VERIFICATION</span>
                <span className="text-secondary font-mono">STATUS: VALIDATED</span>
              </div>
              <div className="flex flex-col gap-2 font-mono text-body-sm text-on-surface-variant bg-surface-container-low p-space-md rounded">
                {Object.entries(data.verification).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-outline">{key}:</span>
                    <span className="text-on-surface">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

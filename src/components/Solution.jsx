import { motion } from 'framer-motion';
import { Cpu, Camera, Radio, Navigation, Box, ShieldCheck } from 'lucide-react';

const iconMap = {
  Cpu, Camera, Radio, Navigation, Box, ShieldCheck,
};

const nodes = [
  { sub: "SUBSYSTEM 01", title: "AI / ML Edge Inference", icon: "Cpu", color: "primary",
    desc: "TensorRT-compiled models performing neural spatial classification, human detection, and thermal anomaly clustering on edge hardware." },
  { sub: "SUBSYSTEM 02", title: "Computer Vision & SLAM", icon: "Camera", color: "secondary",
    desc: "Quad-stereo visual odometry fused with active solid-state LiDAR for continuous GPS-denied point cloud registration." },
  { sub: "SUBSYSTEM 03", title: "Multi-Sensor Fusion", icon: "Radio", color: "tertiary",
    desc: "Unscented Kalman Filter ingesting VOC gas sniffers, radiometric FLIR, Doppler radar, and tactical grade IMU data." },
  { sub: "SUBSYSTEM 04", title: "Autonomous Navigation", icon: "Navigation", color: "primary",
    desc: "3D Dynamic Voxel Costmaps with real-time trajectory optimization and reflexive evasive maneuvering." },
  { sub: "SUBSYSTEM 05", title: "Digital Twin Sync", icon: "Box", color: "secondary",
    desc: "High-accuracy isometric 3D reconstruction mirrored to base stations via encrypted tactical peer mesh." },
  { sub: "SUBSYSTEM 06", title: "Human Supervision Gate", icon: "ShieldCheck", color: "tertiary",
    desc: "Supervised Autonomy protocol guaranteeing human mission authority for irreversible field transitions." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const nodeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Solution() {
  return (
    <section id="solution" className="w-full px-4 md:px-margin py-16 lg:py-24 bg-surface">
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
            HYBRID AUTONOMOUS ROBOTIC SYSTEM
          </span>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Meet HARSS Core Architecture
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            One unified autonomous stack orchestrating six synchronized layers of perception, edge inference, and calibrated human oversight.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-xl flex flex-col items-center relative overflow-hidden">
          {/* Dot grid background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#4cd7f6_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Central Core */}
          <motion.div
            className="relative z-10 flex flex-col items-center max-w-lg text-center mb-space-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary glow-primary mb-space-sm">
              <Cpu size={36} className="animate-pulse" />
            </div>
            <span className="text-label-sm text-primary tracking-widest uppercase">
              CENTRAL ARBITRATION BUS
            </span>
            <h3 className="text-headline-md text-on-surface font-bold">
              HARSS Core Reasoning Engine
            </h3>
            <p className="text-body-sm text-on-surface-variant mt-1">
              Spatial transformer coordinating local perception tensors, vehicle kinematic constraints, and safety boundary rules.
            </p>
          </motion.div>

          {/* Subsystem Nodes */}
          <motion.div
            className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {nodes.map((node) => {
              const Icon = iconMap[node.icon];
              return (
                <motion.div
                  key={node.sub}
                  variants={nodeVariants}
                  className="bg-surface-container-high/60 backdrop-blur-md p-space-md rounded-lg hover:bg-surface-container-high transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-space-sm mb-space-xs">
                    <span className={`w-8 h-8 rounded bg-${node.color}/20 text-${node.color} flex items-center justify-center`}>
                      <Icon size={18} />
                    </span>
                    <div>
                      <span className="text-label-sm text-outline uppercase font-mono">{node.sub}</span>
                      <h4 className={`text-[16px] font-display text-on-surface font-semibold group-hover:text-${node.color} transition-colors`}>
                        {node.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">{node.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

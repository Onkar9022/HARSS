export const technologiesData = [
  {
    id: "tech-01",
    code: "TECH_SPEC // 01",
    accent: "primary",
    icon: "Cpu",
    title: "Edge Neuromorphic AI",
    desc: "Custom edge tensor pipelines running quantized YOLOv10 and custom transformer architectures. Delivers high-FPS object classification without off-platform communication.",
    specs: [
      { label: "ACCELERATOR", value: "EDGE-TPU ACCELERATED" },
      { label: "INFERENCE", value: "REALTIME PER FRAME" },
    ],
  },
  {
    id: "tech-02",
    code: "TECH_SPEC // 02",
    accent: "secondary",
    icon: "Eye",
    title: "Computer Vision",
    desc: "Stereoscopic RGB-D cameras fused with zero-lux thermal imagers for continuous spatial tracking in smoke-filled, pitch-black, or subterranean operating environments.",
    specs: [
      { label: "OPTICAL RESOLUTION", value: "4K UHD HDR" },
      { label: "NIGHT SENSITIVITY", value: "ULTRA-LOW LUX" },
    ],
  },
  {
    id: "tech-03",
    code: "TECH_SPEC // 03",
    accent: "tertiary",
    icon: "Network",
    title: "Multi-Sensor Fusion",
    desc: "Microsecond-synchronized temporal fusion aligning optical point clouds with IMU gyro data, ultrasonic proximity sweeps, and digital atmospheric sniffers.",
    specs: [
      { label: "TIMESTAMP PRECISION", value: "MICROSECOND-LEVEL" },
      { label: "CORRELATION", value: "PROBABILISTIC FUSION" },
    ],
  },
  {
    id: "tech-04",
    code: "TECH_SPEC // 04",
    accent: "primary",
    icon: "Navigation",
    title: "Autonomous Navigation",
    desc: "Real-time 3D voxel costmaps recalculate traversability over rubble and variable terrain, triggering agile evasion vectors without human input.",
    specs: [
      { label: "LOCAL PLANNER", value: "DWA + E-BAND HYBRID" },
      { label: "OBSTACLE RECOVERY", value: "AUTONOMOUS ESCAPE" },
    ],
  },
  {
    id: "tech-05",
    code: "TECH_SPEC // 05",
    accent: "secondary",
    icon: "Box",
    title: "Digital Twin Realtime",
    desc: "Streamed mesh voxelization constructs a virtual duplicate of explored zones, enabling remote commanders to walk through scanned sites in VR/AR.",
    specs: [
      { label: "VOXEL RESOLUTION", value: "CENTIMETER-SCALE" },
      { label: "MESH COMPRESSION", value: "DRACO STREAMING" },
    ],
  },
  {
    id: "tech-06",
    code: "TECH_SPEC // 06",
    accent: "tertiary",
    icon: "ShieldCheck",
    title: "Human-in-the-Loop",
    desc: "Dual-confirmation threshold matrix ensures autonomous decision boundaries never supersede operator command authority in high-stakes actions.",
    specs: [
      { label: "FAILSAFE OVERRIDE", value: "ZERO DELAY PUSH" },
      { label: "COMPLIANCE", value: "SAFETY-RATED" },
    ],
  },
];

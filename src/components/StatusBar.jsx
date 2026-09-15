import { Radio } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="w-full bg-surface-container-lowest px-4 md:px-margin py-space-xs flex items-center justify-between overflow-x-auto">
      <div className="flex items-center gap-space-md whitespace-nowrap">
        <span className="flex items-center gap-space-xs text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
          <span className="text-label-sm">NODE_MESH: ONLINE</span>
        </span>
        <span className="text-outline-variant">|</span>
        <span className="text-label-sm text-on-surface-variant">LAT: 34.0522° N, LON: -118.2437° W</span>
        <span className="text-outline-variant">|</span>
        <span className="text-label-sm text-on-surface-variant">SATCOM: SYNCHRONIZED</span>
        <span className="text-outline-variant">|</span>
        <span className="text-label-sm text-primary font-semibold">SIM_MODE: ACTIVE</span>
      </div>
      <div className="hidden lg:flex items-center gap-space-md whitespace-nowrap">
        <span className="text-label-sm text-on-surface-variant">TELEMETRY_INTERVAL: 10ms</span>
        <span className="text-label-sm text-secondary font-mono">LATENCY: LOW</span>
        <span className="bg-primary/10 text-primary px-space-xs py-0.5 rounded text-label-sm uppercase">
          ENCRYPTED
        </span>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl">
      <div className="w-full px-4 md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <span className="text-label-md text-on-surface-variant tracking-wider uppercase">
            © 2026 HARSS — HYBRID AUTONOMOUS ROBOTIC SURGICAL STRIKE SYSTEM.
          </span>
        </div>
        <div className="flex items-center gap-space-lg">
          <span className="text-label-sm text-outline uppercase">
            ENCRYPTION: SECURED
          </span>
          <span className="text-label-sm text-secondary uppercase">
            ALL SYSTEMS FUNCTIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}

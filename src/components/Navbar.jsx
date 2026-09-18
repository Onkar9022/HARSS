import { useState, useEffect } from 'react';
import { Menu, X, Radio } from 'lucide-react';

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "HARSS Model", href: "#proposed-model" },
  { label: "Workflow", href: "#workflow" },
  { label: "Technology", href: "#technology" },
  { label: "Digital Twin", href: "#digital-twin" },
  { label: "Team", href: "#team" },
];

export default function Navbar({ onLaunchCockpit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
          : "bg-surface/70 backdrop-blur-md"
      }`}
    >
      <div className="h-16 w-full px-4 md:px-margin flex items-center justify-between gap-gutter">
        {/* Logo */}
        <div className="flex items-center gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-label-sm text-secondary uppercase tracking-widest">
                HYBRID AUTONOMOUS ROBOTIC SURGICAL STRIKE
              </span>
            </div>
            <span className="text-headline-md uppercase tracking-wider text-on-surface leading-none">
              HARSS//SYSTEM
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-space-xs transition-colors rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest rounded">
            <span className="text-label-sm text-on-surface-variant uppercase">SYS:</span>
            <span className="text-label-sm text-primary uppercase">ONLINE</span>
            <Radio className="w-2.5 h-2.5 text-primary animate-pulse" />
          </div>

          <button
            onClick={onLaunchCockpit}
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container transition-all glow-primary rounded text-label-md uppercase tracking-wider font-semibold"
          >
            Launch Mission Control
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-1 text-on-surface-variant hover:text-on-surface"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-t border-outline-variant/30 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface px-space-sm py-space-sm transition-colors rounded hover:bg-surface-container-high"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              onLaunchCockpit();
              setMobileOpen(false);
            }}
            className="mt-2 w-full py-space-sm bg-primary text-on-primary text-label-md uppercase tracking-wider font-semibold rounded glow-primary"
          >
            Launch Mission Control
          </button>
        </div>
      )}
    </header>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { springHover } from "../lib/motion";

const links = [
  { href: "#care", label: "Care" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Specialists" },
  { href: "#platform", label: "Care OS" },
  { href: "#visit", label: "Patient Journey" },
  { href: "#tour", label: "Clinic Tour" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Location" },
];

type Props = { onBook: () => void };

export default function Navbar({ onBook }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-navy/10 bg-white/85 shadow-[0_8px_30px_rgba(9,9,11,0.05)] backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5 touch-manipulation">
            <span className="relative grid h-9 w-9 place-items-center">
              <span className="pulse-ring absolute inset-0 rounded-full bg-teal/30" />
              <svg viewBox="0 0 32 32" className="relative h-9 w-9" aria-hidden>
                <circle cx="16" cy="16" r="10" fill="#09090B" />
                <circle cx="16" cy="16" r="5" fill="#06B6D4" />
                <circle cx="16" cy="16" r="2.4" fill="#6366F1" />
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight text-navy">
              Aura<span className="text-teal">Health</span>
            </span>
          </a>

          <ul
            className="relative hidden items-center gap-1 rounded-full bg-slate-100 p-1 lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((link) => (
              <li key={link.href} className="relative">
                {hovered === link.href ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <a
                  href={link.href}
                  className="relative z-10 block px-3.5 py-1.5 text-xs font-semibold text-navy/80 hover:text-navy transition-colors"
                  onMouseEnter={() => setHovered(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+14155550148"
              className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy md:inline-flex hover:border-teal transition-colors"
            >
              <span className="chroma-dot h-1.5 w-1.5 rounded-full" />
              Emergency · 24/7
            </a>
            <motion.button
              type="button"
              onClick={onBook}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={springHover}
              className="btn-primary rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md touch-manipulation"
            >
              Book Visit
            </motion.button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/80 bg-slate-50 text-navy lg:hidden active:scale-95 transition-transform touch-manipulation"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <>
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-[61px] z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
                onClick={() => setOpen(false)}
              />
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="relative z-50 overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-2xl lg:hidden shadow-xl"
              >
                <div className="px-4 py-5 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                  <div className="grid grid-cols-2 gap-2">
                    {links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2.5 rounded-2xl bg-slate-50 border border-slate-100 px-3.5 py-3 text-xs font-semibold text-navy active:bg-teal/10 active:border-teal/30 transition-colors touch-manipulation"
                        onClick={() => setOpen(false)}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 grid gap-2">
                    <a
                      href="tel:+14155550148"
                      className="flex items-center justify-between rounded-2xl bg-navy px-4 py-3 text-xs font-medium text-white shadow-sm"
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <span className="chroma-dot h-2 w-2 rounded-full" />
                        24/7 Emergency Hotline
                      </span>
                      <span className="font-mono text-gold">+1 (415) 555-0148</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        onBook();
                      }}
                      className="btn-primary w-full rounded-2xl py-3 text-xs font-semibold text-white shadow-md text-center"
                    >
                      Schedule Online Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}


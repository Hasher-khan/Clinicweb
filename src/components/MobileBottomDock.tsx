import { motion } from "framer-motion";

type Props = {
  onBook: () => void;
};

export default function MobileBottomDock({ onBook }: Props) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 lg:hidden pointer-events-none pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
        className="pointer-events-auto mx-auto max-w-md rounded-2xl border border-navy/10 bg-white/90 p-2 shadow-[0_12px_40px_rgba(9,9,11,0.18)] backdrop-blur-xl flex items-center justify-between gap-2"
      >
        <a
          href="tel:+14155550148"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/80 py-2.5 px-3 text-xs font-semibold text-navy active:scale-95 transition-transform"
        >
          <span className="chroma-dot h-2 w-2 rounded-full bg-teal" />
          <span>Call 24/7</span>
        </a>

        <a
          href="#location"
          className="flex items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/80 p-2.5 text-navy active:scale-95 transition-transform"
          aria-label="Clinic Directions"
          title="Directions"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>

        <button
          type="button"
          onClick={onBook}
          className="flex-[1.5] btn-primary rounded-xl py-2.5 px-4 text-xs sm:text-sm font-semibold text-white shadow-md active:scale-95 transition-transform flex items-center justify-center gap-1.5"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Visit</span>
        </button>
      </motion.div>
    </div>
  );
}

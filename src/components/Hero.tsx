import { motion } from "framer-motion";
import { fadeUp, springHover, stagger, viewport } from "../lib/motion";

type Props = { onBook: () => void };

export default function Hero({ onBook }: Props) {
  return (
    <section id="top" className="px-4 pt-6 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8">
      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="eyebrow mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600"
          >
            ✦ Premium Medical Practice
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl leading-[1.12] font-extrabold tracking-tight text-navy sm:text-5xl xl:text-6xl"
          >
            Modern Care, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
              Human Touch.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-lg"
          >
            Same-day visits, in-house diagnostics, and a calm clinical environment
            designed around your time — not a crowded waiting room.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4">
            <span className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-teal/20 bg-white px-3 py-2 text-xs font-medium text-navy shadow-sm sm:rounded-full sm:px-3.5 sm:py-1.5 sm:text-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
                <span className="chroma-dot relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="truncate">Live: 4 Active General Practitioners</span>
            </span>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.button
              type="button"
              onClick={onBook}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={springHover}
              className="btn-primary w-full rounded-2xl sm:rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg text-center touch-manipulation sm:w-auto"
            >
              Schedule Online Now
            </motion.button>
            <a
              href="#tour"
              className="w-full rounded-2xl sm:rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy text-center active:bg-slate-50 transition-colors touch-manipulation sm:w-auto"
            >
              Watch Clinic Tour
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative mt-2 lg:mt-0">
          <div className="relative aspect-[4/4.5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-teal/15 shadow-[0_20px_60px_rgba(6,182,212,0.12)]">
            <ClinicInterior />
          </div>
          <motion.article
            className="absolute top-4 left-3 rounded-xl border border-white/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:top-6 sm:left-4 sm:rounded-2xl sm:px-4 sm:py-3"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] font-semibold tracking-wide text-slate-500 uppercase sm:text-[11px]">
              Average wait time
            </p>
            <p className="text-base font-bold text-navy sm:text-lg">4.2 mins</p>
          </motion.article>
          <motion.article
            className="absolute right-3 bottom-6 rounded-xl border border-white/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:right-6 sm:bottom-10 sm:rounded-2xl sm:px-4 sm:py-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] font-semibold tracking-wide text-slate-500 uppercase sm:text-[11px]">
              Patient satisfaction
            </p>
            <p className="text-base font-bold text-teal sm:text-lg">99.4%</p>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ClinicInterior() {
  return (
    <svg viewBox="0 0 480 600" className="h-full w-full" aria-hidden>
      <rect width="480" height="600" fill="#E4E4E7" />
      <rect x="0" y="420" width="480" height="180" fill="#D4D4D8" />
      <rect x="40" y="90" width="400" height="250" rx="8" fill="#FAFAFA" />
      <rect x="58" y="108" width="364" height="214" fill="#A1A1AA" opacity="0.45" />
      <rect x="80" y="150" width="140" height="90" rx="6" fill="#71717A" opacity="0.4" />
      <rect x="250" y="140" width="150" height="160" rx="10" fill="#09090B" opacity="0.08" />
      <rect x="270" y="210" width="110" height="12" rx="6" fill="#06B6D4" opacity="0.8" />
      <circle cx="120" cy="500" r="36" fill="#09090B" opacity="0.08" />
      <rect x="180" y="470" width="160" height="70" rx="16" fill="#FFFFFF" />
      <rect x="198" y="490" width="80" height="8" rx="4" fill="#6366F1" />
      <rect x="198" y="508" width="124" height="6" rx="3" fill="#D4D4D8" />
      <path d="M0 418h480" stroke="#A1A1AA" strokeOpacity="0.5" />
    </svg>
  );
}


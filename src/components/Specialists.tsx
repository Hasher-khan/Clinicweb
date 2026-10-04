import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, springHover, stagger } from "../lib/motion";
import Section from "./Section";

const doctors = [
  {
    name: "Dr. Amara Singh, MD",
    specialty: "Internal Medicine",
    credential: "Stanford University School of Medicine",
    license: "CA-A 148392",
    bio: "Board-certified internist focusing on metabolic health, executive physicals, and coordinated chronic care. Previously attending at UCSF Medical Center with published work on digital follow-up adherence.",
    slots: ["Today 10:40", "Today 15:10", "Thu 09:00"],
    tone: "#06B6D4",
    avatarBg: "from-cyan-500 to-teal-700",
  },
  {
    name: "Dr. Elias Ward, MD, FACC",
    specialty: "Cardiology",
    credential: "Johns Hopkins University",
    license: "CA-A 119204",
    bio: "Preventive cardiologist specializing in lipid optimization and imaging-guided risk reduction. Leads AuraHealth’s same-week ECG and stress pathway.",
    slots: ["Tomorrow 08:20", "Fri 13:30", "Mon 11:15"],
    tone: "#09090B",
    avatarBg: "from-slate-800 to-navy",
  },
  {
    name: "Dr. Noor Rahman, DO",
    specialty: "Pediatrics & Family",
    credential: "Columbia University Vagelos College",
    license: "CA-A 176551",
    bio: "Family physician with a pediatric emphasis, known for calm consults and vaccine-counseling literacy. Directs our after-school walk-in window.",
    slots: ["Today 16:45", "Sat 09:30", "Sat 11:00"],
    tone: "#6366F1",
    avatarBg: "from-indigo-500 to-purple-600",
  },
];

type Props = {
  onBookDoc?: (name: string) => void;
};

export default function Specialists({ onBookDoc }: Props) {
  const [active, setActive] = useState<(typeof doctors)[number] | null>(null);

  return (
    <Section
      id="team"
      eyebrow="Medical team"
      title="Our specialists"
      description="Licensed physicians with transparent credentials and live appointment inventory."
    >
      <motion.div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3" variants={stagger}>
        {doctors.map((doc) => (
          <motion.article
            key={doc.license}
            variants={fadeUp}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={springHover}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] flex flex-col justify-between"
          >
            <div>
              <div className={`h-40 bg-gradient-to-br ${doc.avatarBg} relative flex items-center justify-center`}>
                <svg viewBox="0 0 200 180" className="h-32 w-32 drop-shadow-md" aria-hidden>
                  <circle cx="100" cy="78" r="36" fill="#fff" opacity="0.9" />
                  <rect x="58" y="118" width="84" height="70" rx="42" fill="#fff" opacity="0.9" />
                </svg>
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-navy">
                  Available Today
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-navy">{doc.name}</h3>
                <p className="text-xs sm:text-sm font-semibold text-teal mt-0.5">{doc.specialty}</p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2">{doc.credential}</p>
                <p className="mt-1 font-mono text-[11px] text-slate-400">License: {doc.license}</p>
              </div>
            </div>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
              <button
                type="button"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-navy hover:bg-slate-100 hover:border-slate-300 transition-colors active:scale-95 touch-manipulation"
                onClick={() => setActive(doc)}
              >
                View Bio & Available Slots
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-navy/60 p-0 sm:p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-2xl pb-[max(1.5rem,env(safe-area-inset-bottom))]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile handle indicator */}
              <div className="mb-4 h-1.5 w-12 rounded-full bg-slate-300 mx-auto sm:hidden" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-xs tracking-[0.18em] uppercase text-indigo-600 font-semibold">{active.specialty}</p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-navy">{active.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-full bg-slate-100 p-2 text-slate-500 hover:text-navy"
                  aria-label="Close modal"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">{active.bio}</p>
              
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-100 text-xs sm:text-sm space-y-1.5">
                <p><span className="font-semibold text-navy">Credentials:</span> {active.credential}</p>
                <p><span className="font-semibold text-navy">License & Board:</span> {active.license}</p>
              </div>

              <h4 className="mt-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Next open appointment slots</h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {active.slots.map((slot) => (
                  <span
                    key={slot}
                    className="inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/5 px-3 py-1.5 text-xs font-semibold text-teal"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    {slot}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  className="flex-1 rounded-full border border-slate-200 py-3 text-xs sm:text-sm font-semibold text-navy hover:bg-slate-50"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="flex-1 btn-primary rounded-full py-3 text-xs sm:text-sm font-semibold text-white shadow-md"
                  onClick={() => {
                    setActive(null);
                    if (onBookDoc) onBookDoc(active.name);
                  }}
                >
                  Book with {active.name.split(",")[0]}
                </button>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}


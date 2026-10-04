import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, springHover, stagger } from "../lib/motion";
import Section from "./Section";

const visits = [
  {
    id: "15",
    title: "15-Min Express Check",
    detail: "Routine script / quick refill",
    cost: 89,
    copay: 25,
  },
  {
    id: "30",
    title: "30-Min Standard Care",
    detail: "Detailed diagnostic analysis",
    cost: 165,
    copay: 40,
  },
  {
    id: "60",
    title: "60-Min Deep Dive",
    detail: "Chronic or complex consultation",
    cost: 295,
    copay: 55,
  },
] as const;

export default function AppointmentSelector() {
  const [id, setId] = useState<(typeof visits)[number]["id"]>("30");
  const selected = visits.find((v) => v.id === id)!;

  return (
    <Section
      id="care"
      eyebrow="Same-day scheduling"
      title="Choose your appointment length"
      description="Select a visit type to preview estimated out-of-pocket costs before you book."
    >
      <motion.div className="grid gap-3 sm:gap-4 md:grid-cols-3" variants={stagger}>
        {visits.map((visit) => {
          const active = visit.id === id;
          return (
            <motion.button
              key={visit.id}
              type="button"
              variants={fadeUp}
              onClick={() => setId(visit.id)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springHover}
              className={`rounded-2xl sm:rounded-3xl border bg-white p-4 sm:p-6 text-left shadow-sm transition-all touch-manipulation relative ${
                active
                  ? "border-teal ring-2 ring-teal/20 bg-teal/5"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-indigo-600 uppercase">
                  {visit.id} min visit
                </span>
                <div
                  className={`h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${
                    active ? "border-teal bg-teal text-white" : "border-slate-300"
                  }`}
                >
                  {active && (
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="mt-2 text-base sm:text-lg font-bold text-navy">{visit.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">{visit.detail}</p>
            </motion.button>
          );
        })}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 8 }}
          className="mt-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs sm:text-sm font-medium text-slate-500">Estimated out-of-pocket cost</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">${selected.cost}</span>
              <span className="text-xs text-slate-400">/ self-pay rate</span>
            </div>
            <p className="mt-1.5 text-xs text-slate-600">
              Typical insured copay is <strong className="text-teal font-semibold">${selected.copay}</strong> after deductible. Insurance verified at booking.
            </p>
          </div>
          <div className="shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal bg-teal/10 px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              No Hidden Facility Fees
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}


import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, springHover, stagger } from "../lib/motion";
import Section from "./Section";

const features = [
  {
    id: "triage",
    title: "AI pre-visit triage",
    blurb: "A 90-second intake maps symptoms to the right clinician before you arrive.",
    status: "Live in portal",
    metric: "62% shorter visits",
    screen: ["Chief concern captured", "Red-flag rules cleared", "Room 4 reserved"],
    icon: "⚡",
  },
  {
    id: "wearable",
    title: "Wearable + EHR sync",
    blurb: "Apple Health, Garmin, and Dexcom streams land in your chart overnight.",
    status: "Encrypted nightly",
    metric: "14-day trendline",
    screen: ["HRV 48 → 54", "Sleep 7.2 hrs", "Glucose in range 91%"],
    icon: "⌚",
  },
  {
    id: "chat",
    title: "24/7 clinical chat",
    blurb: "Board-supervised nurses answer after hours. Physicians join if needed.",
    status: "Median reply 4 min",
    metric: "Night desk open",
    screen: ["Nurse Maya is online", "Rx refill approved", "Follow-up set Thu 9:10"],
    icon: "💬",
  },
  {
    id: "home",
    title: "Home draw & kits",
    blurb: "Phlebotomy at your door, plus PCR kits with same-day courier pickup.",
    status: "SF Bay coverage",
    metric: "Next window 7:40",
    screen: ["Kit dispatched", "Courier ETA 22 min", "Results to portal"],
    icon: "🩸",
  },
  {
    id: "family",
    title: "Family health vault",
    blurb: "One household login for pediatrics, adult, and caregiver proxies.",
    status: "HIPAA household",
    metric: "Up to 8 members",
    screen: ["Jordan Hale — GP", "Aria, 6 — vaccines due", "Proxy: Elena Hale"],
    icon: "👨‍👩‍👧",
  },
  {
    id: "work",
    title: "Employer on-site days",
    blurb: "Quarterly pop-up clinics for teams: vaccines, labs, and executive physicals.",
    status: "Book a campus day",
    metric: "12 companies live",
    screen: ["Floor 18 reserved", "48 employees booked", "Flu + lipids panel"],
    icon: "🏢",
  },
] as const;

export default function CarePlatform() {
  const [id, setId] = useState<(typeof features)[number]["id"]>("wearable");
  const active = features.find((f) => f.id === id)!;

  return (
    <Section
      id="platform"
      eyebrow="Aura Care OS"
      title="Care that continues after you leave"
      description="Not a static price list — a living platform: triage, wearables, night chat, home labs, and family records in one calm interface."
    >
      {/* Mobile Horizontal Pill Selector */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-3 sm:hidden no-scrollbar -mx-4 px-4 touch-manipulation">
        {features.map((feature) => {
          const on = feature.id === id;
          return (
            <button
              key={feature.id}
              type="button"
              onClick={() => setId(feature.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all ${
                on
                  ? "bg-navy text-white shadow-md ring-2 ring-teal/50"
                  : "bg-white border border-slate-200 text-slate-700"
              }`}
            >
              <span>{feature.icon}</span>
              <span>{feature.title}</span>
            </button>
          );
        })}
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[1fr_340px] lg:gap-8">
        {/* Feature Cards Grid (Desktop + Tablet) */}
        <motion.div className="hidden grid-cols-1 gap-3 sm:grid sm:grid-cols-2 lg:grid" variants={stagger}>
          {features.map((feature) => {
            const on = feature.id === id;
            return (
              <motion.button
                key={feature.id}
                type="button"
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={springHover}
                onClick={() => setId(feature.id)}
                className={`rounded-3xl border bg-white p-5 text-left shadow-[0_12px_36px_rgba(28,43,41,0.05)] transition-all touch-manipulation ${
                  on ? "border-teal ring-2 ring-teal/20" : "border-navy/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
                    {feature.status}
                  </span>
                  <span className="text-lg">{feature.icon}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{feature.blurb}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Mobile active feature summary card */}
        <div className="sm:hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
              {active.status}
            </span>
            <span className="text-xl">{active.icon}</span>
          </div>
          <h3 className="mt-1 text-base font-bold text-navy">{active.title}</h3>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed">{active.blurb}</p>
        </div>

        {/* App Preview Box */}
        <motion.aside
          variants={fadeUp}
          className="lg:sticky lg:top-28 overflow-hidden rounded-3xl border border-slate-200 bg-navy p-5 text-white shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-teal uppercase">Patient App Preview</p>
            <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-4"
            >
              <h3 className="text-lg font-semibold sm:text-xl">{active.title}</h3>
              <p className="mt-1 text-2xl font-bold text-teal sm:text-3xl">{active.metric}</p>
              <ul className="mt-4 grid gap-2 sm:mt-6">
                {active.screen.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-2.5 rounded-2xl bg-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-teal to-indigo-500" />
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}


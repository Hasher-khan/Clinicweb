import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";

const steps = [
  {
    n: "01",
    title: "Digital Pre-Checkin",
    copy: "Fill forms out via text link before you leave home.",
  },
  {
    n: "02",
    title: "Welcoming Arrival",
    copy: "Scan QR code at front desk. No clipboard queue.",
  },
  {
    n: "03",
    title: "Personalized Care",
    copy: "One-on-one doctor assessment in a private suite.",
  },
  {
    n: "04",
    title: "Smart Follow-up",
    copy: "Prescriptions sent digitally to in-house pharmacy.",
  },
];

export default function Timeline() {
  return (
    <section id="visit" className="scroll-mt-28 bg-white px-4 py-14 sm:px-6 md:py-24 lg:px-8">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.div variants={fadeUp} className="mx-auto mb-10 sm:mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-2 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-600">
            ✦ Seamless Experience
          </p>
          <h2 className="text-2xl font-bold text-navy sm:text-4xl">What to Expect on Your Visit</h2>
        </motion.div>

        {/* Timeline Grid: Vertical Connected Stepper on Mobile, 4-Col Grid on Desktop */}
        <div className="relative pl-6 sm:pl-0 border-l-2 border-indigo-100 sm:border-0 sm:grid sm:grid-cols-4 sm:gap-6 space-y-8 sm:space-y-0">
          <div className="absolute top-7 right-8 left-8 hidden h-0.5 bg-gradient-to-r from-teal via-indigo-500 to-teal sm:block" />
          {steps.map((step) => (
            <motion.article key={step.n} variants={fadeUp} className="relative group">
              {/* Mobile Node Marker */}
              <span className="absolute -left-[31px] top-0 grid h-6 w-6 place-items-center rounded-full bg-indigo-600 text-[10px] font-bold text-white ring-4 ring-white sm:hidden">
                {step.n.replace("0", "")}
              </span>

              {/* Desktop Number Bubble */}
              <div className="hidden mb-4 sm:flex items-center gap-3">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-teal bg-white text-sm font-extrabold text-navy shadow-md group-hover:scale-110 group-hover:bg-navy group-hover:text-white transition-all">
                  {step.n}
                </span>
              </div>

              <div className="bg-slate-50/70 sm:bg-transparent p-4 sm:p-0 rounded-2xl border border-slate-100 sm:border-0 shadow-sm sm:shadow-none">
                <h3 className="text-base sm:text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{step.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


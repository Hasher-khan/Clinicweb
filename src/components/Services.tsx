import { motion } from "framer-motion";
import { fadeUp, springHover, stagger } from "../lib/motion";
import Section from "./Section";

const services = [
  { name: "General Medicine", path: "M12 5v14M5 12h14" },
  { name: "Cardiology", path: "M4 12c2-6 4 6 6 0s4 6 6 0 4 6 6 0" },
  { name: "Pediatrics", path: "M12 21a7 7 0 0 1-7-7V8a3 3 0 0 1 6 0v1h2V8a3 3 0 0 1 6 0v6a7 7 0 0 1-7 7Z" },
  { name: "Women's Health", path: "M12 3v8m0 0a4 4 0 1 0 4 4m-4-4a4 4 0 1 1-4 4" },
  { name: "Diagnostics", path: "M8 4h8v6l4 8H4l4-8V4Zm2 0v4" },
  { name: "Preventive Screenings", path: "M5 12l4 4 10-10" },
  { name: "Dermatology", path: "M12 4c4 3 6 6 6 9a6 6 0 1 1-12 0c0-3 2-6 6-9Z" },
  { name: "Telehealth", path: "M4 7h11v10H4V7Zm11 3 5-3v8l-5-3" },
];

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Clinical services"
      title="Eight core specialties, one coordinated clinic"
      description="Every pathway is staffed in-house so you never wait on an outside referral for routine care."
    >
      <motion.div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" variants={stagger}>
        {services.map((service) => (
          <motion.article
            key={service.name}
            variants={{
              hidden: fadeUp.hidden,
              show: { opacity: 1, y: 0, scale: 1 },
              hover: { scale: 1.02, y: -4, transition: springHover },
            }}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl sm:rounded-3xl border border-navy/10 bg-white p-4 sm:p-6 shadow-sm hover:border-teal transition-all touch-manipulation flex flex-col justify-between"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-navy">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <motion.path
                    d={service.path}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      hidden: { pathLength: 1 },
                      show: { pathLength: 1 },
                      hover: {
                        pathLength: [0, 1],
                        transition: { duration: 0.7, ease: "easeInOut" },
                      },
                    }}
                  />
                </svg>
              </div>
              <h3 className="mt-3 text-sm sm:text-base font-bold text-navy">{service.name}</h3>
              <p className="mt-1 text-xs text-slate-500">Same-week start</p>
            </div>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-teal">
              Explore ➔
            </span>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}


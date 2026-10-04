import { motion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion";

const hours = [
  ["Mon – Fri", "07:00 – 20:00"],
  ["Saturday", "08:00 – 16:00"],
  ["Sunday", "09:00 – 14:00"],
  ["Holidays", "Urgent 10:00 – 13:00"],
];

export default function Location() {
  return (
    <section id="location" className="scroll-mt-28 px-4 py-14 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
          <p className="eyebrow text-xs font-semibold tracking-[0.22em] uppercase text-indigo-600">✦ Campus</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy">Location & Directions</h2>
          
          <div className="mt-4 rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
            <p className="text-base font-bold text-navy">AuraHealth Clinic San Francisco</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              480 Market Street, Suite 12 · San Francisco, CA 94105
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://maps.google.com/?q=480+Market+Street+San+Francisco+CA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-2 text-xs font-semibold text-white shadow-sm active:scale-95 transition-transform"
              >
                <svg className="h-3.5 w-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Google Maps
              </a>
              <a
                href="tel:+14155550148"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-navy active:scale-95 transition-transform"
              >
                <svg className="h-3.5 w-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Front Desk
              </a>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-600">
            <p>
              <strong>Parking:</strong> Dedicated structure at 12 Spear Street, levels B2–B3. 90-min validation at reception. EV charging stalls 18–21.
            </p>
            <p>
              <strong>Transit:</strong> Montgomery St. BART/Muni is a 4-minute walk via Sutter Street.
            </p>
          </div>

          <table className="mt-6 w-full text-xs sm:text-sm">
            <caption className="mb-2 text-left font-bold text-navy">Operating hours</caption>
            <tbody>
              {hours.map(([d, h]) => (
                <tr key={d} className="border-t border-slate-200">
                  <th className="py-2 pr-4 text-left font-medium text-slate-800">{d}</th>
                  <td className="py-2 text-slate-600">{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md min-h-[260px] flex items-center"
        >
          <svg viewBox="0 0 640 480" className="h-full min-h-[260px] w-full" role="img" aria-label="Map of clinic and parking">
            <rect width="640" height="480" fill="#F4F4F5" />
            <g stroke="#E4E4E7" strokeWidth="8">
              <path d="M0 160h640M0 320h640M160 0v480M400 0v480" />
            </g>
            <rect x="180" y="180" width="140" height="100" rx="12" fill="#09090B" />
            <text x="250" y="238" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="bold" fontFamily="Inter">
              Clinic
            </text>
            <rect x="430" y="300" width="130" height="90" rx="12" fill="#06B6D4" />
            <text x="495" y="350" textAnchor="middle" fill="#09090B" fontSize="13" fontWeight="bold" fontFamily="Inter">
              Parking B2
            </text>
            <circle cx="250" cy="230" r="8" fill="#6366F1" />
            <path d="M250 230 L495 345" stroke="#6366F1" strokeDasharray="6 6" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}


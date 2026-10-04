import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "The suite was immaculate and I was with a physician in under five minutes. It felt like a private club, not a clinic.",
    name: "Maya L.",
    tag: "Preventive screening",
  },
  {
    quote:
      "Staff moved with quiet efficiency. Labs were in my portal before I got back to the office.",
    name: "Chris P.",
    tag: "Diagnostics",
  },
  {
    quote:
      "Clean, calm, and modern. Pedi visit with no chaos in the waiting area — the Care OS family vault keeps everyone on one login.",
    name: "Elena R.",
    tag: "Pediatrics",
  },
  {
    quote:
      "Same-day cardiology follow-up. Every surface looked freshly prepared. I trusted the process immediately.",
    name: "Jonah K.",
    tag: "Cardiology",
  },
  {
    quote:
      "Digital check-in and a human conversation. Rare combination. I'll never go back to the warehouse model.",
    name: "Priya S.",
    tag: "General medicine",
  },
];

export default function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto mb-10 max-w-6xl px-4 text-center sm:px-6">
        <p className="eyebrow text-xs font-semibold tracking-[0.22em] uppercase">
          Verified social proof
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Patient reviews</h2>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-slate-light p-6 text-center lg:text-left">
          <p className="text-sm font-medium text-slate-500">Aggregated score</p>
          <p className="mt-2 text-4xl font-bold text-navy">4.9/5</p>
          <p className="mt-1 text-sm text-slate-600">from 2,400+ patients</p>
          <p className="mt-4 text-amber-500" aria-label="5 star rating">
            ★★★★★
          </p>
        </aside>
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {loop.map((review, i) => (
              <article
                key={`${review.name}-${i}`}
                className="w-[280px] shrink-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:w-[320px]"
              >
                <p className="text-amber-500">★★★★★</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">“{review.quote}”</p>
                <p className="mt-4 text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-teal">{review.tag}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

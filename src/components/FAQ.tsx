import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeUp } from "../lib/motion";
import Section from "./Section";

const faqs = [
  {
    q: "Which insurances do you accept?",
    a: "Most major PPO plans, Medicare, and select HMO networks with prior authorization. We verify eligibility in under two minutes at booking. Uninsured patients receive posted self-pay rates with no facility fee.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancel or reschedule up to 4 hours before your slot at no charge. Late cancellations under 4 hours are billed $45. Household accounts include two waived late fees per year.",
  },
  {
    q: "What should I bring to a first visit?",
    a: "Photo ID, insurance card if applicable, a current medication list, and any recent imaging on a disc or portal login. Complete digital pre-checkin from the SMS link so vitals capture starts on arrival.",
  },
  {
    q: "Are lab results available the same day?",
    a: "PCR and most point-of-care tests post to the portal the same visit. Full blood panels typically land within 6.4 hours. You receive a secure alert the moment results are released.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="faq"
      eyebrow="Support"
      title="Frequently asked questions"
      description="Insurance, cancellations, and first-visit essentials — answered clearly."
    >
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div key={item.q} variants={fadeUp}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="font-semibold">{item.q}</span>
                <span className="text-gold">{isOpen ? "–" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6"
                  >
                    {item.a}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

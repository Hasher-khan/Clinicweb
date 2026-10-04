import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger, viewport } from "../lib/motion";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-4 py-20 sm:px-6 md:py-24 lg:px-8 ${className}`}
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow ? (
            <p className="eyebrow mb-3 text-xs font-semibold tracking-[0.22em] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}

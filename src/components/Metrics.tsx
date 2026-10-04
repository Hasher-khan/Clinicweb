import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { to: 4.2, decimals: 1, suffix: " min", label: "Average wait" },
  { to: 99.4, decimals: 1, suffix: "%", label: "Satisfaction" },
  { to: 2400, decimals: 0, suffix: "+", label: "Patients treated" },
  { to: 8, decimals: 0, suffix: " yrs", label: "Tenure" },
];

export default function Metrics() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8" aria-label="Clinic performance">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:px-6 sm:py-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:grid-cols-4">
        {metrics.map((m) => (
          <Counter key={m.label} {...m} />
        ))}
      </div>
    </section>
  );
}

function Counter({
  to,
  decimals,
  suffix,
  label,
}: {
  to: number;
  decimals: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.35,
      ease: "easeOut",
      onUpdate: setValue,
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <div ref={ref} className="text-center p-2 sm:p-0">
      <p className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
        {value.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-0.5 text-xs text-slate-500 sm:text-sm font-medium">{label}</p>
    </div>
  );
}


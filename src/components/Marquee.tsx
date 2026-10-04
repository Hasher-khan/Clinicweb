const items = [
  "SAME-DAY APPOINTMENTS AVAILABLE",
  "INSTANT DIGITAL LAB RESULTS",
  "IN-HOUSE PHARMACY OPEN",
  "MOST MAJOR INSURANCES ACCEPTED",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Same-day care highlights" className="overflow-hidden border-y border-gold/20 bg-navy">
      <div className="marquee-track flex w-max items-center gap-8 py-3.5">
        {row.concat(row).map((text, i) => (
          <span key={`${text}-${i}`} className="flex items-center gap-8 text-sm font-semibold tracking-wide text-white">
            <span className="chroma-dot inline-flex h-2.5 w-2.5 rounded-full" />
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}

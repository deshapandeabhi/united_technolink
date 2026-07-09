import { partners } from "../data/content";

export default function PartnerMarquee() {
  const loop = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-950 to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        {loop.map((p, i) => (
          <span
            key={i}
            className="mx-6 shrink-0 text-lg sm:text-xl font-display font-semibold text-slate-500 hover:text-brand-300 transition-colors whitespace-nowrap"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

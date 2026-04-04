import { skillTickerItems } from "@/lib/data";

export function SkillTicker() {
  const items = [...skillTickerItems, ...skillTickerItems];

  return (
    <div className="border-y border-border bg-[#101010] py-4">
      <p className="mb-3 text-center text-[0.65rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
        Tools & platforms
      </p>
      <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {items.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap text-sm font-medium text-foreground/90"
            >
              {skill}
              <span className="px-3 text-muted-foreground">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

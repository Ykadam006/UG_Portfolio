import { skillTickerItems } from "@/lib/data";

export function SkillTicker() {
  const items = [...skillTickerItems, ...skillTickerItems];

  return (
    <div className="border-y border-border bg-[#101010] py-4">
      <p className="mb-3 text-center text-[0.65rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
        Tools & platforms
      </p>
      <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8 md:gap-10 md:pr-10">
          {items.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <span
                key={`${skill.label}-${i}`}
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border/60 bg-[#141414]/90 px-4 py-2 text-sm font-medium text-foreground/90 shadow-[0_0_0_1px_rgba(201,168,76,0.06)]"
              >
                <Icon
                  className="size-4 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {skill.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

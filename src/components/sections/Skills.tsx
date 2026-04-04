"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills & tools"
            title="The stack behind the stories and the spreadsheets"
            description="Grouped for clarity—design systems on one side, analytics on the other, with communication tools bridging both."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={0.07 * index}>
              <div className="space-y-4 rounded-3xl border border-black/5 bg-card p-7 shadow-[0_18px_50px_-42px_rgba(17,17,17,0.3)]">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/portfolio";

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border/60 bg-secondary/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl space-y-12 px-6">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Answers hiring teams ask first"
            description="Straightforward detail on how I work, what I gravitate toward, and how to see more samples."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion
            defaultValue={[faqItems[0]?.question ?? "item-0"]}
            className="divide-y divide-border rounded-3xl border border-black/5 bg-card px-2 shadow-[0_18px_50px_-42px_rgba(17,17,17,0.3)]"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-none px-4"
              >
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

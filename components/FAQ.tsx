"use client";

import { useState } from "react";
import { faqs } from "@/content/site";
import { AccordionItem } from "@/components/AccordionItem";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { images, bubbles } from "@/content/site";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <SectionFrame>
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-white">
            <div className="aspect-[4/3]">
              <PlaceholderImage src={images.faqImage} label="FAQ" />
            </div>
            <span className="absolute right-6 top-8 max-w-[160px] rounded-2xl bg-black px-4 py-2 text-sm text-white">
              {bubbles.faq}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Frequently Answered Questions
          </p>
          <div className="mt-4">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                title={item.q}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              >
                {item.a}
              </AccordionItem>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}

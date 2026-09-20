"use client";

import { useState } from "react";
import { services } from "@/content/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { AccordionItem } from "@/components/AccordionItem";
import { Marquee } from "@/components/Marquee";

export function ServicesTeaser() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="overflow-hidden border-y border-white/10 py-3">
        <Marquee>
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 inline-flex items-center gap-6 font-display text-5xl md:text-7xl"
            >
              SERVICES
              <span className="font-body text-sm font-normal text-muted">
                what i offer
              </span>
            </span>
          ))}
        </Marquee>
      </div>
      <SectionFrame>
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.08}>
            <div className="grid items-center gap-6 md:grid-cols-[1fr_220px]">
              <AccordionItem
                index={s.id}
                title={s.title}
                subtitle={s.tagline}
                open={open === i}
                onToggle={() => setOpen(i)}
              >
                {s.description}
              </AccordionItem>
              {open === i ? (
                <div className="mb-6 h-40 overflow-hidden rounded-2xl">
                  <PlaceholderImage src={s.image} label={s.title} />
                </div>
              ) : (
                <div className="hidden md:block" />
              )}
            </div>
          </Reveal>
        ))}
      </SectionFrame>
    </>
  );
}

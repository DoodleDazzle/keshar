"use client";

import { images, testimonial } from "@/content/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";

export function Testimonial() {
  return (
    <SectionFrame>
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted">
          What my Clients said
        </p>
        <p className="mt-2 text-center font-display text-4xl text-white md:text-6xl">
          TESTIMONIAL
        </p>
        <blockquote className="mx-auto mt-8 max-w-3xl text-balance text-center text-xl text-white/90 md:text-2xl">
          “{testimonial.quote}”
        </blockquote>
        <div className="mx-auto mt-8 h-16 w-16 overflow-hidden rounded-full">
          <PlaceholderImage src={images.testimonialAvatar} label="AV" />
        </div>
        <p className="mt-3 text-center font-medium">{testimonial.name}</p>
        <p className="text-center text-sm text-muted">{testimonial.role}</p>
      </Reveal>
    </SectionFrame>
  );
}

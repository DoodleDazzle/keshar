import { cta } from "@/content/site";
import { PillButton } from "@/components/PillButton";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";

export function CtaBanner() {
  return (
    <SectionFrame>
      <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black px-6 py-16 text-center md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="relative">
          <h2 className="font-display text-4xl text-white md:text-6xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{cta.body}</p>
          <div className="mt-8 flex justify-center">
            <PillButton href="#contact" variant="light" dot>
              {cta.button}
            </PillButton>
          </div>
        </div>
      </Reveal>
    </SectionFrame>
  );
}

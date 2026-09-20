import { process as steps } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";

export function Process() {
  return (
    <SectionFrame>
      <Reveal>
        <p className="font-display text-4xl text-white md:text-6xl">PROCESS</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.1}>
              <p className="text-muted">{step.id}</p>
              <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionFrame>
  );
}

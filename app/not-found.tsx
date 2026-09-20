import { PillButton } from "@/components/PillButton";
import { SectionFrame } from "@/components/SectionFrame";

export default function NotFound() {
  return (
    <SectionFrame innerClassName="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-display text-[clamp(5rem,18vw,12rem)] leading-none">
        404
      </p>
      <p className="mt-4 text-muted">This page wandered off the frame.</p>
      <div className="mt-8">
        <PillButton href="/" variant="light">
          Back Home
        </PillButton>
      </div>
    </SectionFrame>
  );
}

import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { cn } from "@/lib/cn";

export function PageHero({
  title,
  bubble,
  image,
  reverse = false,
}: {
  title: string;
  bubble: string;
  image?: string;
  reverse?: boolean;
}) {
  return (
    <SectionFrame innerClassName="pb-6 md:pb-8">
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Reveal className="min-w-0">
          <h1
            className="min-w-0 whitespace-nowrap font-display leading-[0.85] tracking-tight text-white"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
          >
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="relative w-full justify-self-end">
          <div
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl",
              reverse && "max-w-sm"
            )}
          >
            <div className={cn("aspect-video", reverse && "aspect-[4/3.4]")}>
              <PlaceholderImage src={image} label={title} />
            </div>
            <span
              className={cn(
                "absolute top-6 max-w-[200px] rounded-2xl bg-black/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm",
                reverse ? "right-0" : "left-6"
              )}
            >
              {bubble}
            </span>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}

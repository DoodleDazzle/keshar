import {
  aboutStatsLeft,
  aboutStatsRight,
  bubbles,
  experience,
  images,
  stack,
} from "@/content/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { TimelineRow } from "@/components/TimelineRow";

export function About() {
  return (
    <SectionFrame innerClassName="px-0 py-0 md:px-0">
      <div className="grid items-start lg:grid-cols-[1fr_1.4fr_1fr]">
        <div className="border-white/10 lg:border-r">
          {aboutStatsLeft.map((s) => (
            <div key={s.label} className="border-b border-white/10 px-8 py-10">
              <p className="font-display text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
          <div className="px-8 py-8">
            <p className="mb-4 rounded-lg bg-white/5 px-3 py-2 text-sm">My Stack</p>
            <div className="space-y-4">
              {stack.slice(0, 4).map((item) => (
                <div key={item.name} className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-bold text-black">
                    {item.name.slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-muted">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="flex flex-col items-center px-6 py-12 text-center">
          <h2 className="font-display text-5xl text-white md:text-7xl">ABOUT ME</h2>
          <div className="lg:sticky lg:top-24 lg:self-start w-full flex justify-center">
            <div className="relative mt-8 w-full max-w-md overflow-hidden rounded-3xl bg-white">
              <div className="aspect-[4/3]">
                <PlaceholderImage
                  src={images.aboutImage}
                  video={images.heroAvatarVideo}
                  label="ABOUT"
                />
              </div>
              <span className="absolute right-6 top-8 rounded-2xl bg-black px-4 py-2 text-sm text-white">
                {bubbles.about}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="border-white/10 lg:border-l">
          {aboutStatsRight.map((s) => (
            <div key={s.label} className="border-b border-white/10 px-8 py-10">
              <p className="font-display text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
          <div className="px-8 py-8">
            <p className="mb-4 rounded-lg bg-white/5 px-3 py-2 text-sm">My Experience</p>
            {experience.map((row) => (
              <TimelineRow
                key={row.title}
                title={row.title}
                company={row.company}
                year={row.year}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

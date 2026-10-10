import { stats } from "@/content/site";
import { Marquee } from "@/components/Marquee";
import { StatBlock } from "@/components/StatBlock";

export function StatsMarquee() {
  return (
    <div className="border-y border-white/10">
      <Marquee>
        {stats.map((s) => (
          <div key={s.label} className="flex items-center">
            <StatBlock value={s.value} label={s.label} />
            <span className="h-10 w-px bg-white/15" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

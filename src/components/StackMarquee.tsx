import { stack } from "@/content/site";
import { Marquee } from "@/components/Marquee";

export function StackMarquee() {
  return (
    <div className="border-b border-white/10 py-6">
      <p className="mb-4 px-[7vw] text-sm text-muted">My Stack</p>
      <Marquee slow>
        {stack.map((item) => (
          <div key={item.name} className="flex min-w-[200px] items-center gap-3 px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-bold text-black">
              {item.name.slice(0, 2)}
            </div>
            <div>
              <p className="text-sm text-white">{item.name}</p>
              <p className="text-xs text-muted">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

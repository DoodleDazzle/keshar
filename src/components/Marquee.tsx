import { cn } from "@/lib/cn";

export function Marquee({
  children,
  className,
  slow = false,
}: {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "marquee-track flex w-max items-center",
          slow ? "animate-marqueeSlow" : "animate-marquee"
        )}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

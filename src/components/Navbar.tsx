"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { pageAccent, socials, type PageKey } from "@/content/site";
import { PillButton } from "@/components/PillButton";
import { SocialIcon } from "@/components/SocialIcon";
import { cn } from "@/lib/cn";

function routeKey(pathname: string): PageKey {
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/services")) return "services";
  return "home";
}

function BadgeIcon({ icon }: { icon: "person" | "briefcase" | "laptop" }) {
  if (icon === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
        <path
          d="M8 7V6a2 2 0 012-2h4a2 2 0 012 2v1M4 10h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8zM4 13h16"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }
  if (icon === "laptop") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
        <path
          d="M5 7h14v9H5V7zM3 18h18"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 19c1.2-3 3.2-4.5 6-4.5S16.8 16 18 19"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const key = routeKey(pathname);
  const accent = pageAccent[key];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/90">
      <div className="flex flex-col gap-2 px-4 pt-2 pb-8 md:px-8">
        <div className="relative flex h-12 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <PillButton href="#contact" variant="light" dot className="py-2 text-xs md:text-sm">
              i Want to Chat
            </PillButton>
            <div className="hidden items-center gap-2 lg:flex">
              {socials.map((s) => (
                <SocialIcon key={s.name} name={s.icon} href={s.href} className="h-8 w-8" />
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="flex items-center gap-3 md:gap-4">
              <Link
                href="/projects"
                className={cn(
                  "text-sm transition-colors duration-300",
                  key === "projects" ? "font-semibold" : "text-muted"
                )}
                style={key === "projects" ? { color: accent.glow } : undefined}
              >
                Projects
              </Link>
              <span className="text-white/40">•</span>
              <div className="relative flex h-11 w-11 items-center justify-center">
                <span
                  className={cn(
                    "absolute inset-0 rounded-full border-[1.5px] border-dotted animate-spinSlow",
                    accent.ring === "dotted" && "border-dotted",
                    accent.ring === "dashed" && "border-dashed",
                    accent.ring === "solid" && "border-solid"
                  )}
                  style={{
                    borderColor: accent.glow,
                  }}
                />
                <motion.div
                  layoutId="nav-badge"
                  className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
                  transition={{ duration: 0.3 }}
                >
                  <BadgeIcon icon={accent.icon} />
                </motion.div>
              </div>
              <Link
                href="/services"
                className={cn(
                  "text-sm transition-colors duration-300",
                  key === "services" ? "font-semibold" : "text-muted"
                )}
                style={key === "services" ? { color: accent.glow } : undefined}
              >
                Services
              </Link>
            </div>
            <Link
              href="/"
              className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-sm font-medium"
              style={{ color: accent.glow }}
            >
              Home
            </Link>
          </div>

          <button
            type="button"
            aria-label="Theme"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
              <path
                d="M21 14.5A8.5 8.5 0 1110.5 3 7 7 0 0021 14.5z"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <nav className="flex items-center justify-center gap-4 md:hidden">
          <Link
            href="/projects"
            className={cn(
              "text-sm",
              key === "projects" ? "font-semibold" : "text-muted"
            )}
            style={key === "projects" ? { color: accent.glow } : undefined}
          >
            Projects
          </Link>
          <Link href="/" className="text-sm font-medium" style={{ color: accent.glow }}>
            Home
          </Link>
          <Link
            href="/services"
            className={cn(
              "text-sm",
              key === "services" ? "font-semibold" : "text-muted"
            )}
            style={key === "services" ? { color: accent.glow } : undefined}
          >
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
}

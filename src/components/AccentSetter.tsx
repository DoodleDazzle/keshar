"use client";

import { usePathname } from "next/navigation";
import { pageAccent, type PageKey } from "@/content/site";

function routeKey(pathname: string): PageKey {
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/services")) return "services";
  return "home";
}

export function AccentSetter() {
  const pathname = usePathname();
  const glow = pageAccent[routeKey(pathname)].glow;

  return (
    <style>{`:root { --accent-glow: ${glow}; }`}</style>
  );
}

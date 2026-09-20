"use client";

import { useState } from "react";
import {
  contact,
  images,
  site,
  socials,
} from "@/content/site";
import { PillButton } from "@/components/PillButton";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionFrame } from "@/components/SectionFrame";
import { SocialIcon } from "@/components/SocialIcon";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <footer id="contact">
      <SectionFrame>
        <Reveal>
          <p className="font-display text-5xl text-white md:text-7xl">
            {contact.eyebrow}
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl">{contact.heading}</h2>
              <p className="mt-3 max-w-md text-muted">{contact.body}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-2xl border border-white/10 bg-surface p-5 text-left transition-transform hover:scale-[1.02]"
              >
                <p className="text-xs uppercase tracking-wider text-muted">
                  Email
                </p>
                <p className="mt-2 text-white">{site.email}</p>
                <p className="mt-3 text-xs text-muted">
                  {copied ? "Copied!" : "Click to copy"}
                </p>
              </button>
              <div className="rounded-2xl border border-white/10 bg-surface p-5">
                <p className="text-xs uppercase tracking-wider text-muted">
                  Phone
                </p>
                <a href={`tel:${site.phone}`} className="mt-2 block text-white">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            {socials.map((s) => (
              <SocialIcon key={s.name} name={s.icon} href={s.href} />
            ))}
          </div>
          <p className="mt-10 max-w-xl text-muted">{contact.schedulePrompt}</p>
          <div className="mt-4">
            <PillButton href="#contact" variant="light">
              {contact.scheduleCta}
            </PillButton>
          </div>
        </Reveal>
      </SectionFrame>

      <div className="overflow-hidden border-y border-white/10 py-4">
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-4 font-display text-5xl text-white md:text-7xl"
            >
              START A PROJECT
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-black">
                ↗
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <SectionFrame innerClassName="py-8">
        <div className="grid gap-8 md:grid-cols-[180px_1fr_1fr_1fr]">
          <div className="aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl">
            <PlaceholderImage src={images.footerCharacter} label="AVATAR" />
          </div>
          <div className="space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Projects", "/projects"],
              ["404", "/404"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between border-b border-white/10 pb-3 text-white"
              >
                {label}
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </a>
            ))}
          </div>
          <div>
            <p className="mb-3 text-sm text-muted">Socials</p>
            <ul className="space-y-2 text-sm text-white">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.name === "X" ? "X (Twitter)" : s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-muted">
            <p>{site.copyright}</p>
            <p className="mt-4">{site.email}</p>
          </div>
        </div>
      </SectionFrame>
    </footer>
  );
}

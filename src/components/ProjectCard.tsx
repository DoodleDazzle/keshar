"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { cn } from "@/lib/cn";

export function ProjectCard({
  title,
  subtitle,
  href,
  image,
  className,
}: {
  title: string;
  subtitle?: string;
  href: string;
  image?: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={cn("will-change-transform", className)}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-2xl shadow-lift"
      >
        <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
          <PlaceholderImage
            src={image}
            label={title.toUpperCase()}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
          <p className="font-display text-2xl text-white">{title}</p>
          {subtitle ? <p className="text-sm text-white/70">{subtitle}</p> : null}
        </div>
      </Link>
    </motion.div>
  );
}

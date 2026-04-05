"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

// Variable heights for natural masonry stagger
function getCardHeight(project: Project): string {
  if (project.tier === "top") {
    const heights = ["280px", "340px", "260px", "320px", "360px", "290px", "310px"];
    return heights[(project.index - 1) % heights.length];
  }
  const heights = ["240px", "270px", "250px", "220px", "260px", "235px"];
  return heights[(project.index - 1) % heights.length];
}

type ProjectTileProps = {
  project: Project;
  index: number;
};

export default function ProjectTile({ project, index }: ProjectTileProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hue = project.accentHue;

  // Force the video to play and loop — browsers can silently pause autoplayed videos
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.play().catch(() => {});
    const handleEnded = () => {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    };
    vid.addEventListener("ended", handleEnded);
    return () => vid.removeEventListener("ended", handleEnded);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    },
    []
  );

  const cardHeight = getCardHeight(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative rounded-lg overflow-hidden border border-border transition-all duration-300 ease-out group-hover:border-accent/30 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-foreground/5"
          style={{ height: cardHeight }}
        >
          {/* Video background */}
          <video
            ref={videoRef}
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Bottom scrim for text legibility */}
          <div
            className="absolute inset-x-0 bottom-0 p-4 pt-20"
            style={{
              background: `linear-gradient(to top,
                rgba(0,0,0,0.70) 0%,
                rgba(0,0,0,0.50) 20%,
                rgba(0,0,0,0.30) 40%,
                rgba(0,0,0,0.12) 60%,
                rgba(0,0,0,0.04) 80%,
                rgba(0,0,0,0) 100%
              )`,
            }}
          >
            {/* Hover darkening layer */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out pointer-events-none"
              style={{
                background: `linear-gradient(to top,
                  rgba(0,0,0,0.30) 0%,
                  rgba(0,0,0,0.20) 20%,
                  rgba(0,0,0,0.08) 45%,
                  rgba(0,0,0,0) 75%
                )`,
              }}
            />
            {/* Category */}
            <span className="block font-mono text-[10px] tracking-[0.15em] text-white/70 mb-1 uppercase">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="font-mono text-base font-semibold text-white leading-tight">
              {project.title}
            </h3>

            {/* Tagline — slides up on hover */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
              <div className="overflow-hidden">
                <p className="font-mono text-xs text-white/75 leading-relaxed mt-2">
                  {project.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Mouse-tracking radial glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
            style={{
              background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(${hue}, 35%, 65%, 0.12), transparent 40%)`,
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

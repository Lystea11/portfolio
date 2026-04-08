"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const experience = [
  {
    company: "ScoutOut.ai",
    role: "AI/ML Intern",
    description:
      "Built ML workflows for real estate data analysis. Developed scalable data pipelines and designed models for trend detection and insight generation.",
  },
  {
    company: "Harvard Undergraduate Ventures",
    role: "TECH Summer Program",
    description:
      "Worked with startup founders, investors, and Harvard faculty on venture-building and product thinking.",
  },
  {
    company: "LVMH Watches & Jewelry",
    role: "IT Intern",
    description:
      "Shadowed IT director. Enterprise infrastructure, back-office workflows.",
  },
  {
    company: "Delpha",
    role: "Data Analyst Intern",
    description: "Data cleaning, web scraping, competitive analysis.",
  },
];

export default function AboutPage() {
  return (
    <motion.main
      variants={stagger}
      initial="hidden"
      animate="show"
      className="min-h-screen pt-28 md:pt-36 pb-20 px-8 md:px-16 lg:px-24"
    >
      {/*
        Intro — photo and text side by side on desktop.
        Photo sits right, offset slightly higher than the text.
        On mobile: photo appears above text via flex-col-reverse.
      */}
      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between md:gap-16 mb-14 md:mb-20">
        <motion.div variants={fade} className="mt-8 md:mt-0">
          <h1 className="font-mono text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Lysandre Stone-Bourgeois
          </h1>
          <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted">
            Tokyo, Japan
          </p>
          <p className="mt-6 text-sm leading-relaxed text-foreground/85 max-w-md">
            Motivated High School Junior with a passion for information
            systems, software development, and data science. 
            Internship and startup-focused with experience in 
            technical skills with business insights.
          </p>
        </motion.div>

        {/* Photo — rectangular, warm-toned, no circle, no frame */}
        <motion.div
          variants={fade}
          className="w-36 h-44 md:w-40 md:h-52 lg:w-48 lg:h-60 flex-shrink-0 md:-mt-3"
        >
          <Image
            src="/face.png"
            alt="Lysandre Stone-Bourgeois"
            width={192}
            height={240}
            className="w-full h-full object-cover rounded-sm grayscale-[20%] contrast-[1.03]"
            priority
          />
        </motion.div>
      </div>

      {/* Thin rule — structural, not decorative */}
      <motion.div
        variants={fade}
        className="h-px bg-border/60 mb-14 md:mb-20 max-w-3xl"
      />

      {/* Two-column area: Experience left, reference info right */}
      <div className="flex flex-col lg:flex-row lg:gap-24 xl:gap-32">
        {/* Left column — experience (heavier) */}
        <motion.section variants={fade} className="mb-14 lg:mb-0 lg:flex-1 lg:max-w-lg">
          <span className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-6">
            Experience
          </span>
          <div className="space-y-5">
            {experience.map((exp, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm text-accent font-mono">
                    {exp.company}
                  </span>
                  <span className="text-[11px] text-muted">
                    &mdash; {exp.role}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-foreground/70 max-w-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Right column — reference info (lighter, tighter) */}
        <motion.div
          variants={fade}
          className="lg:w-64 xl:w-72 lg:pt-1"
        >
          {/* Education */}
          <div className="mb-10">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-3">
              Education
            </span>
            <p className="text-sm font-mono text-foreground">
              The American School in Japan
            </p>
            <p className="text-xs text-muted mt-0.5">Expected 2027</p>
          </div>

          {/* Certification */}
          <div className="mb-10">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-3">
              Certifications
            </span>
            <p className="text-xs text-foreground/70">
              AWS Certified Cloud Practitioner
            </p>
            <p className="text-[11px] text-muted mt-0.5">
              Valid through 2029
            </p>
          </div>

          {/* Links */}
          <div className="mb-10">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-3">
              Elsewhere
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/Lystea11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors w-fit"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/lysandre-stone-bourgeois"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors w-fit"
              >
                LinkedIn
              </a>
              <a
                href="mailto:lysandrestonebourgeois@gmail.com"
                className="text-xs text-muted hover:text-foreground transition-colors w-fit"
              >
                lysandrestonebourgeois@gmail.com
              </a>
            </div>
          </div>

          {/* Resume — distinct from the links above */}
          <a
            href="/Lysandre_Stone_Bourgeois_Resume_2026.pdf"
            download
            className="inline-block text-sm text-accent hover:text-accent-hover transition-colors border-b border-accent/30 pb-px"
          >
            Download Resume &darr;
          </a>
        </motion.div>
      </div>
    </motion.main>
  );
}

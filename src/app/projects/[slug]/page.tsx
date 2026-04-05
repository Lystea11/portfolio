"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProject } from "@/lib/projects";
import SplitFlapText from "@/components/split-flap-text";
import PageTransition from "@/components/page-transition";

function ProjectHeroVisual({ video }: { video?: string }) {
  if (!video) return null;
  return (
    <div
      className="relative w-full pt-28 pb-12 md:pt-32 md:pb-16"
      style={{
        background: `linear-gradient(to bottom,
          var(--color-background) 0%,
          var(--color-surface-elevated) 35%,
          var(--color-surface-elevated) 65%,
          var(--color-background) 100%
        )`,
      }}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-lg shadow-lg shadow-foreground/8"
        />
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-muted">
        PROJECT NOT FOUND
      </div>
    );
  }

  return (
    <PageTransition className="min-h-screen">
      {/* Hero */}
      <ProjectHeroVisual video={project.video} />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6 md:px-8 pb-20">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="font-mono text-xs tracking-[0.15em] text-muted hover:text-accent transition-colors mb-8 flex items-center gap-2"
          >
            <span>&larr;</span> ALL PROJECTS
          </Link>
        </motion.div>

        {/* Category */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-[10px] tracking-[0.2em] text-muted mb-4 uppercase"
        >
          {project.category}
        </motion.div>

        {/* Title */}
        <div className="mb-8">
          <SplitFlapText
            text={project.title.toUpperCase()}
            className="text-2xl md:text-4xl lg:text-5xl"
            charClassName="w-[0.9em] h-[1.3em] font-bold"
            speed={25}
            stagger={40}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-base md:text-lg text-muted mt-4 leading-relaxed"
          >
            {project.tagline}
          </motion.p>
        </div>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-sm border border-border text-foreground/70 bg-surface hover:border-accent/40 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-base md:text-lg leading-[1.8] text-foreground/85">
            {project.description}
          </p>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.08 }}
                className="flex items-start gap-4 font-mono text-sm text-foreground/75"
              >
                <span className="mt-2.5 w-2.5 h-px bg-accent/60 shrink-0" />
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Why It Matters */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-16 p-6 md:p-8 rounded-lg border border-border bg-surface"
        >
          <p className="text-base leading-[1.8] text-foreground/80 italic">
            {project.blogAngle}
          </p>
        </motion.section>

      </div>
    </PageTransition>
  );
}

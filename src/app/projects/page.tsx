"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllProjects } from "@/lib/projects";
import type { FilterCategory } from "@/lib/projects";
import MasonryGrid from "@/components/masonry-grid";
import ProjectTile from "@/components/project-tile";
import PageTransition from "@/components/page-transition";
import SplitFlapText from "@/components/split-flap-text";

const FILTERS: { label: string; value: FilterCategory | null }[] = [
  { label: "Web", value: "Web" },
  { label: "Data", value: "Data" },
  { label: "All", value: null },
  { label: "Cybersecurity", value: "Cybersecurity" },
  { label: "NPM Package", value: "NPM Package" },
];

export default function ProjectsPage() {
  const projects = getAllProjects();
  const [activeFilter, setActiveFilter] = useState<FilterCategory | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter
        ? projects.filter((p) => p.filterCategory === activeFilter)
        : projects,
    [activeFilter, projects]
  );

  return (
    <PageTransition className="min-h-screen pt-20 pb-16 px-4 md:px-8 lg:px-12">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10 md:mb-14">
        <div className="mb-6">
          <SplitFlapText
            text="PROJECTS"
            className="text-2xl md:text-4xl"
            charClassName="w-[1em] h-[1.3em] font-bold"
            speed={30}
            stagger={50}
          />
        </div>

        {/* Filter bar */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center justify-between mt-6 font-mono text-[11px] tracking-[0.15em] uppercase"
          aria-label="Filter projects"
        >
          {FILTERS.map(({ label, value }) => (
            <button
              key={label}
              onClick={() => setActiveFilter(value)}
              className={`flex-1 text-center cursor-pointer transition-colors duration-300 ${
                activeFilter === value
                  ? "text-foreground"
                  : "text-muted-light hover:text-muted"
              }`}
            >
              <span className="inline-block" style={{ transform: "scaleX(1.15)" }}>{label}</span>
            </button>
          ))}
        </motion.nav>
      </header>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter ?? "all"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <MasonryGrid>
              {filtered.map((project, i) => (
                <ProjectTile
                  key={project.slug}
                  project={project}
                  index={i}
                />
              ))}
            </MasonryGrid>
          </motion.div>
        </AnimatePresence>
      </div>

    </PageTransition>
  );
}

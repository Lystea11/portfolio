"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/page-transition";
import SplitFlapText from "@/components/split-flap-text";
import { getAllPosts } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
}

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr);
  return d
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <PageTransition className="min-h-screen pt-20 pb-16 px-4 md:px-8 lg:px-12">
      {/* Header */}
      <header className="max-w-3xl mx-auto mb-6">
        <SplitFlapText
          text="BLOG"
          className="text-2xl md:text-4xl"
          charClassName="w-[1em] h-[1.3em] font-bold"
          speed={30}
          stagger={50}
        />
      </header>

      {/* Partial rule — asymmetric, not full width */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-3xl mx-auto h-px bg-border/60 origin-left w-20 mb-10 md:mb-14"
      />

      <div className="max-w-3xl mx-auto">
        {/* Featured (latest) post — more visual weight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="group block pb-10 md:pb-12"
          >
            <div className="font-mono text-[10px] tracking-[0.15em] text-muted mb-3">
              {formatDate(featured.date)}
            </div>
            <h2 className="font-mono text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight mb-3">
              {featured.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-xl mb-4">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.15em]">
              <span className="text-accent">
                {featured.category.toUpperCase()}
              </span>
              <span className="text-muted-light">&middot;</span>
              <span className="text-muted">
                {featured.readTime.toUpperCase()}
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Rule before index */}
        <div className="h-px bg-border/40 mb-2" />

        {/* Remaining posts — tighter, index-style */}
        <div>
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4 md:py-5 border-b border-border/30 last:border-0"
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted shrink-0 w-14">
                    {formatDateShort(post.date)}
                  </span>
                  <span className="font-mono text-sm text-foreground group-hover:text-accent transition-colors truncate">
                    {post.title}
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted shrink-0 hidden sm:inline">
                  {post.category.toUpperCase()}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/page-transition";
import { getPost, type ContentBlock } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className="text-[15px] leading-[1.85] text-foreground/85 mb-6"
              >
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2
                key={i}
                className="font-mono text-base font-semibold text-foreground mt-10 mb-4"
              >
                {block.text}
              </h2>
            );
          case "callout":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent/50 pl-5 py-3 my-8 bg-surface/40 -ml-1 rounded-r-sm"
              >
                <p className="text-sm leading-[1.8] text-foreground/75 italic">
                  {block.text}
                </p>
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="space-y-3 my-6 ml-1">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[15px] leading-[1.8] text-foreground/80"
                  >
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-muted">
        POST NOT FOUND
      </div>
    );
  }

  return (
    <PageTransition className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Link
            href="/blog"
            className="font-mono text-xs tracking-[0.12em] text-muted hover:text-foreground transition-colors"
          >
            &larr; All posts
          </Link>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.15em] text-muted"
        >
          <span>{formatDate(post.date)}</span>
          <span className="text-muted-light">&middot;</span>
          <span className="text-accent">{post.category.toUpperCase()}</span>
          <span className="text-muted-light">&middot;</span>
          <span>{post.readTime.toUpperCase()}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-mono text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-10 md:mb-12 leading-tight"
        >
          {post.title}
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ContentRenderer blocks={post.content} />
        </motion.div>

      </div>
    </PageTransition>
  );
}

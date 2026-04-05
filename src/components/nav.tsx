"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/blog", label: "BLOG" },
];

export default function Nav() {
  const pathname = usePathname();

  // Hide nav on landing page
  if (pathname === "/") return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-5"
      style={{
        background: "linear-gradient(to bottom, rgba(245,240,232,0.97) 0%, rgba(245,240,232,0.8) 70%, transparent 100%)",
      }}
    >
      <Link
        href="/"
        className="font-mono text-sm tracking-[0.2em] transition-colors text-accent hover:text-accent-hover"
      >
        LSB
      </Link>

      <div className="flex items-center gap-6 md:gap-8">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-mono text-xs tracking-[0.15em] transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

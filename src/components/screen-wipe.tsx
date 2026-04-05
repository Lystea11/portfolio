"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ScreenWipeProps = {
  active: boolean;
  onComplete?: () => void;
};

export default function ScreenWipe({ active, onComplete }: ScreenWipeProps) {
  const [phase, setPhase] = useState<"cover" | "reveal">("cover");

  if (!active) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-foreground"
      initial={{ y: "100%" }}
      animate={phase === "cover" ? { y: "0%" } : { y: "-100%" }}
      transition={{
        duration: phase === "cover" ? 0.45 : 0.4,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (phase === "cover") {
          // Fire the navigation while we're fully covered
          onComplete?.();
          // Short delay then reveal (slide out upward)
          setTimeout(() => setPhase("reveal"), 80);
        }
      }}
    />
  );
}

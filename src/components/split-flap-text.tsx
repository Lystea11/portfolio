"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -·/.";

type SplitFlapTextProps = {
  text: string;
  className?: string;
  charClassName?: string;
  speed?: number; // ms per flip
  stagger?: number; // ms delay between characters
  onComplete?: () => void;
};

function SplitFlapChar({
  target,
  delay,
  speed,
  charClassName,
}: {
  target: string;
  delay: number;
  speed: number;
  charClassName?: string;
}) {
  const [current, setCurrent] = useState(" ");
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (target === " ") {
        setCurrent(" ");
        return;
      }

      const targetIdx = CHARS.indexOf(target.toUpperCase());
      if (targetIdx === -1) {
        setCurrent(target);
        return;
      }

      let i = 0;
      setIsFlipping(true);

      intervalRef.current = setInterval(() => {
        if (i >= targetIdx) {
          setCurrent(target.toUpperCase());
          setIsFlipping(false);
          if (intervalRef.current) clearInterval(intervalRef.current);
          return;
        }
        setCurrent(CHARS[i % CHARS.length]);
        i++;
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target, delay, speed]);

  return (
    <span
      className={`split-flap-char ${charClassName ?? ""} ${
        isFlipping ? "opacity-90" : ""
      }`}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={current}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: speed / 1000, ease: "easeOut" }}
          style={{ display: "inline-block", backfaceVisibility: "hidden" }}
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function SplitFlapText({
  text,
  className = "",
  charClassName = "",
  speed = 40,
  stagger = 60,
  onComplete,
}: SplitFlapTextProps) {
  const hasCalledComplete = useRef(false);

  const estimatedDuration = useCallback(() => {
    const maxFlips = Math.max(
      ...text.split("").map((ch) => {
        const idx = CHARS.indexOf(ch.toUpperCase());
        return idx === -1 ? 0 : idx;
      })
    );
    return text.length * stagger + maxFlips * speed + 200;
  }, [text, stagger, speed]);

  useEffect(() => {
    if (onComplete && !hasCalledComplete.current) {
      const timer = setTimeout(() => {
        hasCalledComplete.current = true;
        onComplete();
      }, estimatedDuration());
      return () => clearTimeout(timer);
    }
  }, [onComplete, estimatedDuration]);

  return (
    <span className={`inline-flex flex-wrap gap-[3px] ${className}`}>
      {text.split("").map((char, i) => (
        <SplitFlapChar
          key={`${i}-${char}`}
          target={char}
          delay={i * stagger}
          speed={speed}
          charClassName={charClassName}
        />
      ))}
    </span>
  );
}

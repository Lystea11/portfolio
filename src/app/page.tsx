"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ScreenWipe from "@/components/screen-wipe";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// A single split-flap cell — flips through characters then lands on target
function FlapCell({
  target,
  delay,
  flipCount,
}: {
  target: string; // final character to display ("" means blank)
  delay: number;
  flipCount: number; // how many characters to flip through before landing
}) {
  const [displayed, setDisplayed] = useState(" ");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (flipCount === 0) {
        setDisplayed(target || " ");
        return;
      }
      let i = 0;
      intervalRef.current = setInterval(() => {
        if (i >= flipCount) {
          setDisplayed(target || " ");
          if (intervalRef.current) clearInterval(intervalRef.current);
          return;
        }
        setDisplayed(CHARS[i % CHARS.length]);
        i++;
      }, 30);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target, delay, flipCount]);

  return (
    <span className="split-flap-char flex items-center justify-center font-mono font-bold">
      {displayed}
    </span>
  );
}

const NAME = "LYSANDRE";
const SUBTITLE = "IT STUDENT";
const CTA = "CLICK TO ENTER";

type CellData = {
  target: string;
  delay: number;
  flipCount: number;
  type: "name" | "subtitle" | "cta" | "bg";
};

function useGridCells(cols: number, rows: number): CellData[] {
  const [cells, setCells] = useState<CellData[]>([]);

  useEffect(() => {
    const total = cols * rows;
    const nameRow = Math.floor(rows / 2) - 1;
    const subtitleRow = nameRow + 1;
    const ctaRow = subtitleRow + 2;

    const nameStart = Math.floor((cols - NAME.length) / 2);
    const subtitleStart = Math.floor((cols - SUBTITLE.length) / 2);
    const ctaStart = Math.floor((cols - CTA.length) / 2);

    const generated: CellData[] = [];

    for (let i = 0; i < total; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;

      const nameIdx = col - nameStart;
      const isName = row === nameRow && nameIdx >= 0 && nameIdx < NAME.length;

      const subIdx = col - subtitleStart;
      const isSubtitle =
        row === subtitleRow && subIdx >= 0 && subIdx < SUBTITLE.length;

      const ctaIdx = col - ctaStart;
      const isCta = row === ctaRow && ctaIdx >= 0 && ctaIdx < CTA.length;

      // All cells start at roughly the same time with small random jitter
      const jitter = Math.random() * 300;

      if (isName) {
        const charIdx = CHARS.indexOf(NAME[nameIdx]);
        generated.push({
          target: NAME[nameIdx],
          delay: jitter,
          flipCount: charIdx >= 0 ? charIdx + 1 : 0,
          type: "name",
        });
      } else if (isSubtitle) {
        const charIdx = CHARS.indexOf(SUBTITLE[subIdx]);
        generated.push({
          target: SUBTITLE[subIdx],
          delay: jitter,
          flipCount: charIdx >= 0 ? charIdx + 1 : 0,
          type: "subtitle",
        });
      } else if (isCta) {
        const ch = CTA[ctaIdx];
        const charIdx = CHARS.indexOf(ch);
        generated.push({
          target: ch,
          delay: jitter,
          flipCount: charIdx >= 0 ? charIdx + 1 : 0,
          type: "cta",
        });
      } else {
        // Background: flip through 12-28 random chars, then go blank
        const numFlips = 12 + Math.floor(Math.random() * 16);
        generated.push({
          target: "",
          delay: jitter,
          flipCount: numFlips,
          type: "bg",
        });
      }
    }

    setCells(generated);
  }, [cols, rows]);

  return cells;
}

export default function LandingPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [wiping, setWiping] = useState(false);

  const cols = 20;
  const rows = 11;
  const cells = useGridCells(cols, rows);

  // Allow clicking after all cells have resolved
  useEffect(() => {
    // Max flip count across all text chars × 30ms interval + 300ms jitter + buffer
    const allChars = (NAME + SUBTITLE + CTA).split("");
    const maxFlips = Math.max(
      ...allChars.map((ch) => {
        const idx = CHARS.indexOf(ch);
        return idx >= 0 ? idx + 1 : 0;
      })
    );
    const readyTime = 300 + maxFlips * 30 + 500;
    const timer = setTimeout(() => setReady(true), readyTime);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    if (!ready || wiping) return;
    setWiping(true);
  };

  const handleWipeComplete = () => {
    router.push("/about");
  };

  return (
    <>
      <ScreenWipe active={wiping} onComplete={handleWipeComplete} />

      <div
        className="relative min-h-screen overflow-hidden cursor-pointer select-none flex items-center justify-center p-2"
        onClick={handleEnter}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleEnter();
        }}
        role="button"
        tabIndex={0}
      >
        <div
          className="grid gap-[3px] w-full h-[calc(100vh-16px)]"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {cells.map((cell, i) => {
            const sizeClass =
              cell.type === "name"
                ? "text-[clamp(1rem,3vw,2.5rem)]"
                : cell.type === "subtitle"
                ? "text-[clamp(0.7rem,2vw,1.6rem)]"
                : "text-[clamp(0.5rem,1.4vw,1rem)]";

            return (
              <div key={i} className={`flap-grid-cell ${sizeClass}`}>
                <FlapCell
                  target={cell.target}
                  delay={cell.delay}
                  flipCount={cell.flipCount}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

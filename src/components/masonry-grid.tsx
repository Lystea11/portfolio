"use client";

import { ReactNode, Children } from "react";

type MasonryGridProps = {
  children: ReactNode;
};

export default function MasonryGrid({ children }: MasonryGridProps) {
  const items = Children.toArray(children);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
      {items.map((item, i) => (
        <div key={i} className="break-inside-avoid mb-4 md:mb-5">
          {item}
        </div>
      ))}
    </div>
  );
}

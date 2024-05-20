"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuProps } from "./types";

export default function Menu({ items, activeMenuIndex }: MenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setHoveredIndex(activeMenuIndex);
  }, [activeMenuIndex]);

  return (
    <nav className="w-fit flex">
      {items?.map((item, i) => (
        <Link
          key={i}
          href="/"
          className="group relative p-2 h-full w-full px-4"
          onMouseEnter={() => setHoveredIndex(i)}
        // onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                className="z-0 absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="text-gray-400 z-50 relative flex w-full whitespace-nowrap group-hover:text-gray-300">
            {item.name}
          </div>
        </Link>
      ))}
    </nav>
  );
}

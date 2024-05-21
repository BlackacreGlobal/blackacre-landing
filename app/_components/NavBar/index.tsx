"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuProps } from "./types";

export default function NavBar({ items, activeMenuIndex }: MenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isInitial, setIsInitial] = useState<Boolean>(true);

  useEffect(() => {
    if (isInitial && activeMenuIndex == items.length - 1) {
      setIsInitial(false);
    } else {
      setHoveredIndex(activeMenuIndex);
    }
  }, [activeMenuIndex]);

  return (
    <nav className="w-fit flex">
      {items?.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="group relative p-2 h-full w-full px-4"
          onMouseEnter={() => setHoveredIndex(i)}
        >
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                className="z-0 absolute inset-0 h-full w-full bg-slate-800/[0.6] block rounded-3xl border border-slate-700/50"
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

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { menuItemUrls } from "@/app/_constants/menu";
import { useState, useEffect } from "react";
import { MenuProps } from "./types";
import { usePathname } from "next/navigation";

export default function NavBar({ items, activeMenuIndex }: MenuProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null | undefined>(null);
  const [isInitial, setIsInitial] = useState<Boolean>(true);
  const [pathIndex, setPathIndex] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    if (isInitial && activeMenuIndex == items.length - 1) {
      setIsInitial(false);
    } else {
      if (activeIndex !== activeMenuIndex) {
        setHoverIndex(activeMenuIndex);
      } else {
        setHoverIndex(null);
      }
    }
  }, [activeMenuIndex]);

  useEffect(() => {
    const getPathIndex = menuItemUrls.indexOf(pathname);
    setActiveIndex(getPathIndex);
    setPathIndex(getPathIndex);
  }, [pathname]);

  function onHoverOut() {
    if (activeMenuIndex !== null && activeMenuIndex !== activeIndex) {
      setHoverIndex(activeMenuIndex);
    } else {
      setHoverIndex(null);
    }
  }

  return (
    <nav className="w-fit flex">
      {items?.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="group relative p-2 h-full w-full px-4"
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={onHoverOut}
        >
          <AnimatePresence>
            {activeIndex === i && (
              <motion.span
                className="z-0 absolute inset-0 h-full w-full bg-slate-800/[0.6] block rounded-3xl border border-slate-700/50"
                layoutId="activeBackground"
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
          <AnimatePresence>
            {hoverIndex === i && (
              <motion.span
                className="z-0 absolute inset-0 h-full w-full block rounded-3xl border border-slate-700/50"
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

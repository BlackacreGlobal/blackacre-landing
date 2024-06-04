"use client";

import Image from "next/image";
import NavBar from "@/app/_components/NavBar";
import SlideMenu from "@/app/_components/SlideMenu";
import { useState, useEffect } from "react";
import { menuItems } from "@/app/_constants/menu";
import { motion } from "framer-motion";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const variants = {
    initial: { y: "0vh", scale: 1 },
    moved: { y: "20vh", scale: 1.5 },
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center h-full justify-start">
      <div className="h-[20vh] pb-4 md:mb-8 mb-4 flex-shrink-0 flex justify-end items-end">
        <motion.div
          className="h-min"
          initial="initial"
          animate={activeIndex === 0 ? "moved" : "initial"}
          variants={variants}
        >
          <Image
            className="object-contain max-w-[8rem] w-full h-auto"
            src="/images/logo.png"
            alt="BlackAcre logo"
            width={0}
            height={0}
            sizes={`${14}rem`}
          />
        </motion.div>
      </div>
      <div id="carousel-parent" className="flex-1">
        <SlideMenu items={menuItems} setVisibleIndex={setActiveIndex} />
      </div>
      <div className="flex w-full justify-center items-center md:mb-[3rem]">
        <NavBar items={menuItems} activeMenuIndex={activeIndex} />
      </div>
    </main>
  );
}

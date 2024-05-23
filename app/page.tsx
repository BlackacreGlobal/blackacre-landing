"use client";

import Image from "next/image";
import NavBar from "@/app/_components/NavBar";
import SlideMenu from "@/app/_components/SlideMenu";
import { useState } from "react";
import { menuItems } from "@/app/_constants/menu";
import { motion } from "framer-motion";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const variants = {
    initial: { x: "0%", scale: 1 },
    moved: { x: "20%", scale: 1.5 },
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center h-full justify-start">
      <div className="h-[20vh] pb-4 mb-8 flex-shrink-0 flex justify-end items-end">
        <motion.div className="h-min">
          <Image
            className="object-contain max-w-[8rem] w-full h-auto"
            src="/images/logo.png"
            alt="BlackAcre logo"
            width={0}
            height={0}
            sizes={`${14}rem`}
          // style={{
          //   position: "absolute",
          //   top: "20vh",
          //   transform: "scale(1.5)",
          // }}
          />
        </motion.div>
      </div>
      <div id="carousel-parent" className="flex-1">
        <SlideMenu items={menuItems} setVisibleIndex={setActiveIndex} />
      </div>
      <div className="flex w-full justify-center items-center mb-[3rem]">
        <NavBar items={menuItems} activeMenuIndex={activeIndex} />
      </div>
    </main>
  );
}

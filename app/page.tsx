"use client";

import Image from "next/image";
import NavBar from "@/app/_components/NavBar";
import SlideMenu from "@/app/_components/SlideMenu";
import { useState } from "react";
import { menuItems } from "@/app/_constants/menu";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <main className="flex min-h-screen w-full flex-col items-center h-full justify-start">
      <div className="h-[10rem] flex justify-center flex-1">
        <Image
          className="object-contain max-w-[10rem] w-full h-auto"
          src="/images/logo.png"
          alt="BlackAcre logo"
          width={0}
          height={0}
          sizes="12rem"
        />
      </div>
      <div id="carousel-parent" className="h-full flex-1">
        <SlideMenu items={menuItems} setVisibleIndex={setActiveIndex} />
      </div>
      <div className="flex w-full justify-end items-end pb-[10vh] pr-[12vw]">
        <NavBar items={menuItems} activeMenuIndex={activeIndex} />
      </div>
    </main>
  );
}

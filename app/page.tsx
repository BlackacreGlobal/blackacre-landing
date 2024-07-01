"use client";

import Image from "next/image";
import NavBar from "@/app/_components/NavBar";
import SlideMenu from "@/app/_components/SlideMenu";
import { useState, useEffect, useRef } from "react";
import { menuItems } from "@/app/_constants/menu";
import { motion } from "framer-motion";
import { AnimationProps } from 'framer-motion';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [gradientIntensity, setGradientIntensity] = useState<number>(0);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const variants = {
    initial: { y: "0vh", scale: 1 },
    moved: { y: "20vh", scale: 1.5 },
  };

  const flipAnimation: AnimationProps['animate'] = {
    rotateY: [0, 180, 0],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  };

  const handleWindowMouseMove = (e: MouseEvent) => {
    if (logoRef.current) {
      const { clientX, clientY } = e;
      const logoRect = logoRef.current.getBoundingClientRect();
      const logoCenterX = logoRect.left + logoRect.width / 2;
      const logoCenterY = logoRect.top + logoRect.height / 2;

      const distanceToCenter = Math.sqrt(
        Math.pow(clientX - logoCenterX, 2) + Math.pow(clientY - logoCenterY, 2)
      );

      const maxDistanceToCenter = Math.sqrt(
        Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2)
      );

      const intensity = Math.max(0, 1 - distanceToCenter / maxDistanceToCenter);
      setGradientIntensity(intensity);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center h-full justify-start">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at center, rgba(0, 0, 255, ${gradientIntensity}) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      ></div>
      <div className="h-[20vh] pb-4 md:mb-8 mb-4 flex-shrink-0 flex justify-end items-end">
        <motion.div
          ref={logoRef}
          className="relative h-min"
          initial="initial"
          animate={[activeIndex === 0 ? "moved" : "initial", flipAnimation as any]}
          variants={variants}
          style={{ perspective: "1000px" }}
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
    </main>
  );
}
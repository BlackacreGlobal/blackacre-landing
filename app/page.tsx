"use client";

import Image from "next/image";
import NavBar from "@/app/_components/NavBar";
import SlideMenu from "@/app/_components/SlideMenu";
import { useState, useEffect, useRef } from "react";
import { menuItems } from "@/app/_constants/menu";
import { motion, useAnimation, AnimationProps } from "framer-motion";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [gradientIntensity, setGradientIntensity] = useState<number>(0);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const prevMousePosRef = useRef<{ x: number; y: number } | null>(null);
  const clickStartTimeRef = useRef<number | null>(null);
  const controls = useAnimation();

  const variants = {
    initial: { y: "0vh", scale: 1 },
    moved: { y: "20vh", scale: 1.5 },
  };

  const defaultSpinAnimation: AnimationProps["animate"] = {
    rotateY: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "linear",
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

  const handleLogoMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prevMousePosRef.current) {
      const { clientX, clientY } = e;
      const { x: prevX, y: prevY } = prevMousePosRef.current;

      const dx = clientX - prevX;
      const dy = clientY - prevY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      const rotationSpeed = speed * 2;

      controls.start({
        rotateY: [0, 360],
        transition: {
          duration: Math.max(0.5, 5 - rotationSpeed / 100),
          ease: "easeOut",
        },
      });
    }
  };

  const handleLogoMouseLeave = () => {
    controls.start(defaultSpinAnimation);
  };

  const handleLogoMouseDown = () => {
    clickStartTimeRef.current = Date.now();
  };

  const handleLogoMouseUp = () => {
    if (clickStartTimeRef.current) {
      const clickDuration = Date.now() - clickStartTimeRef.current;
      const maxDuration = 1000; 
      const normalizedDuration =
        Math.min(clickDuration, maxDuration) / maxDuration;
      const spinDuration = 0.5 + normalizedDuration * 4.5; 

      controls
        .start({
          rotateY: [0, 360],
          transition: {
            duration: spinDuration,
            ease: "easeInOut",
          },
        })
        .then(() => {
          controls.start(defaultSpinAnimation);
        });

      clickStartTimeRef.current = null;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleWindowMouseMove);

    controls.start(defaultSpinAnimation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center h-full justify-start">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at center, rgba(0, 0, 255, ${gradientIntensity}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      ></div>
      <div className="h-[20vh] pb-4 mt-20 md:mb-8 mb-4 flex-shrink-0 flex justify-end items-end">
        <motion.div
          ref={logoRef}
          className="relative h-min"
          initial="initial"
          animate={controls}
          // animate={[activeIndex === 0 ? "moved" : "initial", controls as any]}
          variants={variants}
          style={{ perspective: "1000px" }}
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
          onMouseDown={handleLogoMouseDown}
          onMouseUp={handleLogoMouseUp}
        >
          <Image
            className="object-contain max-w-[16rem] w-full h-auto"
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

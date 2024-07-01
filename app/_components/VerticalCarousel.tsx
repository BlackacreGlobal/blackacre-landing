"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useElementHeight } from "@/app/_hooks/navigation";
import AboutPart1 from "@/app/_components/About/AboutPart1";
import AboutPart2 from "@/app/_components/About/AboutPart2";
import AboutPart3 from "@/app/_components/About/AboutPart3";
import { ArrowDownIcon, ArrowUpIcon } from "@/app/_components/Icons";
import PageHeading from "./PageHeading";

export default function VerticalCarousel({ }) {
  const parentHeight = useElementHeight("carousel-parent");
  const [currentPage, setCurrentPage] = useState(0);
  const [showDownButton, setShowDownButton] = useState(true);
  const [showUpButton, setShowUpButton] = useState(true);
  const offsetHeight = 0;
  const totalPages = 3;

  const handleSwipe = (direction: string) => {
    if (direction === "Up") {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      // to stay in the same page
      if (currentPage + 1 == totalPages) {
        setCurrentPage(totalPages - 1);
      }
    } else if (direction === "Down") {
      setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
      // to stay in the same page
      if (currentPage == 0) {
        setCurrentPage(0);
      }
    }
  };

  const handleButtonUP = () => {
    handleSwipe("Down");
  };
  const handleButtonDOWN = () => {
    handleSwipe("Up");
  };

  useEffect(() => {
    if (currentPage === totalPages - 1) {
      setShowDownButton(false);
    } else {
      setShowDownButton(true);
    }
    if (currentPage > 0) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }
  }, [currentPage]);

  return (
    <div
      className="relative md:overflow-hidden"
      style={{
        height: parentHeight,
      }}
    >
      <div className="flex w-full justify-center items-center bg-black">
        <PageHeading heading="" subHeading="" />
      </div>
      <div
        className="absolute md:-top-[46px] left-0 h-full w-full"
        style={{
          transform: `translateY(-${currentPage * 100}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <motion.div
          key={0}
          className="flex justify-center items-center text-center"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          style={{
            height: parentHeight - offsetHeight,
            marginTop: offsetHeight,
          }}
        >
          <AboutPart1 />
        </motion.div>
        <motion.div
          key={1}
          className="flex justify-center items-center text-center"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          style={{
            height: parentHeight - offsetHeight,
            marginTop: offsetHeight,
          }}
        >
          <AboutPart2 />
        </motion.div>
        <motion.div
          key={2}
          className="flex justify-center items-center text-center"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          style={{
            height: parentHeight - offsetHeight,
            marginTop: offsetHeight,
          }}
        >
          <AboutPart3 />
        </motion.div>
      </div>
      <div className="bottom-[4rem] right-0 left-0 absolute flex flex-col justify-center items-center">
        <button
          onClick={handleButtonUP}
          style={{
            margin: "0 auto",
            visibility: showUpButton ? "visible" : "hidden",
          }}
        >
          <ArrowUpIcon className="size-8 text-slate-500" />
        </button>
        <button
          onClick={handleButtonDOWN}
          style={{
            margin: "0 auto",
            visibility: showDownButton ? "visible" : "hidden",
          }}
        >
          <ArrowDownIcon className="size-12 text-slate-500" />
        </button>
      </div>
    </div>
  );
}

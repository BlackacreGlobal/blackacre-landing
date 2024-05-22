import React, { useState } from "react";
import { motion } from "framer-motion";
import { useElementHeight } from "@/app/_hooks/navigation";
import AboutPart1 from "@/app/_components/About/AboutPart1";
import AboutPart2 from "@/app/_components/About/AboutPart2";
import AboutPart3 from "@/app/_components/About/AboutPart3";

export default function VerticalCarousel({ }) {
  const parentHeight = useElementHeight("carousel-parent");
  const [currentPage, setCurrentPage] = useState(0);
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

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: parentHeight,
      }}
    >
      <div
        className="absolute top-0 left-0 h-full w-full"
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
            height: parentHeight,
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
            height: parentHeight,
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
            height: parentHeight,
          }}
        >
          <AboutPart3 />
        </motion.div>
      </div>
      <button
        onClick={handleButtonUP}
        style={{
          position: "absolute",
          top: 2,
          left: 0,
          right: 0,
          margin: "0 auto",
          height: 60,
          width: 60,
          borderRadius: 60,
          opacity: 0.5,
          transform: "scale(0.7)",
        }}
      >
        BUTTON UP
      </button>
      <button
        onClick={handleButtonDOWN}
        style={{
          position: "absolute",
          bottom: 2,
          left: 0,
          right: 0,
          margin: "0 auto",
          height: 60,
          width: 60,
          borderRadius: 60,
          opacity: 0.5,
          transform: "scale(0.7)",
        }}
      >
        BUTTON DOWN
      </button>
    </div>
  );
}

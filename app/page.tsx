"use client";

import Image from "next/image";
import NavBar from "@/app/_components/NavBar";
import SlideMenu from "@/app/_components/SlideMenu";
import { useState, useEffect, useRef } from "react";
import { menuItems } from "@/app/_constants/menu";
import { motion } from "framer-motion";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rotation, setRotation] = useState<any>(0);
  const [gradientIntensity, setGradientIntensity] = useState<any>(0);
  const logoRef = useRef<any>(null);

  const variants = {
    initial: { y: "0vh", scale: 1 },
    moved: { y: "20vh", scale: 1.5 },
  };

  const handleMouseMove = (e: any) => {
    const { clientX, clientY, view } = e;
    const centerX = view.innerWidth / 2;
    const centerY = view.innerHeight / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    setRotation(angle);

    if (logoRef.current) {
      const logoRect = logoRef.current.getBoundingClientRect();
      const logoCenterX = logoRect.left + logoRect.width / 2;
      const logoCenterY = logoRect.top + logoRect.height / 2;
      const distance = Math.sqrt(
        Math.pow(clientX - logoCenterX, 2) + Math.pow(clientY - logoCenterY, 2)
      );

      const maxDistance = Math.sqrt(
        Math.pow(view.innerWidth / 2, 2) + Math.pow(view.innerHeight / 2, 2)
      );
      const intensity = Math.max(0, 1 - distance / maxDistance);
      setGradientIntensity(intensity);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
          className="h-min"
          // style={{ rotate: rotation }}
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
      {/* <div className="flex w-full justify-center items-center md:mb-[3rem]">
        <NavBar items={menuItems} activeMenuIndex={activeIndex} />
      </div> */}
    </main>
  );
}


// "use client";

// import Image from "next/image";
// import NavBar from "@/app/_components/NavBar";
// import SlideMenu from "@/app/_components/SlideMenu";
// import { useState, useEffect, useRef } from "react";
// import { menuItems } from "@/app/_constants/menu";
// import { motion } from "framer-motion";

// export default function Home() {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [rotation, setRotation] = useState(0);
//   const [gradientIntensity, setGradientIntensity] = useState(0);
//   const logoRef = useRef(null);

//   const variants = {
//     initial: { y: "0vh", scale: 1 },
//     moved: { y: "20vh", scale: 1.5 },
//   };

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;

//     if (logoRef.current) {
//       const logoRect = logoRef.current.getBoundingClientRect();
//       const logoCenterX = logoRect.left + logoRect.width / 2;
//       const logoCenterY = logoRect.top + logoRect.height / 2;
//       const angle = Math.atan2(clientY - logoCenterY, clientX - logoCenterX) * (180 / Math.PI);
//       setRotation(angle);

//       const distance = Math.sqrt(
//         Math.pow(clientX - logoCenterX, 2) + Math.pow(clientY - logoCenterY, 2)
//       );

//       const maxDistance = Math.sqrt(
//         Math.pow(logoRect.width, 2) + Math.pow(logoRect.height, 2)
//       );
//       const intensity = Math.max(0, 1 - distance / (maxDistance / 2));
//       setGradientIntensity(intensity);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <main className="flex min-h-screen w-full flex-col items-center h-full justify-start">
//       <div className="h-[20vh] pb-4 md:mb-8 mb-4 flex-shrink-0 flex justify-end items-end">
//         <motion.div
//           ref={logoRef}
//           className="h-min relative"
//           style={{ rotate: rotation }}
//           initial="initial"
//           animate={activeIndex === 0 ? "moved" : "initial"}
//           variants={variants}
//         >
//           <div
//             className="absolute top-0 left-0 w-full h-full"
//             style={{
//               background: `radial-gradient(circle at center, rgba(0, 0, 255, ${gradientIntensity}) 0%, transparent 70%)`,
//               pointerEvents: 'none',
//               borderRadius: '50%',
//             }}
//           ></div>
//           <Image
//             className="object-contain max-w-[8rem] w-full h-auto"
//             src="/images/logo.png"
//             alt="BlackAcre logo"
//             width={0}
//             height={0}
//             sizes={`${14}rem`}
//           />
//         </motion.div>
//       </div>
//       <div id="carousel-parent" className="flex-1">
//         <SlideMenu items={menuItems} setVisibleIndex={setActiveIndex} />
//       </div>
//       <div className="flex w-full justify-center items-center md:mb-[3rem]">
//         <NavBar items={menuItems} activeMenuIndex={activeIndex} />
//       </div>
//     </main>
//   );
// }

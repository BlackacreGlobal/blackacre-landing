import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import SlideHeader from "@/app/_components/SlideMenu/SlideHeader";
import VerticalCarousel from "@/app/_components/VerticalCarousel";

import type { MenuItem } from "../NavBar/types";
import SlideCard from "./SlideCard";
import usePreventBodyScroll from "../usePreventBodyScroll";
import ContactPart1 from "../Contact/ContactPart1";
import PageHeading from "../PageHeading";

const dummyData = [
  {
    id: "",
  },
  {
    id: "",
  },
  {
    id: "",
  },
  {
    id: "",
  },
];

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export default function SlideMenu({
  items,
  setVisibleIndex,
}: {
  items: MenuItem[];
  setVisibleIndex: (index: number) => void;
}) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  function setIndex(index: number) {
    setVisibleIndex(index);
    setActiveIndex(index);

    // console.log("index", index);
  }

  return (
    <>
      <div className="max-w-[100dvw]">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu onWheel={onWheel}>
            <SlideCard
              itemId={items[0].id} // NOTE: itemId is required for track items
              key={items[0].id}
              nowVisible={(_id) => {
                setIndex(0);
              }}
            >
              <Content1 />
            </SlideCard>
            <SlideCard
              itemId={items[1].id} // NOTE: itemId is required for track items
              key={items[1].id}
              nowVisible={(_id) => {
                setIndex(1);
              }}
            >
              <Content2 isActive={activeIndex === 1} />
            </SlideCard>
            <SlideCard
              itemId={items[2].id} // NOTE: itemId is required for track items
              key={items[2].id}
              nowVisible={(_id) => {
                setIndex(2);
              }} 
              width
            >
              <Content3 />
            </SlideCard>

            <SlideCard
              itemId={items[3].id} // NOTE: itemId is required for track items
              key={items[3].id}
              nowVisible={(_id) => {
                setIndex(3);
              }}
            >
              <Content4 />
            </SlideCard>
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

function Content3() {
  // if there is more in future than the logic will be change then
  return (
    <div>
      <div className="relative h-[817px] overflow-hidden">
        <div className="flex items-center justify-center text-center w-full bg-black">
          <PageHeading heading="Contact" subHeading="Us" />
        </div>
        <div className="absolute left-0 h-full w-full">
          <div className="flex justify-center items-center text-center">
            {/* <div> */}
            <ContactPart1 />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="h-full my-auto flex justify-center items-center">
      <div className="h-[1.2em] relative font-inter font-extrabold text-[5rem]">
        Maker <span className="text-zinc-700">of</span> Many Memories™
      </div>
    </div>
  );
}

function Content2({ isActive }: { isActive: Boolean }) {
  return (
    <div className="flex justify-center flex-col w-full">
      <div className="h-[4rem]">
        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="slideHeader"
              animate={{
                transition: { duration: 0.1 },
              }}
              exit={{
                transition: { duration: 0.1 },
              }}
            >
              <SlideHeader header="Portfolio" subHeader="" link="/" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-[#D9D9D999] backdrop-blur-[2px] w-full grid grid-cols-4 py-[90px] px-[47px] gap-y-4 rounded-[1rem] h-[25rem]">
        {dummyData.map((data: any, idx: number) => (
          <div
            key={idx}
            className="min-h-[213px] max-w-[213px] bg-white rounded-md"
          ></div>
        ))}
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div>
      <VerticalCarousel />
    </div>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isTouchPad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchPad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

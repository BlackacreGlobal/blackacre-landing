import type { MenuItem } from "@/app/_components/NavBar/types";
import SlideHeader from "@/app/_components/SlideMenu/SlideHeader";
import VerticalCarousel from "@/app/_components/VerticalCarousel";
import { AnimatePresence, motion } from "framer-motion";

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

export const menuItemUrls = ["/", "/", "/", "/"];

export const menuItems: MenuItem[] = [
  {
    id: getId(0),
    name: "HOME",
    imgSrc: "",
    href: menuItemUrls[0],
    content: (
      <div className="h-full my-auto flex justify-center items-center">
        <div className="h-[1.2em] relative font-awakening text-[5rem]">
          REALM <span className="text-zinc-700">OF</span> TECHNOLOGY SOLUTIONS
        </div>
      </div>
    ),
  },
  {
    id: getId(1),
    name: "ABOUT US",
    imgSrc: "",
    href: menuItemUrls[1],
    content: (
      <div>
        <AnimatePresence>
          <SlideHeader
            header="Services"
            subHeader="We Offer"
            link={menuItemUrls[1]}
          />
        </AnimatePresence>
        <div className="bg-slate-700 rounded-[1rem] w-full h-[25rem]"></div>
      </div>
    ),
  },
  {
    id: getId(2),
    name: "SERVICES",
    imgSrc: "",
    href: menuItemUrls[2],
    content: (
      <div>
        <AnimatePresence>
          <SlideHeader
            header="Services"
            subHeader="We Offer"
            link={menuItemUrls[2]}
          />
        </AnimatePresence>
        <div className="bg-slate-700 rounded-[1rem] w-full h-[25rem]"></div>
      </div>
    ),
  },
  {
    id: getId(3),
    name: "CONTACT US",
    imgSrc: "",
    href: menuItemUrls[3],
    content: (
      <div>
        <VerticalCarousel />
      </div>
    ),
  },
];

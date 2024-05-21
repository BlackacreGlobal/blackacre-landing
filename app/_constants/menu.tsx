import type { MenuItem } from "@/app/_components/NavBar/types";
import SlideHeader from "@/app/_components/SlideMenu/SlideHeader";

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

export const menuItems: MenuItem[] = [
  {
    id: getId(0),
    name: "HOME",
    imgSrc: "",
    href: "/",
    content: (
      <div className="flex justify-center items-center">
        <div className="h-[1.2em] relative font-awakening text-[5rem]">
          REAL <span className="text-zinc-700">OF</span> TECHNOLOGY SOLUTIONS
        </div>
      </div>
    ),
  },
  {
    id: getId(1),
    name: "ABOUT US",
    imgSrc: "",
    href: "/about",
    content: (
      <div>
        <SlideHeader header="Services" subHeader="We Offer" />
        <div className="bg-slate-700 rounded-[1rem] w-full h-[20rem]"></div>
      </div>
    ),
  },
  {
    id: getId(2),
    name: "SERVICES",
    imgSrc: "",
    href: "/services",
    content: (
      <div>
        <SlideHeader header="Services" subHeader="We Offer" />
        <div className="bg-slate-700 rounded-[1rem] w-full h-[20rem]"></div>
      </div>
    ),
  },
  {
    id: getId(3),
    name: "CONTACT US",
    imgSrc: "",
    href: "/contact-us",
    content: (
      <div>
        <SlideHeader header="Services" subHeader="We Offer" />
        <div className="bg-slate-700 rounded-[1rem] w-full h-[20rem]"></div>
      </div>
    ),
  },
];

import type { MenuItem } from "@/app/_components/NavBar/types";
import SlideHeader from "@/app/_components/SlideMenu/SlideHeader";
import AboutPage from "@/app/_components/about";
import VerticalCarousel from "@/app/_components/VerticalCarousel";

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

export const menuItemUrls = ["/", "/about", "/services", "/contact-us"];

export const menuItems: MenuItem[] = [
  {
    id: getId(0),
    name: "HOME",
    imgSrc: "",
    href: menuItemUrls[0],
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
    href: menuItemUrls[1],
    content: (
      <div>
        <SlideHeader
          header="Services"
          subHeader="We Offer"
          link={menuItemUrls[1]}
        />
        <div className="bg-slate-700 rounded-[1rem] w-full h-[20rem]"></div>
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
        <SlideHeader
          header="Services"
          subHeader="We Offer"
          link={menuItemUrls[2]}
        />
        <div className="bg-slate-700 rounded-[1rem] w-full h-[20rem]"></div>
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
        <SlideHeader
          header="Services"
          subHeader="We Offer"
          link={menuItemUrls[3]}
        />
        <div className="bg-slate-700 rounded-[1rem] w-full h-[20rem]"></div>
      </div>
    ),
  },
  {
    id: getId(4),
    name: "CONTACT US",
    imgSrc: "",
    href: menuItemUrls[3],
    content: (
      <div>
        {/* <AboutPage /> */}
        <VerticalCarousel />
      </div>
    ),
  },
];

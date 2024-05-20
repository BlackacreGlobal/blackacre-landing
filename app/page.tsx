import Image from "next/image";
import Menu from "@/app/_components/Menu";
import type { MenuItem } from "@/app/_components/Menu/types";
import SlideMenu from "@/app/_components/SlideMenu";
import SlideHeader from "@/app/_components/SlideMenu/SlideHeader";

export default function Home() {
  const elemPrefix = "test";
  const getId = (index: number) => `${elemPrefix}${index}`;
  const menuItems: MenuItem[] = [
    {
      id: getId(0),
      name: "HOME",
      imgSrc: "",
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
      content: (
        <div>
          <SlideHeader header="Services" subHeader="We Offer" />
          <div className="bg-slate-700 rounded-[1rem] w-full h-[20rem]"></div>
        </div>
      ),
    },
  ];

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
      <div className="h-full flex-1">
        <SlideMenu items={menuItems} />
      </div>
      <div className="flex w-full justify-end items-end pb-[10vh] pr-[12vw]">
        <Menu items={menuItems} />
      </div>
    </main>
  );
}

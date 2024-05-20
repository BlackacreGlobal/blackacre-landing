import Image from "next/image";
import Menu from "@/app/_components/Menu";
import type { MenuItem } from "@/app/_components/Menu/types";

export default function Home() {
  const menuItems: MenuItem[] = [
    {
      name: "HOME",
      imgSrc: "",
    },
    {
      name: "ABOUT US",
      imgSrc: "",
    },
    {
      name: "SERVICES",
      imgSrc: "",
    },
    {
      name: "CONTACT US",
      imgSrc: "",
    },
  ];
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-24">
      <div className="absolute left-1/2 -translate-x-1/2 top-[10vh]">
        <Image
          className="object-contain max-w-[10rem] w-full h-auto"
          src="/images/logo.png"
          alt="BlackAcre logo"
          width={0}
          height={0}
          sizes="12rem"
        />
      </div>
      <h1 className="font-awakening text-[5rem]">
        REAL <span className="text-zinc-700">OF</span> TECHNOLOGY SOLUTIONS
      </h1>
      <div className="absolute bottom-[10vh] px-[10vw] flex w-full justify-end items-end">
        <Menu items={menuItems} />
      </div>
    </main>
  );
}

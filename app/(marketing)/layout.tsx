import Image from "next/image";
import NavBar from "@/app/_components/NavBar";
import { menuItems } from "@/app/_constants/menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mb-24 flex min-h-screen w-full flex-col items-center h-full justify-start">
      <div className="flex justify-center py-16">
        <Image
          className="object-contain max-w-[10rem] w-full h-auto"
          src="/images/logo.png"
          alt="BlackAcre logo"
          width={0}
          height={0}
          sizes="7rem"
        />
      </div>
      <div className="flex flex-col w-full h-max items-start justify-start flex-1">
        {children}
      </div>
      <div className="bg-slate-900/75 border border-slate-500/20 backdrop-blur-[8px] p-3 rounded-full flex w-min justify-end items-end fixed bottom-[2rem] right-1/2 translate-x-1/2 shadow-md">
        <NavBar items={menuItems} activeMenuIndex={0} />
      </div>
    </main>
  );
}

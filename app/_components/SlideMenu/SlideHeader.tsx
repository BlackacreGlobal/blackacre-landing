import { ArrowRightIcon } from "@/app/_components/Icons";

export default function SlideHeader({
  header,
  subHeader,
  link,
}: {
  header: string;
  subHeader?: string;
  link?: string;
}) {
  return (
    <div className="flex justify-between w-full py-2 px-6">
      <div className="flex gap-2 font-awakening text-[2rem]">
        <div className="text-white">{header}</div>
        <div className="text-gray-500">{subHeader}</div>
      </div>
      <div className="flex justify-center items-center gap-2 text-gray-400 hover:bg-gray-800/50 hover:text-gray-300 transition-colors h-auto rounded-lg cursor-pointer px-4">
        <div>View All</div>
        <div>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default function PageHeading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading?: string;
}) {
  return (
    <h1 className="font-inter md:text-[56px] text-[32px] font-bold text-white">
      {heading} <span className="text-gray-500">{subHeading}</span>
    </h1>
  );
}

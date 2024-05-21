export default function PageHeading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading?: string;
}) {
  return (
    <h1 className="font-awakening text-[2.5em] text-white">
      {heading} <span className="text-gray-500">{subHeading}</span>
    </h1>
  );
}

import AboutLayout from "./AboutLayout";

export default function AboutPart2({ }) {
  return (
    <AboutLayout>
      <section className="flex gap-4 my-2 flex-wrap">
        <div className="bg-slate-500 max-w-[20rem] md:h-[18rem] h-[12rem] rounded-lg flex-1 min-w-[14rem] mx-auto"></div>
        <p className="flex-1 max-md:text-base max-md:whitespace-break-spaces">
          Driven by a passion for innovation and a dedication to customer
          satisfaction, our team of experts works tirelessly to craft bespoke
          solutions that drive tangible results. Whether it's developing
          cutting-edge software, implementing robust cybersecurity measures, or
          optimizing IT infrastructure, we're here to provide unparalleled
          support every step of the way.
        </p>
      </section>
    </AboutLayout>
  );
}

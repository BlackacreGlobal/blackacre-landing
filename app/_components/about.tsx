import PageHeading from "@/app/_components/PageHeading";

export default function AboutPage({ }) {
  return (
    <div className="w-full max-w-[64rem] flex flex-col items-center mx-auto">
      <div className="mb-6">
        <PageHeading heading="ABOUT" subHeading="US" />
      </div>
      <div className="article-content text-slate-100 flex flex-col max-w-prose text-[24px] gap-6 mb-12">
        <p>
          At Blackarce, we're not just another IT company – we're your trusted
          partner in navigating the digital landscape. With a relentless
          commitment to excellence, we strive to deliver innovative solutions
          tailored to meet your unique needs.
        </p>
        <p>
          Our journey began with a vision to revolutionize the way businesses
          harness technology, and today, we stand at the forefront of the
          industry, empowering organizations of all sizes to thrive in the
          digital age.
        </p>
        {/* <section className="flex gap-4 my-2 flex-wrap"> */}
        {/*   <div className="bg-slate-500 max-w-[20rem] h-[18rem] rounded-lg flex-1 min-w-[14rem] mx-auto"></div> */}
        {/*   <p className="flex-1"> */}
        {/*     Driven by a passion for innovation and a dedication to customer */}
        {/*     satisfaction, our team of experts works tirelessly to craft bespoke */}
        {/*     solutions that drive tangible results. Whether it's developing */}
        {/*     cutting-edge software, implementing robust cybersecurity measures, */}
        {/*     or optimizing IT infrastructure, we're here to provide unparalleled */}
        {/*     support every step of the way. */}
        {/*   </p> */}
        {/* </section> */}
        <p>
          We're more than just a service provider – we're your strategic ally in
          achieving your business objectives. Join us on this journey, and
          together, let's unlock the full potential of your digital future.
        </p>
      </div>
    </div>
  );
}

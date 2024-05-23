import PageHeading from "@/app/_components/PageHeading";
import AboutLayout from "./AboutLayout";

export default function AboutPart1({ }) {
  return (
    <div className="w-full max-w-[64rem] flex flex-col items-center mx-auto">
      <AboutLayout>
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
      </AboutLayout>
    </div>
  );
}

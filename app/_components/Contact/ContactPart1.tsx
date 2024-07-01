import React from "react";
import ContactLayout from "./ContactLayout";

const row = "flex md:gap-3 gap-6 w-full max-lg:flex-col";
const input =
  "md:p-[26px] rounded-lg md:h-[20px] p-[14px] h-[43px] bg-transparent border-[1px] border-[#E2E8F0] max-md:max-w-[310px] outline-white outline-8 outline-offset-[5px]";

const ContactPart1 = () => {
  return (
    <div className="w-full max-w-[64rem] flex flex-col items-center mx-auto">
      <ContactLayout>
        <div className={row}>
          <input type="text" className={input} placeholder="First Name" />
          <input type="text" className={input} placeholder="Last Name" />
        </div>
        <div className="w-full max-w-[777px]">
          <input
            type="text"
            className={`${input} w-full`}
            placeholder="Email Address"
          />
        </div>
        <div className="w-full max-w-[777px]">
          <input
            type="text"
            className={`${input} w-full`}
            placeholder="Address"
          />
        </div>
        <div className="w-full max-w-[777px] min-h-[101px]">
          <textarea
            className="w-full max-w-[777px] bg-transparent border-[1px] border-[#E2E8F0] p-3 min-h-[101px] rounded-lg resize-y outline-white outline-8 outline-offset-[5px]"
            placeholder="Message"
          ></textarea>
        </div>
      </ContactLayout>
      <button className="w-full max-w-[102px] py-2 bg-[#161616] mt-3 text-center border border-white rounded-md hover:bg-white hover:text-black font-medium transition duration-300 ease-in-out transform hover:scale-105">
        Submit
      </button>
    </div>
  );
};

export default ContactPart1;

import Image from "next/image";
import React from "react";
import f from "@/images/new/Frame 1566662601.png";
import send from "@/images/send 1.svg";

const Contact = () => {
  return (
    <div className="">
      <div className="md:py-12 py-10 text-white mx-auto container">
        <div className="flex md:flex-row flex-col gap-6 relative items-center justify-center md:px-10 md:py-10 sm:px-3 sm:py-3 px-1 py-5 bg-[#fff]/[0.05]">
          <Image
            src={f}
            alt=""
            className="lg:w-[486px] md:w-[300px] lg:h-auto md:h-full h-auto "
          />
          <div className="w-full  -mt-5">
            <h2 className="md:text-[48px] sm:text-[24px] text-[20px] mb-12 font-semibold">
              Get in touch
            </h2>
            <form className="flex flex-col gap-6">
              <input
                className="border w-full h-[59px] bg-transparent rounded-lg px-6"
                placeholder="Full Name"
              />
              <input
                className="border w-full h-[59px] bg-transparent rounded-lg px-6"
                placeholder="Email"
              />
              <input
                className="border w-full h-[59px] bg-transparent rounded-lg px-6"
                placeholder="Company Name"
              />
              <textarea
                className="border bg-transparent focus:ring-2  focus:outline-none w-full h-[120px]  rounded-lg px-4 py-2 text-white placeholder-gray-400 shadow-sm resize-none"
                placeholder="Message here.."
                rows={4}
              />
              <button className="w-full h-[59px] bg-[#247cf8] rounded-lg px-6 flex justify-center items-center gap-[10px] ">
                SEND NOW
                <Image src={send} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

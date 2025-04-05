"use client";

import Image from "next/image";
import React from "react";
import f from "@/images/new/Frame 1566662601.png";
import send from "@/images/send 1.svg";
import design from "@/images/new/Ellipse 5.png";
import design2 from "@/images/new/Ellipse 8 (2).png";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const AboutContact = () => {
  const pathname = usePathname();

 
  const containerVariants = {
    hidden: { opacity: 0, y: 300 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative">
      <motion.div
        className={`${
          pathname == "/contact-us" ? "md:pb-0 pb-10" : "md:pb-10 pb-10"
        } text-white mx-auto container`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        <motion.div
          className="flex md:flex-row flex-col gap-6 relative items-center justify-center md:px-10 md:py-10 sm:px-3 sm:py-3 px-1 py-5 bg-[#fff]/[0.05]"
          variants={childVariants}
        >
          <Image
            src={f}
            alt=""
            className="lg:w-[486px] md:w-[300px] lg:h-auto md:h-full h-auto"
          />
          <div className="w-full">
            <motion.h2
              className="md:text-[48px] sm:text-[24px] text-[20px] mb-12 font-semibold"
              variants={childVariants}
            >
              Get in touch
            </motion.h2>
            <motion.form
              className="flex flex-col gap-6"
              variants={childVariants}
            >
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
                className="border bg-transparent focus:ring-2  focus:outline-none w-full h-[120px]  rounded-lg px-6 py-2 text-white placeholder-gray-400 shadow-sm resize-none"
                placeholder="Message here.."
                rows={4}
              />
              <button className="w-full h-[59px] bg-[#247cf8] rounded-lg px-6 flex justify-center items-center gap-[10px] ">
                SEND NOW
                <Image src={send} alt="" />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>


      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 scale-y-150   -z-10 ">
        <Image
          height={470}
          width={470}
          alt=""
          src={design2}
          className="md:w-[585px] sm:w-[435px] xs:w-[400px] w-[310px]  md:h-[630px]  h-auto z-0 md:rotate-[16deg] blur-3xl  border-red-500"
        />
      </div>


      <div className="absolute sm:-bottom-[220px] -bottom-20 md:left-[10%] left-0  -z-10 ">
        <Image
          height={470}
          width={470}
          alt=""
          src={design}
          className="md:w-[560px] sm:w-[435px] xs:w-[400px] w-[310px] md:h-[603px]  h-auto z-0 md:rotate-[15deg] blur-3xl  "
        />
      </div>
    </div>
  );
};

export default AboutContact;

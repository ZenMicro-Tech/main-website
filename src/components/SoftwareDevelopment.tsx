

"use client"
import dashboard from "@/images/dashboard 1.svg";
import voice from "@/images/voice 1.svg";
import star from "@/images/star-inside-circle 1.svg";
import Image from "next/image";
import design from "@/images/new/Ellipse 7.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SoftwareDevelopment = () => {

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

 
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });


  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative">
      <div className="container mx-auto">
        <div className="text-white md:pb-20 mb-5 overflow-hidden">

          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={headingVariants}
            className="flex justify-center items-center"
          >
            <h2 className="md:text-[48px] sm:text-[24px] text-[20px] mb-12 w-full text-center max-w-[500px] font-semibold">
              Software Development Principles
            </h2>
          </motion.div>

          <motion.div
            ref={gridRef}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.3, delayChildren: 0.2 },
              },
            }}
            className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
          >
     
            <motion.div
              variants={gridItemVariants}
              className="p-6 flex items-center justify-center flex-col text-center h-full rounded-[12px] px-4 py-6"
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
            >
              <div className="w-[86px] h-[86px] border rounded-full flex justify-center items-center mb-4">
                <Image src={dashboard} className="w-10 h-10" alt="" />
              </div>
              <h4 className="mb-6 md:text-[32px] sm:text-[20px] text-[18px]">
                User experience is of utmost importance
              </h4>
              <p>
                Good features with a bad user experience is not acceptable. The
                software must provide an enjoyable and rewarding user experience
                even when a failure has occurred.
              </p>
            </motion.div>


            <motion.div
              variants={gridItemVariants}
              className="p-6 flex items-center flex-col text-center h-full rounded-[12px] px-4 py-6"
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
            >
              <div className="w-[86px] h-[86px] border rounded-full flex justify-center items-center mb-4">
                <Image src={voice} className="w-10 h-10" alt="" />
              </div>
              <h4 className="mb-6 md:text-[32px] sm:text-[20px] text-[18px]">
                Listen to the users
              </h4>
              <p>
                We are committed to listening to and evaluating user feedback to
                ensure we are adding maximum value as quickly as possible.
              </p>
            </motion.div>


            <motion.div
              variants={gridItemVariants}
              className="p-6 flex items-center flex-col text-center h-full rounded-[12px] px-4 py-6"
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
            >
              <div className="w-[86px] h-[86px] border rounded-full flex justify-center items-center mb-4">
                <Image src={star} className="w-10 h-10" alt="" />
              </div>
              <h4 className="mb-6 md:text-[32px] sm:text-[20px] text-[18px]">
                Practice what we preach
              </h4>
              <p>
                The software we develop should be software that we use
                ourselves. This will help us better understand the experiences
                and needs of our customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>


      <div className="absolute sm:-bottom-40 -bottom-20 md:left-[10%] left-0 -z-10">
        <Image
          height={470}
          width={470}
          alt=""
          src={design}
          className="md:w-[560px] sm:w-[435px] xs:w-[400px] w-[310px] md:h-[603px] h-auto z-0 md:rotate-[15deg] blur-3xl scale-y-150"
        />
      </div>
    </div>
  );
};

export default SoftwareDevelopment;


"use client";
import Image from "next/image";
import React from "react";
import border from "@/images/border.svg";
import Link from "next/link";
import arrow from "@/images/right-arrow 1.svg";
import design from "@/images/Ellipse 2.svg";
import { motion } from "framer-motion";

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const borderVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 180, transition: { duration: 0.8 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 2.1 },
    },
  };

  const AnimatedText: React.FC<{
    text: string;
    delay: number;
    slideDirection?: number;
  }> = ({ text, delay, slideDirection = 100 }) => {
    const textVariants = {
      hidden: { opacity: 0, x: slideDirection }, 
      visible: { opacity: 1, x: 0 }, 
    };

    return (
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        {text}
      </motion.div>
    );
  };

  return (
    <div className="relative">
      <div className="container mx-auto flex items-center min-h-[calc(100vh-200px)] justify-center">
        <motion.div
          className="px-6 overflow-hidden flex flex-col items-center justify-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >

          <motion.div
            className="flex gap-4 relative items-center"
            variants={containerVariants}
          >

            <motion.h3
              className="md:text-[64px] sm:text-[24px] text-[20px] font-[700] overflow-hidden"
              variants={containerVariants}
            >
              <AnimatedText
                text="Our Business"
                delay={1.2}
                slideDirection={300}
              />
            </motion.h3>


            <motion.div
              variants={borderVariants}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <Image src={border} alt="" />
            </motion.div>

            <motion.h3
              className="md:text-[64px] sm:text-[24px] text-[20px] font-[700] overflow-hidden"
              variants={containerVariants}
            >
              <AnimatedText text="ZenMicro" delay={1.2} slideDirection={-200} />
            </motion.h3>
          </motion.div>


          <motion.p
            className="max-w-[768px] mt-6 text-center"
            variants={childVariants}
          >
            ZenMicro is on a mission to simplify cloud cost management,
            eliminating complexity and uncertainty. By delivering intelligent,
            data-driven insights, we help businesses minimize risks, avoid
            unforeseen costs, and maximize both efficiency and flexibility—so
            they can focus on what truly matters.
          </motion.p>


          <motion.div
            className="flex sm:flex-row flex-col items-center gap-[16px] mt-10"
            variants={childVariants}
          >
            <a
              href="https://app.zenmicro.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex px-6 py-3 rounded-[12px] bg-[#247CF8] font-normal text-white items-center"
            >
              Get Started
              <span>
                <Image src={arrow} alt="Arrow" className="size-6" priority />
              </span>
            </a>
            <Link
              href={"/contact-us"}
              className="flex px-6 py-3 rounded-[12px] bg-transparent font-normal text-white items-center border"
            >
              Contact Us
            </Link>
          </motion.div>

          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10">
            <Image
              height={470}
              width={470}
              alt=""
              src={design}
              className="md:w-[6310px] sm:w-[437px] xs:w-[350px] w-[310px] md:h-[681px] h-auto z-0 rotate-[43deg] blur-3xl md:scale-x-110 scale-x-100 scale-y-150"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

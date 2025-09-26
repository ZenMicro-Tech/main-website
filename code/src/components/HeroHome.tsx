

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import chart from "@/images/home/chart.png";
import globe from "@/images/home/globe.png";
import doller from "@/images/home/doller.png";
import Image from "next/image";

const HeroHome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const globeVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      rotate: 45,
      x: 0,
      y: 120,
      transition: {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      filter: "drop-shadow(0 0 25px rgba(48, 203, 161, 0.8))",

      boxShadow: "0 0 30px 10px rgba(48, 203, 161, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  const chartVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      rotate: 45,
      y: 120,
      x: 0,
      transition: {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      filter: "drop-shadow(0 0 25px rgba(254, 102, 136, 0.8))",

      boxShadow: "0 0 30px 10px rgba(254, 102, 136, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  const dollarVariants = {
    hidden: { opacity: 0, y: -200, x: 0 },
    visible: {
      opacity: 1,
      rotate: 45,
      x: -64,
      y: -70,
      transition: {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      filter: "drop-shadow(0 0 25px rgba(53, 128, 255, 0.8))",

      boxShadow: "0 0 30px 10px rgba(53, 128, 255, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  const zoomAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  return (
    <div className="">
      <div className="md:py-20 pt-10 pb-20 text-white overflow-hidden relative container mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-center md:flex-row">

          <motion.div
            className="md:order-1 order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="lg:text-[64px] md:text-[40px] sm:text-[30px] text-[24px] mb-6 homehero-title leading-[1.1] mt-10"
              variants={childVariants}
            >
              Boost Your Savings with AI-Powered Cloud Optimization
            </motion.h1>
            <motion.p variants={childVariants}>
              Is your cloud budget spiraling out of control? ZenMicro&apos;s
              AI-driven intelligence helps you cut through the noise, instantly
              surfacing the data that matters most. Gain clarity, eliminate
              waste, and optimize your cloud resources effortlessly—so every
              dollar works smarter, not harder
            </motion.p>
            <motion.div
              className="flex items-center gap-[16px] mt-10"
              variants={childVariants}
            >
              <a
                href="https://app.zenmicro.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:px-6 px-3 sm:py-3 py-2 rounded-[12px] bg-[#247CF8] font-normal text-white items-center w-max"
              >
                Try It for Free
              </a>
              <Link
                href={"/contact-us"}
                className="flex sm:px-6 px-3 sm:py-3 py-2 rounded-[12px] bg-transparent font-normal text-white items-center border w-max"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>


          <motion.div
            className="relative md:order-2 order-1"
            animate={zoomAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="flex items-center sm:gap-20 gap-10 justify-center">
   
                <motion.div
                  variants={globeVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="card sm:size-32 size-24 rotate-45 bg-[#30cba1] rounded-2xl shadow-lg flex justify-center items-center cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#30cba1] opacity-20 rounded-2xl transition-all duration-300 hover:opacity-40"></div>
                  <Image
                    src={globe || "/placeholder.svg"}
                    alt="globe"
                    className="sm:size-16 size-12 relative z-10"
                  />
                </motion.div>

   
                <motion.div
                  variants={chartVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="card sm:size-32 size-24  rotate-45 bg-[#fe6688] rounded-2xl shadow-lg flex justify-center items-center cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#fe6688] opacity-20 rounded-2xl transition-all duration-300 hover:opacity-40"></div>
                  <Image
                    src={chart || "/placeholder.svg"}
                    alt="chart"
                    className="sm:size-16 size-12 -rotate-45 relative z-10"
                  />
                </motion.div>
              </div>

    
              <motion.div
                variants={dollarVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="sm:size-32 size-24  absolute sm:-top-[33px] sm:-translate-y-1/2 sm:left-1/2 left-[132px]  ms:-translate-x-1/2 top-[10px] rotate-45 bg-[#3580ff] rounded-2xl shadow-lg flex justify-center items-center cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#3580ff] opacity-20 rounded-2xl  transition-all duration-300 hover:opacity-40"></div>
                <Image
                  src={doller || "/placeholder.svg"}
                  alt="doller"
                  className="sm:size-16 size-12 -rotate-45 relative z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

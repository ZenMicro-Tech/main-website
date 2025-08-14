

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bank1 from "@/images/bank1.svg";
import ellips2 from "@/images/ellips2.png";
import ellips3 from "@/images/Ellipse 3 (1).png";
import protection1 from "@/images/protection1.svg";
import whatshot from "@/images/whatshot.svg";
import star1 from "@/images/star1.svg";
import vector2 from "@/images/vector2.svg";

const OurValues = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
        delayChildren: 0.4, 
      },
    },
  };

  const contentVariants = (duration: number, delay: number) => ({
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration / 1000, delay, ease: "easeOut" },
    },
  });

  const designVariants = (duration: number, delay: number) => ({
    hidden: { opacity: 0, scale: 0.1 }, 
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration / 1000, delay, ease: "easeOut" },
    },
  });

  const slideFromRightVariants = (duration: number, delay: number) => ({
    hidden: { opacity: 0, x: 100 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: duration / 1000, delay, ease: "easeOut" },
    },
  });

  return (
    <div className="relative">
      <div className="container mx-auto my-auto">
        <motion.div
          className="w-full md:pt-32 pt-10 md:pb-20 pb-10 text-white h-full relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}} 
        >
          <motion.h2
            className="md:text-[48px] text-[28px] mb-[48px] w-full text-center font-semibold"
            variants={contentVariants(400,0.3)}
          >
            Our Values
          </motion.h2>

          {/* 1 */}
          <motion.div
            className="flex md:flex-row flex-col items-center flex-shrink-0 mb-[60px]"
            variants={contentVariants(600,0.6)}
            initial="hidden"
            whileInView="visible"
   
          >
            <div className="flex md:flex-row flex-col-reverse items-center gap-2 border rounded-xl z-20">
              <p className="flex-1 py-[24px] bg-[rgba(255,255,255,0.05)] px-[24px] md:rounded-tl-xl rounded-br-xl md:rounded-br-none rounded-bl-xl rou md:text-[16px] text-sm">
                We are passionate about what we do and a driving factor in why
                we will always strive to keep learning more and work toward
                mastery. We will evolve with the changing times so that we
                continue to serve you and your business.
              </p>
              <p className="h-full px-4 md:text-[40px] text-[24px] py-[10px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
                Passion
              </p>
            </div>
            <div className="border top-0 md:top-1/2 translate-y-0 md:-translate-y-1/2 left-0 md:w-[100px] h-[50px] md:h-auto"></div>
            <motion.div
              className="relative border w-[70px] h-[70px] rounded-full shrink-0 flex justify-center items-center bg-[#0F1433]"
              variants={designVariants(600,0.6)}
            >
              <Image
                height={35}
                width={35}
                alt=""
                src={whatshot || "/placeholder.svg"}
                className="w-[35px] h-[35px] z-20"
              />
              <Image
                src={vector2 || "/placeholder.svg"}
                className="absolute bottom-3 translate-y-full h-[100px] border -z-10"
                alt=""
              />
            </motion.div>
          </motion.div>

          {/* 2 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center flex-shrink-0 mb-[60px]"
            variants={contentVariants(600,0.9)}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex md:flex-row-reverse flex-col-reverse items-center gap-2 border rounded-xl z-20 bg-[#0F1433]">
              <p className="flex-1 p-[24px] bg-[rgba(255,255,255,0.05)] md:rounded-tr-xl md:rounded-bl-none rounded-bl-xl rounded-br-xl md:text-[16px] text-sm">
                The truth is always the best policy regardless of the results.
                Presenting anything less than the truth is far worse than the
                consequences of telling the truth.
              </p>
              <p className="h-full px-4 md:text-[40px] text-[24px] py-[10px] flex items-center justify-center rounded-tl-xl rounded-bl-xl">
                Honesty
              </p>
            </div>
            <div className="border top-0 md:top-1/2 md:-translate-y-1/2 left-0 md:w-[100px] h-[50px] md:h-auto"></div>
            <motion.div
              className="relative border w-[70px] h-[70px] rounded-full shrink-0 flex justify-center items-center bg-[#0F1433]"
              variants={designVariants(600,0.9)}
            >
              <Image
                height={35}
                width={35}
                alt=""
                src={bank1 || "/placeholder.svg"}
                className="w-[35px] h-[35px]"
              />
              <Image
                src={vector2 || "/placeholder.svg"}
                className="absolute bottom-0 translate-y-full h-[100px] border z-10"
                alt=""
              />
            </motion.div>
          </motion.div>

          {/* 3 */}
          <motion.div
            className="flex md:flex-row flex-col items-center flex-shrink-0 mb-[60px]"
            variants={contentVariants(600,1.2)}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex md:flex-row flex-col-reverse items-center gap-2 border rounded-xl bg-[#0F1433] z-20">
              <p className="flex-1 p-[24px] bg-[rgba(255,255,255,0.05)] md:rounded-tl-xl md:rounded-br-none rounded-br-xl rounded-bl-xl md:text-[16px] text-sm">
                We are committed to doing the right thing in all business
                endeavors. If the choice is between accelerating success and
                doing the right thing, we will chose to do the right thing every
                time.
              </p>
              <p className="h-full px-4 md:text-[40px] text-[24px] py-[10px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
                Integrity
              </p>
            </div>
            <div className="border top-0 md:top-1/2 md:-translate-y-1/2 left-0 md:w-[100px] h-[50px] md:h-auto"></div>
            <motion.div
              className="relative border w-[70px] h-[70px] rounded-full shrink-0 flex justify-center  items-center bg-[#0F1433]"
              variants={designVariants(600,1.2)}
            >
              <Image
                height={35}
                width={35}
                alt=""
                src={protection1 || "/placeholder.svg"}
                className="w-[35px] h-[35px]"
              />
              <Image
                src={vector2 || "/placeholder.svg"}
                className="absolute bottom-0 translate-y-full h-[100px] border z-10"
                alt=""
              />
            </motion.div>
          </motion.div>

          {/* 4 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center flex-shrink-0 mb-[60px] z-20 overflow-hidden"
            variants={contentVariants(800,1.5)}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex sm:flex-row-reverse flex-col-reverse items-center gap-2 border rounded-xl bg-[#0F1433] z-20">
              <p className="flex-1 p-[24px] bg-[rgba(255,255,255,0.05)] md:rounded-tr-xl md:rounded-bl-none rounded-bl-xl rounded-br-xl md:text-[16px] text-sm">
                We will prove to you that we are trustworthy. We understand this
                is earned over a long period of time and can be destroyed in an
                instant. Therefore, we will work hard to earn it and maintain
                it.
              </p>
              <p className="h-full px-4 md:text-[40px] text-[24px] py-[10px] flex items-center justify-center rounded-tl-xl rounded-bl-xl z-30">
                Trust
              </p>
            </div>
            <div className="border top-0 md:top-1/2 md:-translate-y-1/2 left-0 md:w-[100px] h-[50px] md:h-auto md:flex hidden"></div>
            <motion.div
              className="relative border w-[70px] h-[70px] rounded-full shrink-0 md:flex hidden justify-center items-center"
              variants={slideFromRightVariants(800,1.5)}
            >
              <Image
                height={35}
                width={35}
                alt=""
                src={star1 || "/placeholder.svg"}
                className="w-[35px] h-[35px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>


      <motion.div
        className="absolute top-20 lg:left-40 -z-10 xs:flex hidden"
        variants={designVariants(400,0)}
        initial="hidden"
        animate="visible"
      >
        <Image
          height={470}
          width={470}
          alt=""
          src={ellips3 || "/placeholder.svg"}
          className="md:w-[400px] sm:w-[437px] xs:w-[350px] w-[310px] md:h-[470px] h-auto z-0 rotate-[16deg] blur-3xl scale-y-150"
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-10 md:right-[20%] right-0 scale-y-150 -z-10"
        variants={designVariants(500,0)}
        initial="hidden"
        animate="visible"
      >
        <Image
          height={470}
          width={470}
          alt=""
          src={ellips2 || "/placeholder.svg"}
          className="sm:w-[435px] xs:w-[400px] w-[310px] md:h-[469px] h-auto z-0 md:rotate-[16deg] blur-3xl "
        />
      </motion.div>
    </div>
  );
};

export default OurValues;


import { motion } from "framer-motion";
import Image from "next/image";
import border from "@/images/border.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const borderVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

export default function AnimatedHeader() {
  return (
    <motion.div
      className="flex gap-4 relative items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <motion.h3
        className="md:text-[64px] sm:text-[24px] text-[20px] font-[700]"
        variants={textVariants}
      >
        Our Business
      </motion.h3>


      <motion.div variants={borderVariants} className="overflow-hidden">
        <Image src={border} alt="" />
      </motion.div>


      <motion.h3
        className="md:text-[64px] sm:text-[24px] text-[20px] font-[700]"
        variants={textVariants}
      >
        ZenMicro
      </motion.h3>
    </motion.div>
  );
}

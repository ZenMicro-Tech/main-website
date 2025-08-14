

"use client";

import iamge1 from "@/images/new/one.png";
import iamge2 from "@/images/new/two.png";
import iamge3 from "@/images/new/three.png";
import iamge4 from "@/images/new/fourth.png";
import badge from "@/images/badge-dollar 1.svg";
import analyse from "@/images/analyse 1.svg";
import growth from "@/images/growth-chart-invest 1.svg";
import globe from "@/images/globe 1.svg";
import Image from "next/image";
import Link from "next/link";
import design from "@/images/new/Ellipse 5.png";
import design3 from "@/images/Ellipse 3 (1).png";
import design4 from "@/images/Ellipse 4.svg";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      sort_des: "ZenMicro is your go-to partner in the quest for cost-efficiency",
      title: "Maximize Your Cloud Budget, Effortlessly!",
      dscription: "ZenMicro is your AI-powered partner in the quest for cost-efficiency. Say goodbye to wasteful cloud spending—our intelligent platform pinpoints optimization opportunities, ensuring every dollar works smarter. With AI-driven insights, you can harness your cloud's full potential without the complexity.",
      iamge: iamge1,
      id: "service-1"
    },
    {
      sort_des: "ZenMicro's intelligent analysis delves deep into your cloud usage patterns",
      title: "Unearth Hidden Savings",
      dscription: "ZenMicro's intelligent platform uncovers inefficiencies in your cloud usage, identifying redundant and underutilized resources. Make smarter decisions, eliminate waste, and maximize your savings—effortlessly.",
      iamge: iamge2,
      id: "service-2"
    },
    {
      sort_des: "Say hello to personalized guidance",
      title: "Smarter Savings, Tailored to You",
      dscription: "ZenMicro's AI-driven insights pinpoint exactly where you can optimize your cloud spend—whether it's leveraging reserved instances, fine-tuning instance types, or more. Get intelligent, data-backed recommendations designed to maximize your AWS savings.",
      iamge: iamge3,
      id: "service-3"
    },
    {
      sort_des: "Navigating your cloud instances has never been easier",
      title: "Unified, Conversational Cloud Insights",
      dscription: "Navigating your cloud costs has never been smarter. ZenMicro transforms how you interact with your data, replacing static dashboards with a dynamic, conversational experience. See the most relevant cost insights upfront, explore tailored recommendations, and instantly call up the data that matters most—all in a seamless, intuitive interface.",
      iamge: iamge4,
      id: "service-4"
    },
  ];

  const icons = [
    { src: badge, id: "service-1" },
    { src: analyse, id: "service-2" },
    { src: growth, id: "service-3" },
    { src: globe, id: "service-4" }
  ];

  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: (index: number) => ({ opacity: 0, x: index % 2 === 0 ? 500 : -500 }), 
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  
  const iconHoverVariants = {
    hover: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.6,
       
        repeatType: "reverse" as const
      }
    }
  };

  const iconContainerVariants = {
    hover: {
      background: [
        'rgba(113, 113, 113, 0.08)',
        'rgba(113, 113, 113, 0.2)',
        'rgba(113, 113, 113, 0.08)'
      ],
      transition: {
        duration: 1.5,

        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="relative">
       <div className="overflow-hidden relative md:py-5 pt-5 pb-8 container mx-auto">
        
        <motion.div
          className="flex md:gap-12 gap-4 mb-12 w-full justify-center items-center flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-full border relative overflow-hidden"
              variants={childVariants}
              whileHover="hover"
              onClick={() => scrollToService(icon.id)}
              style={{ cursor: 'pointer' }}
            >
              
              <motion.div
                className="absolute inset-0 rounded-full bg-[#717171]/[0.08]"
                variants={iconContainerVariants}
              />
              <motion.div variants={iconHoverVariants}>
                <Image src={icon.src} alt="" className="size-9 z-10 relative" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

       
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              id={service.id}
              className={`bg-[#717171]/[0.08] md:px-10 sm:px-5 px-1 flex flex-col md:gap-[63px] md:py-12 py-5 gap-5 rounded-[8px] ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col gap-6 items-center justify-between text-white`}
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              
              <motion.div
                className=""
                variants={imageVariants}
                custom={index}
              >
                <Image
                  src={service.iamge}
                  alt={service.title}
                  className="w-[415px] h-auto"
                />
              </motion.div>

             
              <motion.div
                className="w-full md:w-2/3 flex flex-col justify-center"
                variants={childVariants}
              >
                <h3 className="lg:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] font-bold mb-6 leading-[1.1]">
                  {service.title}
                </h3>
                <p className="mb-8">{service.dscription}</p>
                <Link className="px-6 py-3 border rounded-lg w-max" href={"#"}>
                  Learn more
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>


      
      <motion.div
        className="absolute top-0 md:left-40 left-0 -z-10"
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          height={470}
          width={470}
          alt=""
          src={design3}
          className="sm:w-[435px] xs:w-[400px] w-[310px] md:h-[469px] h-auto z-0 md:rotate-[15deg] blur-3xl sm:scale-150 scale-y-150"
        />
      </motion.div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 md:right-32 right-0 scale-y-150 -z-10"
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          height={470}
          width={470}
          alt=""
          src={design4}
          className="sm:w-[435px] xs:w-[400px] w-[310px] md:h-[469px] h-auto z-0 md:rotate-[15deg] blur-3xl border-red-500"
        />
      </motion.div>
      <motion.div
        className="absolute sm:-bottom-80 -bottom-20 md:left-[10%] left-0 -z-10"
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          height={470}
          width={470}
          alt=""
          src={design}
          className="sm:w-[435px] xs:w-[400px] w-[310px] md:h-[469px] h-auto z-0 md:rotate-[44deg] blur-3xl scale-y-150"
        />
      </motion.div>
    </div>
  );
};

export default Services;

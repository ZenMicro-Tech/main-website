



"use client";

import aws from "@/images/new/aws.png";
import globe from "@/images/new/globr.png";
import Image from "next/image";
import check from '@/images/Check Circle.png';
import { motion } from "framer-motion";

const Pricing = () => {
  const pricingPlans = [
    {
      forText: "For Individuals",
      planName: "Basic",
      description:
        "Lorem ipsum dolor sit amet dolorol sitiol conse ctetur adipiscing elit.",
      price: "$399",
      period: " /monthly",
      features: [
        "Number of Citations: 100",
        "100% Manual Submission",
        "NAP Consistency Check",
        "No Duplicate Listings",
      ],
    },
    {
      forText: "For Individuals",
      planName: "Basic",
      description:
        "Lorem ipsum dolor sit amet dolorol sitiol conse ctetur adipiscing elit.",
      price: "$399",
      period: " /monthly",
      features: [
        "Number of Citations: 100",
        "100% Manual Submission",
        "NAP Consistency Check",
        "No Duplicate Listings",
      ],
    },
    {
      forText: "For Individuals",
      planName: "Basic",
      description:
        "Lorem ipsum dolor sit amet dolorol sitiol conse ctetur adipiscing elit.",
      price: "$399",
      period: " /monthly",
      features: [
        "Number of Citations: 100",
        "100% Manual Submission",
        "NAP Consistency Check",
        "No Duplicate Listings",
      ],
    },
  ];


  const cardVariants = (index: number) => {
    switch (index) {
      case 0: 
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        };
        return {
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        };
      case 2: 
        return {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        };
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="bg-white bg-opacity-5 md:p-10 p-3">
        <div className="bg-[#000]/20 md:mx-10 py-5 mb-10">
          <div className="flex flex-col items-center text-white">
            <Image src={aws} alt="aws" />
            <div className="flex justify-center items-center flex-col mt-5">
              <h4 className="md:text-[36px] text-[24px] font-bold">
                Subscription package
              </h4>
              <p className="text-[16px]">
                Please take the package for taking following services
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-[#fff]/5 rounded-lg overflow-hidden p-6 max-w-[350px]"
                  variants={cardVariants(index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }} 
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Image src={globe} alt="globe" />
                    <div>
                      <p className="text-sm text-gray-300">{plan.forText}</p>
                      <h3 className="text-xl font-semibold text-white">
                        {plan.planName}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-300 text-sm">{plan.period}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-white mb-4">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Image src={check} alt="check circle" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                    Purchase the plan
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
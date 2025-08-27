import Pricing from "@/components/Pricing";
import Image from "next/image";
import React from "react";
import design2 from "@/images/new/Ellipse 6.png";
import design1 from "@/images/Ellipse 2.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZenMicro - Pricing, Purchase plan",
  description: "Boost your savings with ZenMicro’s cloud resource optimization",
};

const page = () => {
  return (
    <div className="relative overflow-hidden md:pt-10">
      <Pricing />

      {/* Footer design */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2    -z-10  ">
        <Image
          height={470}
          width={470}
          alt=""
          src={design2}
          className="md:w-[492x] sm:w-[435px] xs:w-[400px] w-[310px]  md:h-[456px]  h-auto z-0 md:rotate-[44deg] blur-3xl  border-red-500 scale-150"
        />
      </div>
      {/* Top design */}

      <div className="absolute top-1 left-1/2 -translate-x-1/2 -z-10">
        <Image
          height={470}
          width={470}
          alt=""
          src={design1}
          className="md:w-[6310px] sm:w-[437px] xs:w-[350px] w-[310px] md:h-[681px] h-auto  z-0 rotate-[43deg] blur-3xl md:scale-x-110 scale-x-100 scale-y-150 "
        />
      </div>
    </div>
  );
};

export default page;

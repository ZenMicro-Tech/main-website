import React from "react";
// import Contact from "../../components/Contact";
import AboutContact from "@/components/AboutContact";
import AboutUsFooter from "@/components/AboutUsFooter";
import Image from "next/image";
import design2 from "@/images/new/Ellipse 6.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZenMicro - Contact Us",
  description: "Boost your savings with ZenMicro’s cloud resource optimization",
};

const ContactUsPage = () => {
  return (
    <div className="relative overflow-hidden pt-10">
      <AboutContact />
      <AboutUsFooter />

      {/* Design middle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2    -z-10  ">
        <Image
          height={470}
          width={470}
          alt=""
          src={design2}
          className="md:w-[492x] sm:w-[435px] xs:w-[400px] w-[310px]  md:h-[456px]  h-auto z-0 md:rotate-[44deg] blur-3xl  border-red-500 scale-150"
        />
      </div>
    </div>
  );
};

export default ContactUsPage;

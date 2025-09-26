import React from "react";
// import Header from "../../components/Header";
import Hero from "../../components/Hero";
import OurValues from "../../components/OurValues";
import SoftwareDevelopment from "../../components/SoftwareDevelopment";
// import Contact from "../../components/Contact";
import AboutContact from "@/components/AboutContact";
// import Footer from "@/components/Footer";
import AboutUsFooter from "@/components/AboutUsFooter";
import Image from "next/image";
// import Footer from "../../components/Footer";
import PageTracker from "@/components/PageTracker";

import design2 from "@/images/new/Ellipse 6.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZenMicro - About Us",
  description: "Boost your savings with ZenMicro’s cloud resource optimization",
};

const AboutUsPage = () => {
  return (
    <div className="relative overflow-hidden">
      <PageTracker pageTitle="ZenMicro - About Us" />
      {/* <Header /> */}
      <Hero />
      <OurValues />
      <SoftwareDevelopment />
      <AboutContact />


      {/* Design middle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2    -z-10 ">
        <Image
          height={470}
          width={470}
          alt=""
          src={design2}
          className="md:w-[456x] sm:w-[435px] xs:w-[400px] w-[310px]  md:h-[492px]  h-auto z-0 md:rotate-[16deg] blur-3xl  border-red-500 scale-150"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;

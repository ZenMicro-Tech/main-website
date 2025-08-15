import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:pt-[64px] pt-[20px] md:pb-[48px] pb-[20px] text-white container mx-auto">
      <div className="w-full">
        <div className="flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center relative w-full">
          <Image
            className="md:w-[63px] w-[50px] md:h-[56px] h-[40px]"
            src={logo}
            alt=""
          />
          <div className="flex flex-wrap flex-shrink-0 md:gap-10 gap-3 items-center">
            <Link className="text-[20px]" href={"/"}>
              Home
            </Link>
            <Link href={"/solution-pricing"}>Solution & Pricing</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
          </div>
        </div>
        <div className="md:h-16 h-8 border-b"></div>
      </div>
    </div>
  );
};

export default Footer;

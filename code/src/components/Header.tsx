"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/images/logo.png";
import arrow from "@/images/right-arrow 1.svg";
import design from "@/images/Ellipse 2.svg";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { trackButtonClick, trackConversion } from '@/lib/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = (shouldOpen: boolean) => {
    setIsMenuOpen(shouldOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[40] w-full bg-black/30 backdrop-blur-[20px] shadow-2xl">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center md:py-6 py-4 w-full">
         
          <Link href={"/"} className="relative Logo cursor-pointer">
            <Image
              src={logo}
              alt="Logo"
              className="md:w-[63px] w-[50px] md:h-[56px] h-[40px]"
              priority
            />
          </Link>

          <button
            className="block md:hidden text-white text-2xl duration-500"
            onClick={() => toggleMenu(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

    
          <div
            ref={menuRef}
            className={`fixed md:relative top-0 left-0 md:left-auto w-[300px] md:w-auto h-screen md:h-auto bg-[#23417c] md:bg-transparent items-center text-white transform transition-all duration-500 ease-in-out md:opacity-100 md:translate-x-0 md:visible ${
              isMenuOpen
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 -translate-x-full invisible"
            } md:flex md:gap-[40px]`}
          >
            {isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex mt-5 justify-end w-full items-end pr-5"
              >
                <LiaTimesSolid className="text-xl" />
              </button>
            )}
            <div className="flex flex-col md:flex-row gap-6 md:gap-[40px] items-center w-full md:w-auto p-6 md:p-0">
              <Link
                href="/"
                className={` ${
                  isActive("/") ? "text-[#247CF8] font-bold text-[18px]" : ""
                }`}
                onClick={() => toggleMenu(false)}
              >
                Home
              </Link>
              <Link
                href="/solution-pricing"
                className={`${
                  isActive("/solution-pricing")
                    ? "text-[#247CF8] font-bold text-[18px]"
                    : ""
                }`}
                onClick={() => toggleMenu(false)}
              >
                Solution & Pricing
              </Link>
              <Link
                href="/contact-us"
                className={`${
                  isActive("/contact-us")
                    ? "text-[#247CF8] font-bold text-[18px]"
                    : ""
                }`}
                onClick={() => toggleMenu(false)}
              >
                Contact Us
              </Link>

              <a
                href="https://app.zenmicro.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:hidden px-6 py-3 rounded-[12px] bg-[#247CF8] font-normal text-white items-center"
                onClick={(e) => {
                  e.preventDefault();
                  trackButtonClick('Get Started', 'header_mobile');
                  trackConversion();
                  toggleMenu(false);
                  setTimeout(() => {
                    window.open('https://app.zenmicro.tech/', '_blank');
                  }, 100);
                }}
              >
                Get Started
                <span>
                  <Image src={arrow} alt="Arrow" className="size-6" priority />
                </span>
              </a>
            </div>
          </div>

          <a
            href="https://app.zenmicro.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 hidden rounded-[12px] bg-[#247CF8] font-normal text-white items-center ${
              pathname === "/pricing" ? "hidden" : "md:flex"
            }`}
            onClick={(e) => {
              e.preventDefault();
              trackButtonClick('Get Started', 'header_desktop');
              trackConversion();
              setTimeout(() => {
                window.open('https://app.zenmicro.tech/', '_blank');
              }, 100);
            }}
          >
            Get Started
            <span>
              <Image src={arrow} alt="Arrow" className="size-6" priority />
            </span>
          </a>
        </div>
      </div>


      <div className="absolute top-1/2 -translate-y-1/2 left-0 -z-10 md:flex hidden">
        <Image
          height={470}
          width={470}
          alt=""
          src={design}
          className="w-[470px] h-[470px] z-0 rotate-[44deg] blur-3xl"
        />
      </div>
    </div>
  );
};

export default Header;

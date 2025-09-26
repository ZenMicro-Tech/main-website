"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import f from "@/images/new/Frame 1566662601.png";
import send from "@/images/send 1.svg";
import design from "@/images/new/Ellipse 5.png";
import design2 from "@/images/new/Ellipse 8 (2).png";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { trackFormSubmission, trackContactSubmission } from '@/lib/analytics';

const AboutContact = () => {
  const pathname = usePathname();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Replace these with your EmailJS credentials
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
          console.log('SUCCESS!', result.text);
          setMessage('Message sent successfully! We\'ll get back to you soon.');
          
          // Track successful about page contact form submission
          trackFormSubmission('about_contact_form', true);
          trackContactSubmission('about_page');
          
          setFormData({
            fullName: '',
            email: '',
            companyName: '',
            message: ''
          });
        }, (error) => {
          console.log('FAILED...', error.text);
          setMessage('Failed to send message. Please try again later.');
          
          // Track failed form submission
          trackFormSubmission('about_contact_form', false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
 
  const containerVariants = {
    hidden: { opacity: 0, y: 300 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative">
      <motion.div
        className={`${
          pathname == "/contact-us" ? "md:pb-0 pb-10" : "md:pb-10 pb-10"
        } text-white mx-auto container`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        <motion.div
          className="flex md:flex-row flex-col gap-6 relative items-center justify-center md:px-10 md:py-10 sm:px-3 sm:py-3 px-1 py-5 bg-[#fff]/[0.05]"
          variants={childVariants}
        >
          <Image
            src={f}
            alt=""
            className="lg:w-[486px] md:w-[300px] lg:h-auto md:h-full h-auto"
          />
          <div className="w-full">
            <motion.h2
              className="md:text-[48px] sm:text-[24px] text-[20px] mb-12 font-semibold"
              variants={childVariants}
            >
              Get in touch
            </motion.h2>
            <motion.form
              ref={form}
              className="flex flex-col gap-6"
              variants={childVariants}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="border w-full h-[59px] bg-transparent rounded-lg px-6 text-white placeholder-gray-400"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border w-full h-[59px] bg-transparent rounded-lg px-6 text-white placeholder-gray-400"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="border w-full h-[59px] bg-transparent rounded-lg px-6 text-white placeholder-gray-400"
                placeholder="Company Name"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="border bg-transparent focus:ring-2  focus:outline-none w-full h-[120px]  rounded-lg px-6 py-2 text-white placeholder-gray-400 shadow-sm resize-none"
                placeholder="Message here.."
                rows={4}
                required
              />
              
              {message && (
                <div className={`text-center p-3 rounded-lg ${
                  message.includes('successfully') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {message}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full h-[59px] rounded-lg px-6 flex justify-center items-center gap-[10px] transition-colors ${
                  isLoading 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-[#247cf8] hover:bg-[#1e6ad6]'
                }`}
              >
                {isLoading ? 'SENDING...' : 'SEND NOW'}
                {!isLoading && <Image src={send} alt="" />}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>


      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 scale-y-150   -z-10 ">
        <Image
          height={470}
          width={470}
          alt=""
          src={design2}
          className="md:w-[585px] sm:w-[435px] xs:w-[400px] w-[310px]  md:h-[630px]  h-auto z-0 md:rotate-[16deg] blur-3xl  border-red-500"
        />
      </div>


      <div className="absolute sm:-bottom-[220px] -bottom-20 md:left-[10%] left-0  -z-10 ">
        <Image
          height={470}
          width={470}
          alt=""
          src={design}
          className="md:w-[560px] sm:w-[435px] xs:w-[400px] w-[310px] md:h-[603px]  h-auto z-0 md:rotate-[15deg] blur-3xl  "
        />
      </div>
    </div>
  );
};

export default AboutContact;

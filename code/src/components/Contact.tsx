"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import f from "@/images/new/Frame 1566662601.png";
import send from "@/images/send 1.svg";
import emailjs from '@emailjs/browser';

const Contact = () => {
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
          setFormData({
            fullName: '',
            email: '',
            companyName: '',
            message: ''
          });
        }, (error) => {
          console.log('FAILED...', error.text);
          setMessage('Failed to send message. Please try again later.');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <div className="">
      <div className="md:py-12 py-10 text-white mx-auto container">
        <div className="flex md:flex-row flex-col gap-6 relative items-center justify-center md:px-10 md:py-10 sm:px-3 sm:py-3 px-1 py-5 bg-[#fff]/[0.05]">
          <Image
            src={f}
            alt=""
            className="lg:w-[486px] md:w-[300px] lg:h-auto md:h-full h-auto "
          />
          <div className="w-full  -mt-5">
            <h2 className="md:text-[48px] sm:text-[24px] text-[20px] mb-12 font-semibold">
              Get in touch
            </h2>
            <form 
              ref={form}
              className="flex flex-col gap-6" 
              suppressHydrationWarning={true}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="border w-full h-[59px] bg-transparent rounded-lg px-6 text-white placeholder-gray-400"
                placeholder="Full Name"
                suppressHydrationWarning={true}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border w-full h-[59px] bg-transparent rounded-lg px-6 text-white placeholder-gray-400"
                placeholder="Email"
                suppressHydrationWarning={true}
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="border w-full h-[59px] bg-transparent rounded-lg px-6 text-white placeholder-gray-400"
                placeholder="Company Name"
                suppressHydrationWarning={true}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="border bg-transparent focus:ring-2  focus:outline-none w-full h-[120px]  rounded-lg px-4 py-2 text-white placeholder-gray-400 shadow-sm resize-none"
                placeholder="Message here.."
                rows={4}
                suppressHydrationWarning={true}
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
                suppressHydrationWarning={true}
              >
                {isLoading ? 'SENDING...' : 'SEND NOW'}
                {!isLoading && <Image src={send} alt="" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

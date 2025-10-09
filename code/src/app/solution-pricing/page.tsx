"use client";

import Image from 'next/image';
import { useState } from "react";
import { trackButtonClick, trackConversion } from '@/lib/analytics';

export default function SolutionPricing() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>("");

  const openModal = (imageSrc: string, altText: string) => {
    setModalImage(imageSrc);
    setModalAlt(altText);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt("");
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Solution & Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proactive cloud cost management with AI-driven precision
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left side: Graph and text below it */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <Image 
                  src="/CloudSpendGrowth.png" 
                  alt="Cloud Spending Growth Chart" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 2016, global cloud spending has surged by more than 300%, with forecasts projecting it will reach $825 billion in 2025. The message is clear: effective cost management has never been more critical.
              </p>
            </div>

            {/* Right side: Why It Matters */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why It Matters?
              </h2>
              <div className="space-y-6 max-w-md mx-auto">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Spending is Accelerating</h3>
                  <p className="text-gray-700">2025 projections show global cloud spend rising to ~$720–825B.</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-900 mb-4">Waste is Significant</h3>
                  <p className="text-gray-700">On average, one-third of cloud budgets remain unused or under-optimized.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">FinOps is Paying Off</h3>
                  <p className="text-gray-700">Organizations leveraging FinOps strategies and AI-driven tools are reducing costs by up to 40%.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ZenMicro Difference - moved to bottom of hero section */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">The ZenMicro Difference</h3>
            <p className="text-lg">
              With ZenMicro, you&apos;re not reacting to overspend after the fact — you&apos;re proactively controlling, predicting, and optimizing with data-backed precision.
            </p>
          </div>
        </div>
      </section>

      {/* What ZenMicro Offers Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What ZenMicro Offers
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            A unified platform delivering full visibility and intelligent control over your cloud investments.
          </p>

          {/* Actionable Insights Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Actionable Insights via Prompts
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI assistant puts clarity at your fingertips. Simply ask questions like:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    &quot;Show me my top 10 instances by region&quot;
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    &quot;Group instances by type and usage&quot;
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    &quot;Recommend right-sizing opportunities based on performance&quot;
                  </li>
                </ul>
                <p className="text-lg text-gray-700 mt-6">
                  Manage workloads with ease — allocate resources, retire idle instances, or adjust tiers — all from a single intelligent interface.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div 
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal("/ZenMicro-Chat.png", "ZenMicro AI Chat Interface")}
                >
                  <Image 
                    src="/ZenMicro-Chat.png" 
                    alt="ZenMicro AI Chat Interface" 
                    width={800}
                    height={550}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AI-Powered Infrastructure Assistant Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  AI-Powered Infrastructure Assistant
                </h3>
                <p className="text-lg text-gray-700">
                  From EC2 management to S3 operations and IAM administration, our AI assistant works as your on-demand cloud engineer. Just type a request and let automation handle the rest.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div 
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal("/ZenMicro-Welcome.png", "ZenMicro Welcome Dashboard")}
                >
                  <Image 
                    src="/ZenMicro-Welcome.png" 
                    alt="ZenMicro Welcome Dashboard" 
                    width={800}
                    height={550}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl text-center">
            <p className="text-lg">
              Together, these features stop budget leaks before they start, ensuring every dollar is invested purposefully. This isn&apos;t reactive cost cutting; it&apos;s AI-enhanced FinOps.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that matches your scale and start optimizing today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
              </div>
              <p className="text-gray-700 mb-6">10,000 tokens</p>
              <a 
                href="https://app.zenmicro.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors inline-block text-center"
                onClick={(e) => {
                  e.preventDefault();
                  trackButtonClick('Get Started', 'pricing_free');
                  trackConversion();
                  setTimeout(() => {
                    window.open('https://app.zenmicro.tech/', '_blank');
                  }, 100);
                }}
              >
                Get Started
              </a>
            </div>

            {/* Basic Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$5</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-700 mb-6">500,000 tokens / month</p>
              <a 
                href="https://app.zenmicro.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                onClick={(e) => {
                  e.preventDefault();
                  trackButtonClick('Get Started', 'pricing_basic');
                  trackConversion();
                  setTimeout(() => {
                    window.open('https://app.zenmicro.tech/', '_blank');
                  }, 100);
                }}
              >
                Get Started
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border-2 border-blue-500 rounded-xl p-8 text-center hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$15</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-700 mb-6">2,000,000 tokens / month</p>
              <a 
                href="https://app.zenmicro.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                onClick={(e) => {
                  e.preventDefault();
                  trackButtonClick('Get Started', 'pricing_premium');
                  trackConversion();
                  setTimeout(() => {
                    window.open('https://app.zenmicro.tech/', '_blank');
                  }, 100);
                }}
              >
                Get Started
              </a>
            </div>

            {/* Business Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$35</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-700 mb-6">5,000,000 tokens / month</p>
              <a 
                href="https://app.zenmicro.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                onClick={(e) => {
                  e.preventDefault();
                  trackButtonClick('Get Started', 'pricing_business');
                  trackConversion();
                  setTimeout(() => {
                    window.open('https://app.zenmicro.tech/', '_blank');
                  }, 100);
                }}
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700">
              Choose the right plan, easily scale up or down as your usage evolves, and always stay in control of your cloud costs—without compromise.
            </p>
          </div>
        </div>
      </section>


      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              ×
            </button>
            <Image 
              src={modalImage} 
              alt={modalAlt} 
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

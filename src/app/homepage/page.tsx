"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const HomePage: React.FC = () => {
  const carouselData = [
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "House Construction",
      smallHeading: "Building Your Vision",
      mainHeading: "Expert Construction",
      subHeading: "Solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Building Construction",
      smallHeading: "Professional Excellence",
      mainHeading: "Quality Building",
      subHeading: "Services"
    },
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern House",
      smallHeading: "Innovation & Design",
      mainHeading: "Modern Architecture",
      subHeading: "Projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Carousel Section */}
      <div className="relative h-[350px] sm:h-[500px] bg-gray-900">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {carouselData.map((slide, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <div className="relative h-full w-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-60">
                    <Image 
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      width={2070}
                      height={1380}
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 flex items-center h-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Side - Call to Action */}
                        <div className="text-white space-y-4 sm:space-y-6 px-4 sm:pl-16 text-center lg:text-left">
                          <div>
                            <h3 className="text-sm sm:text-base font-medium text-gray-300 uppercase tracking-wide mb-2 sm:mb-3">
                              {slide.smallHeading}
                            </h3>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                              {slide.mainHeading}
                              <span className="block text-white">{slide.subHeading}</span>
                            </h1>
                          </div>
                          
                          {/* Contact Button */}
                          <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
                            Contact Us
                            <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>

                        {/* Right Side - Empty for balance */}
                        <div className="hidden lg:flex justify-center items-center">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation Buttons */}
          <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-full border-0 text-white shadow-lg" />
          <CarouselNext className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-full border-0 text-white shadow-lg" />
        </Carousel>
      </div>

      {/* Info Section */}
      <div className="flex items-center py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Construction Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Construction Site" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                width={2070}
                height={1380}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Small Heading */}
            <h3 className="text-base sm:text-lg font-medium text-blue-600 uppercase tracking-wide mb-2">
              Explore the Features
            </h3>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Full Project Management
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Streamline your construction projects with our comprehensive management solution. 
              From initial planning to final completion, we provide the tools and expertise 
              needed to deliver projects on time and within budget. Our platform integrates 
              scheduling, resource allocation, and real-time progress tracking to ensure 
              seamless project execution.
            </p>

            {/* Button */}
            <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Read More
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Our Clients</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">Trusted by leading brands worldwide</p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Top Row - 4 Images */}
            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Client 1" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={774}
                  height={193}
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 2" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={2126}
                  height={1417}
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 3" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={2126}
                  height={1417}
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 4" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={2126}
                  height={1417}
                />
              </div>
            </div>
          </div>

          {/* Bottom Row - 4 Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Client 5" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={774}
                  height={193}
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 6" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={2126}
                  height={1417}
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 7" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={2126}
                  height={1417}
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Client 8" 
                  className="w-full h-12 sm:h-16 lg:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  width={774}
                  height={193}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Achievement Section */}
      <div className="bg-white flex items-center py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Our Achievement</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Milestones that define our success</p>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Achievement 1 */}
            <div className="group relative p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">34</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-1">Design</h3>
                </div>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="group relative p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">156</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-1">Construction</h3>
                </div>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="group relative p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">89</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-1">Renovation</h3>
                </div>
              </div>
            </div>

            {/* Achievement 4 */}
            <div className="group relative p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">245</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-1">Management</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* First Section - Build with Wilmër */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Build with Wilmër</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Get Wilmër and discover streamlined website construction today! Powerful elements, tons of flexible layouts and more inside.
              </p>
              <div className="text-gray-300 space-y-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Mon - Sat 8:00 - 17:30</p>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p>Sunday - CLOSED</p>
                </div>
              </div>
            </div>

            {/* Second Section - Our Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Chemical Engineering Projects
                </li>
                <li className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Mining Engineering Construction
                </li>
                <li className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Engineering Welding Engineering
                </li>
                <li className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Welding Engineering
                </li>
                <li className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Space Program XYZ
                </li>
              </ul>
            </div>

            {/* Third Section - Office in New York */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-white">Office in New York</h3>
              </div>
              <div className="text-gray-300 space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="font-semibold">Wilmër Construction Inc.</p>
                    <p>1234 Broadway Avenue</p>
                    <p>Manhattan, NY 10001</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p><span className="text-blue-400">Phone:</span> +1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p><span className="text-blue-400">Email:</span> info@wilmerconstruction.com</p>
                </div>
              </div>
            </div>

            {/* Fourth Section - Our Branches */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Branches</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white">Mumbai Branch</h4>
                  <p className="text-gray-300 text-sm">456 Marine Drive, Colaba</p>
                  <p className="text-gray-300 text-sm">Mumbai, Maharashtra 400001</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Delhi Branch</h4>
                  <p className="text-gray-300 text-sm">789 Connaught Place</p>
                  <p className="text-gray-300 text-sm">New Delhi, Delhi 110001</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">Bangalore Branch</h4>
                  <p className="text-gray-300 text-sm">321 MG Road, Brigade Road</p>
                  <p className="text-gray-300 text-sm">Bangalore, Karnataka 560001</p>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © 2024 Wilmër Construction. All rights reserved.
              </p>
              <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 
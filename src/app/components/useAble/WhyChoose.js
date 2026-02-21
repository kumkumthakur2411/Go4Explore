"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const features = [
  {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F1.png&w=96&q=75",
    title: "Handpicked Stays with Friendly Hosts",
    desc: "All our accommodations are verified, pre-checked for quality and hygiene.",
  },
  {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F2.png&w=96&q=75",
    title: "2500+ Trips Hosted PAN India & Abroad",
    desc: "From group trips to custom tours exploring diverse landscapes, cultures & lots more.",
  },
  {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F3.png&w=96&q=75",
    title: "Solo Travel Friendly Trips for All",
    desc: "We provide absolutely safe and comfortable environment for solo travellers.",
  },
  {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F4.png&w=96&q=75",
    title: "Trip Itineraries Curated with Love",
    desc: "Trip plans handcrafted by destination experts for hassle-free travel experience.",
  },
  {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F5.png&w=96&q=75",
    title: "8 Years of On-Ground Experience",
    desc: "Being in Tourism industry for last 8 years, we put our heart in planning your trips.",
  },
  {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F6.png&w=96&q=75",
    title: "Rated 4.8 Stars on Google Reviews",
    desc: "Our growth lies in the memorable travel experiences we provide to our travellers.",
  },
    {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F7.png&w=96&q=75",
    title: "Rated 4.8 Stars on Google Reviews",
    desc: "Our growth lies in the memorable travel experiences we provide to our travellers.",
  },
    {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F8.png&w=96&q=75",
    title: "Rated 4.8 Stars on Google Reviews",
    desc: "Our growth lies in the memorable travel experiences we provide to our travellers.",
  },
    {
    icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fwhy%2F9.png&w=96&q=75",
    title: "Rated 4.8 Stars on Google Reviews",
    desc: "Our growth lies in the memorable travel experiences we provide to our travellers.",
  },
];

export default function WhyChoose() {
  return (
<section className="w-full bg-white  p-6 ">
  <div className="w-full md:w-[90%] max-w-7xl mx-auto md:px-4">
    
    {/* Title - Added mb-16 for better separation from the grid */}
    <h2 className="text-center text-lg md:text-2xl font-extrabold text-[#2755B0] mb-3 md:mb-16">
      Why Choose Go4Explore?
    </h2>

    {/* Grid - Increased gap for a cleaner look */}
    <div className="hidden lg:grid lg:grid-cols-3 gap-x-15 gap-y-7">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-start group">
          
          {/* Icon Container - Fixed size with margin bottom */}
          <div className="w-16 h-16 mb-5 flex items-center justify-start  
           hover:scale-150 transition duration-300 ">
            <Image
              src={item.icon}
              alt={item.title}
              width={60}
              height={60}
              className="object-contain transition-transform duration-300 group-hover:scale-70"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h3 className="font-bold text-m text-gray-900 ">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm ">
              {item.desc}
            </p>
          </div>

        </div>
      ))}
    </div>
      <div className="lg:hidden">
          <Swiper
            modules={[Pagination ]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            
          >
            {features.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center px-6 pb-10">
                  
                  <div className="w-16 h-16 mb-5 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-base text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-900 text-[11px] font-normal ">
                    {item.desc}
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

    
  </div>
</section>
  );
}

"use client";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const destinations_row1 = [
  { name: "ALmaty", src: "https://go4explore.com/assets/img/international/i1.webp" },
  { name: "Autraila", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "Bhutan", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "Georgia", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "Italy", src: "https://go4explore.com/assets/img/international/i5.webp" },
  { name: "Japan", src: "https://go4explore.com/assets/img/international/i6.webp" },
  { name: "Kenya", src: "https://go4explore.com/assets/img/international/i7.webp" },
  { name: "Kyrgstan", src: "https://go4explore.com/assets/img/international/i8.webp" },
  { name: "Maldives", src: "https://go4explore.com/assets/img/international/i9.webp" },
  { name: "Georgia", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "Italy", src: "https://go4explore.com/assets/img/international/i5.webp" },
  { name: "Japan", src: "https://go4explore.com/assets/img/international/i6.webp" },
  { name: "Kenya", src: "https://go4explore.com/assets/img/international/i7.webp" },
  { name: "Kyrgstan", src: "https://go4explore.com/assets/img/international/i8.webp" },
  { name: "Maldives", src: "https://go4explore.com/assets/img/international/i9.webp" },

];
export default function CorporateDestinationsSection() {
  return (
    <section className="w-full flex justify-center py-2 px-4 md:px-20"> 
      {/* 1. Added mx-auto and max-w-7xl to fix zoom-out issues 
         2. Removed fixed vh height to prevent content cutoff on zoom-in
      */}
      <div className="w-full max-w-7xl mx-auto bg-white shadow-[0_0_50px_-15px_rgba(0,0,0,0.2)] rounded-2xl py-8 px-4 md:p-10">
        
        <div className="w-full flex justify-center 
        lg:justify-between items-center mb-10 px-2">        
          <h1 className="text-xl md:text-3xl font-black text-[#2556B0] flex items-center gap-2">
            Trending Destinations
            <Image 
              src="https://go4explore.com/assets/img/trending-places/icon.png" 
              alt="icon" width={28} height={28} 
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </h1>

          <div className="hidden md:flex gap-3">
            <div className="swiper-prev bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition shadow-md">
              <IoIosArrowBack size={20}/>
            </div>
            <div className="swiper-next bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition shadow-md">
              <IoIosArrowForward size={20}/>
            </div>
          </div>
        </div>

        <CorporateDestinationsSwiper />
      </div>
    </section>
  );
}






function CorporateDestinationsSwiper() {
  return (
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  loop={true}
  navigation={{
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  }}
  breakpoints={{
    // MOBILE: Increased spacing to prevent overlapping circles
    0: { 
      slidesPerView: 3.7, // Reduced slightly so the side-items "peek" in
      spaceBetween: 10    // Increased spacing for mobile
    },

    // TABLET: Moderate spacing
    768: { 
      slidesPerView: 4, 
      spaceBetween: 10 
    },

    // DESKTOP: Decreased spacing to keep the 8 items tight and aligned
    1024: { 
      slidesPerView: 8, 
      spaceBetween: 10 
    },

    // LARGE DESKTOP / ZOOM OUT: Very tight spacing for maximum items
    1440: { 
      slidesPerView: 8, 
      spaceBetween: 10 
    },
  }}
  className="w-full"
>
      {destinations_row1.map((item1, index) => {
       
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-8 py-4">
              {/* Individual Item Component (Reuse this for Row 1 and Row 2) */}
              {[item1].map((item, i) => (
                item && (
                  <div key={i} className="group cursor-pointer flex flex-col items-center">
                    {/* Fixed aspect ratio container for circles */}
                    <div className="relative aspect-[2/3] w-full max-w-[140px] rounded-full overflow-hidden shadow-md transition-all duration-300 ring-0 group-hover:ring-4 ring-blue-100">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="mt-3 font-medium text-sm md:text-base text-gray-900 group-hover:text-[#2556B0] transition-colors">
                      {item.name}
                    </p>
                  </div>
                )
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

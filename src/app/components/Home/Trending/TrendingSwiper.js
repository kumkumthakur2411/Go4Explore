"use client";

import Image from "next/image";
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

const destinations_row2 = [
  { name: "Chopta", src: "https://go4explore.com/assets/img/domestic/d1.webp" },
  { name: "Coorg", src: "https://go4explore.com/assets/img/domestic/d2.webp" },
  { name: "Jaisalmer", src: "https://go4explore.com/assets/img/domestic/d3.webp" },
  { name: "Jibhi", src: "https://go4explore.com/assets/img/domestic/d4.webp" },
  { name: "Kasol", src: "https://go4explore.com/assets/img/domestic/d5.webp" },
  { name: "Kaziranga", src: "https://go4explore.com/assets/img/domestic/d6.webp" },
  { name: "Manali", src: "https://go4explore.com/assets/img/domestic/d7.webp" },
    { name: "Chopta", src: "https://go4explore.com/assets/img/domestic/d1.webp" },
  { name: "Coorg", src: "https://go4explore.com/assets/img/domestic/d2.webp" },
  { name: "Jaisalmer", src: "https://go4explore.com/assets/img/domestic/d3.webp" },
  { name: "Jibhi", src: "https://go4explore.com/assets/img/domestic/d4.webp" },
  { name: "Kasol", src: "https://go4explore.com/assets/img/domestic/d5.webp" },
  { name: "Kaziranga", src: "https://go4explore.com/assets/img/domestic/d6.webp" },
  { name: "Manali", src: "https://go4explore.com/assets/img/domestic/d7.webp" },
];
export default function TrendingSwiper() {
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
        const item2 = destinations_row2[index];
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-8 py-4">
              {/* Individual Item Component (Reuse this for Row 1 and Row 2) */}
              {[item1, item2].map((item, i) => (
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

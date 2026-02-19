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
      spaceBetween={15}
      // Increased space for better mobile clarity
      loop={true}
      navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      }}
      // RESPONSIVE LOGIC
      breakpoints={{
        // Mobile (Portrait)
        0: {
          slidesPerView: 3.5,
          spaceBetween: 8,
        },
        // Tablet (iPad)
        768: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        // Desktop
        1024: {
          slidesPerView: 8,
          spaceBetween: 4,
        },
      }}
      className="w-full"
    >
      {destinations_row1.map((item1, index) => {
        const item2 = destinations_row2[index];

        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-4 md:gap-8 py-2">
              {/* Row 1 */}
              
              {/* Added 'group' class here so children can react to hovering over this div */}
<div className="flex flex-col items-center gap-1 md:gap:3 group cursor-pointer">
  
  <div className="relative w-18 h-25 md:w-31 md:h-44 rounded-full overflow-hidden shadow-lg 
   transition-all duration-300">
    <Image
      src={item1.src}
      alt={item1.name}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>

  <p className="font-medium pt-2 text-xs md:text-base text-center truncate w-full text-zinc-800
  transition-colors duration-300 ">
    {item1.name}
  </p>
</div>

              {/* Row 2 */}
              {item2 && (
                <div className="flex flex-col items-center gap-1 md:gap:3 group cursor pointer">
                  <div className="relative w-18 h-25 md:w-31  md:h-44 rounded-full overflow-hidden shadow-lg 
                  transition-all duration-300 ">
                    <Image
                      src={item2.src}
                      alt={item2.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <p className="font-medium pt-2 text-xs md:text-base text-center truncate w-full text-zinc-800
                  transition-colors duration-300 ">
                    {item2.name}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

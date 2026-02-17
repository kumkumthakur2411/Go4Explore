"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const International_destinations_row1 = [
  { name: "a", src: "https://go4explore.com/assets/img/international/i1.webp" },
  { name: "b", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "c", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "d", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "e", src: "https://go4explore.com/assets/img/international/i5.webp" },
];

const International_destinations_row2 = [
  { name: "m", price:"20000", src: "https://go4explore.com/assets/img/international/i7.webp" },
  { name: "n",  price:"20000",src: "https://go4explore.com/assets/img/international/i8.webp" },
  { name: "o", price:"20000", src: "https://go4explore.com/assets/img/international/i9.webp" },
  { name: "p",price:"20000", src: "https://go4explore.com/assets/img/international/i10.webp" },
  { name: "q",price:"20000" ,src: "https://go4explore.com/assets/img/international/i11.webp" },
];

export default function InternationalSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={2}
      slidesPerView={3}
      navigation={{
        nextEl: ".international-swiper-next",
        prevEl: ".international-swiper-prev",
      }}

      loop={true}
    >
      {International_destinations_row1.map((item1, index) => {
        const item2 = International_destinations_row2[index];

        return (
<SwiperSlide key={index}>
  <div className="flex flex-col items-center justify-between h-80 gap-4">

    {/* Row 1 */}
    <div className="group relative w-[95%] h-1/2 rounded-xl overflow-hidden shadow-lg cursor-pointer">

      {/* Image */}
      <Image
        src={item1.src}
        alt={item1.name}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>

      {/* Top Text */}
              <div className="absolute bottom-3 left-3  z-10">
          <div className="flex flex-col ">
         <h4 className="text-white font-semibold text-m">{item2.name}</h4> 
          <p className="text-white font-semibold text-xs ">{item2.price}</p>
          </div>
          
        </div>


      {/* Arrow Icon Top Right */}
      <div className="absolute top-3 right-3  border border-white 
      rounded-full w-5 h-5 flex items-center justify-center text-white text-sm z-10 
      hover:bg-white hover:text-red-700 transition">
        ↗
      </div>
    </div>

    {/* Row 2 */}
    {item2 && (
      <div className="group relative w-[95%] h-1/2 rounded-xl overflow-hidden shadow-lg cursor-pointer">

        <Image
          src={item2.src}
          alt={item2.name}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>

        <div className="absolute bottom-3 left-3  z-10">
          <div className="flex flex-col ">
         <h4 className="text-white font-semibold text-m">{item2.name}</h4> 
          <p className="text-white font-semibold text-xs ">{item2.price}</p>
          </div>
          
        </div>

              <div className="absolute top-3 right-3  border border-white 
      rounded-full w-5 h-5 flex items-center justify-center text-white text-sm z-10 
      hover:bg-white hover:text-red-700 transition">  ↗
        </div>
      </div>
    )}

  </div>
</SwiperSlide>


        );
      })}
    </Swiper>

  );
}
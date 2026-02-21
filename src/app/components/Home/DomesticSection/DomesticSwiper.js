"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { MdArrowOutward } from "react-icons/md";
import "swiper/css/pagination";

const Domestic_destinations_row1 = [
  { name: "Manali", price: "₹18,999", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/home-trips/gujarat.webp" },
  { name: "Goa", price: "₹15,999", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "Kashmir", price: "₹22,999", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "Rajasthan", price: "₹19,999", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "Kerala", price: "₹17,999", src: "https://go4explore.com/assets/img/international/i5.webp" },
  { name: "Manali", price: "₹18,999", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/home-trips/gujarat.webp" },
  { name: "Goa", price: "₹15,999", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "Kashmir", price: "₹22,999", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "Rajasthan", price: "₹19,999", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "Kerala", price: "₹17,999", src: "https://go4explore.com/assets/img/international/i5.webp" },
];

const Domestic_destinations_row2 = [
  { name: "Ladakh", price: "₹24,999", src: "https://go4explore.com/assets/img/international/i7.webp" },
  { name: "Andaman", price: "₹29,999", src: "https://go4explore.com/assets/img/international/i8.webp" },
  { name: "Sikkim", price: "₹16,999", src: "https://go4explore.com/assets/img/international/i9.webp" },
  { name: "Udaipur", price: "₹14,999", src: "https://go4explore.com/assets/img/international/i10.webp" },
  { name: "Rishikesh", price: "₹12,999", src: "https://go4explore.com/assets/img/international/i11.webp" },
  { name: "Manali", price: "₹18,999", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/home-trips/gujarat.webp" },
  { name: "Goa", price: "₹15,999", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "Kashmir", price: "₹22,999", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "Rajasthan", price: "₹19,999", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "Kerala", price: "₹17,999", src: "https://go4explore.com/assets/img/international/i5.webp" },
];


export default function DomesticSwiper({ prevEl, nextEl }) {
  return (
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{
prevEl: `.${prevEl}`,
nextEl: `.${nextEl}`,
  }}
  loop={true}
  enabled={true}
  breakpoints={{
    0: {
      slidesPerView: 2.3,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  }}
>
      {Domestic_destinations_row1.map((item1, index) => {
        const item2 = Domestic_destinations_row2[index];

        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center 
            justify-between h-auto gap-4">
              {/* Row 1 */}
              <div className="group relative w-[95%] 
              h-[200px]  md:h-[185px]
              rounded-xl overflow-hidden  
              cursor-pointer">
                <Image
                  src={item1.src}
                  alt={item1.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
                
                <div className="absolute bottom-3 left-3 z-10">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold text-sm">{item1.name}</h4>
                    <p className="text-white font-semibold text-[10px] md:text-xs">Starting From {item1.price}</p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 border border-white rounded-full w-5 h-5 flex items-center justify-center text-white z-10 hover:bg-white hover:text-red-700 transition">
                  <MdArrowOutward size={10} />
                </div>
              </div>

              {/* Row 2 */}
              {item2 && (
                <div className="group relative w-[95%] 
                h-[200px] md:h-[185px] rounded-xl overflow-hidden  cursor-pointer">
                  <Image
                    src={item2.src}
                    alt={item2.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
                  
                  <div className="absolute bottom-3 left-3 z-10">
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-sm">{item2.name}</h4>
                      <p className="text-white font-semibold text-[10px] md:text-xs">Starting From {item2.price}</p>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 border border-white rounded-full w-5 h-5 flex items-center justify-center text-white z-10 hover:bg-white hover:text-red-700 transition">
                    <MdArrowOutward size={10} />
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

"use client";

import dynamic from "next/dynamic";

// Load Swiper component only on client
const FeaturedNewsSwiper = dynamic(
  () => import("./FeaturedNewsSwiper"),
  { ssr: false }
);

export default function FeaturedNews() {
  return (
 <section className="w-full py-2 md:py-0 px-0 md:px-4 md:px-30  bg-white">
      
      {/* Same Outer Container as Domestic */}
      <div className="max-w-7xl mx-auto 
            bg-white md:shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl overflow-hidden md:border md:border-gray-100">
         <div className="flex flex-col md:flex-row items-center  ">
          
          {/* Text Section: Removed fixed width to allow text to scale naturally on zoom */}
          <div className="flex-shrink-0 text-center md:text-left px-4">
            <h2 className="text-xl md:text-3xl font-black text-[#2556B0] tracking-tight leading-tight tracking-tight">
              As Seen On
            </h2>
            <span className="text-[#000] font-medium text-sm md:text-lg block opacity-80">
              Featured in News
            </span>
          </div>

          {/* Swiper Section: Using flex-grow (flex-1) and min-w-0 to prevent Swiper overflow bugs */}
          <div className="w-full min-w-0 flex-1">
            <FeaturedNewsSwiper />
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import dynamic from "next/dynamic";

// Load Swiper component only on client
const FeaturedNewsSwiper = dynamic(
  () => import("./FeaturedNewsSwiper"),
  { ssr: false }
);

export default function FeaturedNews() {
  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-10 bg-white">
      {/* Outer container: Uses max-w-7xl for zoom centering and overflow-visible for hover effects */}
      <div className="max-w-7xl mx-auto bg-white
       shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem] p-6 md:py-2 md:px-4 border border-gray-100">
        
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
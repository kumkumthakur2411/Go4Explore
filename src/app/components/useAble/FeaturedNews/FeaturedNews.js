"use client";

import dynamic from "next/dynamic";

// Load Swiper component only on client
const FeaturedNewsSwiper = dynamic(
  () => import("./FeaturedNewsSwiper"),
  { ssr: false }
);

export default function FeaturedNews() {
  return(
    <>
<div className="
  w-full md:w-[85%]
  md:bg-white/90
  shadow-none md:shadow-2xl
  rounded-xl
  h-auto
  p-0 md:px-4 
  flex flex-col md:flex-row
  items-center
  -gap-3 md:gap-10
">
  {/* Text */}
  <div className="w-full md:w-[20%] text-center md:text-left md:px-4">
    <h1 className="text-xl md:text-2xl font-extrabold text-[#2755B0]">
      As Seen On
    </h1>
    <span className="text-[#222229] font-semibold text-sm md:text-base block">
      Featured in News
    </span>
  </div>

  {/* Swiper */}
  <div className="w-full md:h-[10%] px-2 md:px-0 md:w-[80%] md:flex-1">
    <FeaturedNewsSwiper />
  </div>
</div>
    </>
  )  
  
}

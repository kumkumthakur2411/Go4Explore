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
    <div className="w-[90%] bg-white/90 shadow-2xl rounded-xl h-[20%] px-4 flex flex-row items-center justify-start gap-5">
      <div className="w-[20%] ">
              <h1 className="text-2xl font-extrabold text-[#2755B0] mb-2">As Seen On       
      </h1>
       <span className="text-[#222229] font-semibold text-m">Featured in News</span>
      </div>

      <FeaturedNewsSwiper />
    </div>
    </>
  )
  
  
}

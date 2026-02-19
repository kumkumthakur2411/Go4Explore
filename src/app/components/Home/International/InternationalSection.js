import Image from "next/image";
import InternationalSwiper from "./InternationalSwiper";

export default function InternationalSection() {
  return (
    // Responsive width and padding
    <div className="w-[95%] md:w-[90%] h-auto bg-white/90 shadow-2xl rounded-xl p-4 md:p-7 mx-auto">
      
      {/* Heading + Navigation */}
      <div className="w-full flex flex-col mb-4 ">
        <div className="w-full flex  justify-between items-center "> 
          <h1 className="text-xl md:text-2xl font-extrabold text-[#2755B0] flex items-center gap-2">
            International Getaways
          </h1>

          {/* Navigation Buttons - Hidden on Mobile */}
          <div className="hidden md:flex gap-3">
            <div className="international-swiper-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light">‹</span>
            </div>
            <div className="international-swiper-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light">›</span>
            </div>
          </div>
        </div> 

        {/* Text description - Adjusted width for mobile */}
        <p className="w-full md:w-[40%] text-[#222229] font-semibold text-sm md:text-base mt-2">
          Fly beyond the homeland to create <br className="hidden md:block" /> unforgettable memories.
        </p>
      </div>

      {/* Content Area */}
      <div className="w-full flex flex-col md:flex-row items-center justify-start gap-4">
        
        {/* SIDE IMAGE: Hidden on mobile (hidden), Visible on Tablet/Desktop (md:block) */}
        <div className="hidden md:block md:w-[35%] lg:w-[40%] h-[400px] relative overflow-hidden rounded-xl">
          <Image
            src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Finternational%2Fbg.webp&w=640&q=75"
            alt="International Getaways"
            fill
            className="object-cover"
            sizes="40vw"
            priority
          />
        </div>

        {/* SWIPER: Takes full width on mobile, 65% on larger screens */}
        <div className="w-full md:w-[65%] lg:w-[60%]">
          <InternationalSwiper />
        </div>
      </div>
      
    </div>
  );
}
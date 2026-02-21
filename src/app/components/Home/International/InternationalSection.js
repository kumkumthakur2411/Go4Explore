import Image from "next/image";
import InternationalSwiper from "./InternationalSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function InternationalSection() {
  return (
    // SYNCED: Same width, height, shadow, and padding as Domestic
    <div className="w-[100%] md:w-[85%] 
    h-[76vh] md:h-[95vh]
     bg-white/90 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]  
     rounded-xl px-1 py-8 md:px-6 md:py-10">
      
      {/* SYNCED: Heading area layout */}
      <div 
      className="w-full flex flex-col 
      mb-4 items-center 
      lg:items-start text-center lg:text-left md:px-2 ">
        <div className="w-full flex justify-center 
        lg:justify-between items-center"> 
          <h1 className="text-xl md:text-2xl 
          font-extrabold text-[#2755B0] flex items-center gap-2">
            International Getaways
          </h1>

          {/* Navigation Buttons */}
          <div className="hidden lg:flex gap-3">
            <div className="international-swiper-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light"><IoIosArrowBack/></span>
            </div>
            <div className="international-swiper-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light"><IoIosArrowForward/></span>
            </div>
          </div>
        </div> 
        
        <p className="w-full lg:w-[40%] text-[#222229]
         font-medium text-xs md:text-base mt-2 mb-4 md:mb-3">
          Fly beyond the homeland to create <br/> unforgettable memories.
        </p>
      </div>

      {/* SYNCED: Content Area ratio */}
      <div className="w-full flex flex-col md:flex-row 
      items-center justify-between md:h-[80vh] md:pl-5 gap-3">
        
        {/* SIDE IMAGE: Sycned sizing */}
        <div className="hidden md:block md:w-[25%] h-[400px] relative overflow-hidden">
          <Image
            src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Finternational%2Fbg.webp&w=640&q=75"
            alt="International Getaways"
            fill
            className="absolute bottom-0 left-0 object-cover"
            priority
          />
        </div>

        {/* SWIPER Area */}
        <div className="w-full md:w-[75%] md:h-[90%] flex items-center">
          <InternationalSwiper />
        </div>
      </div>
    </div>
  );
}
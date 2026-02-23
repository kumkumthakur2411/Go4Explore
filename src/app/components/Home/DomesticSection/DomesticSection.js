import Image from "next/image";
import DomesticSwiper from "./DomesticSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function DomesticSection() {
  return (
    // Updated width/padding and centered mx-auto
    <div className="w-full flex justify-center py-2 px-4 md:px-20
     bg-white/90 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]  
     rounded-xl px-1 py-8 md:px-6 md:py-10">
      
      {/* Heading + Navigation: Now responsive */}
      <div 
      className="w-full flex flex-col 
      mb-4 items-center 
      lg:items-start text-center lg:text-left md:px-2 ">
        <div className="w-full flex justify-center 
        lg:justify-between items-center  "> 
          <h1 className="text-xl md:text-2xl 
          font-extrabold text-[#2755B0] flex items-center gap-2">
            Domestic Escapes
          </h1>

          {/* Navigation Buttons - Hidden on Mobile */}
{/* Navigation Buttons */}
<div className="hidden lg:flex gap-3">
  {/* PREVIOUS BUTTON */}
  <div className="Domestic-swiper-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
    <span className="text-lg font-light"><IoIosArrowBack/></span>
  </div>
  
  {/* NEXT BUTTON */}
  <div className="Domestic-swiper-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
    <span className="text-lg font-light"><IoIosArrowForward/></span>
  </div>
</div>
        </div> 
        
        <p className="w-full lg:w-[40%] text-[#222229]
         font-medium text-xs md:text-base mt-2 mb-4 md:mb-3">
          Explore breathtaking destinations within <br/> India
        </p>
      </div>

      {/* Content Area: Horizontal on desktop, Vertical on mobile */}
      <div className="w-full flex flex-col md:flex-row 
      items-center justify-between   md:h-[80%] md:pl-5 gap-3">
        
        {/* SIDE IMAGE: Hidden on mobile */}
<div
  className="hidden md:block md:w-[25%] 
  h-[400px] relative overflow-hidden"
>
  <Image
    src="https://go4explore.com/assets/img/domestic/bg.webp"
    alt="Domestic Getaways"
    fill
    className="absolute bottom-0 left-0 object-cover"
    priority
  />
</div>
        {/* SWIPER: Full width on mobile */}
        <div className="w-full md:w-[75%] md:h-[90%] flex items-center">
          <DomesticSwiper 
            prevEl="Domestic-swiper-prev" 
            nextEl="Domestic-swiper-next" 
          />
        </div>
      </div>
      
    </div>
  );
}
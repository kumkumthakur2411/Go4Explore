import Image from "next/image";
import VideoSwiper from "./VideoSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function VideoSwiperSection({videos}) {
  return (
    <div className="w-[100%] md:w-[85%] h-auto md:h-[95vh]
     bg-white/90 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]  
     rounded-xl py-8 px-4 md:p-8">
      
      {/* Heading + Navigation */}
      <div className="w-full flex flex-col 
      mb-4 items-center 
      lg:items-start text-center lg:text-left">
        <div className="w-full flex justify-center 
        lg:justify-between items-centerr"> 
          <h1 className="text-xl md:text-2xl 
          font-extrabold text-[#2755B0] flex items-center gap-2">
            Fuel Your Wanderlust 
          </h1>
          
          {/* Navigation Buttons - Hidden on Mobile */}
          <div className="hidden lg:flex gap-3">
            <div className="custom-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light"><IoIosArrowBack/></span>
            </div>
            <div className="custom-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light"><  IoIosArrowForward/></span>
            </div>
          </div>
        </div> 
        <p className="w-full lg:w-[40%] text-[#222229]
         font-semibold text-xs md:text-base mt-2">
         Ever growing travel community of 200K+
         <br/> Explorers!
        </p>
      </div>

      {/* Content Area */}
      <div className="w-full flex flex-col md:flex-row 
      items-center justify-start gap-4">
        <div className="hidden md:block md:w-[25%] 
         h-[300px] relative overflow-hidden 
        rounded-xl">
          <Image
            src="https://go4explore.com/assets/img/wanderlust/bg.webp"
            alt="WonderLust"
            fill
            className="object-cover"
            sizes="40vw"
            priority
          />
        </div>

        <div className="w-full md:w-[75%] ">
          {/* Passing the class names to the Swiper component */}
          <VideoSwiper prevEl="custom-prev" nextEl="custom-next" videos={videos}/>
        </div>
      </div>
      
    </div>
  );
}
import Image from "next/image";
import VideoSwiper from "./VideoSwiper";

export default function VideoSwiperSection() {
  return (
    <div className="w-[90%] h-auto bg-white/90 shadow-2xl rounded-xl p-5 mx-auto">
      
      {/* Heading + Navigation */}
      <div className="w-full flex flex-col mb-4">
        <div className="w-full flex justify-between items-center"> 
          <h1 className="text-2xl font-extrabold text-[#2755B0] flex items-center gap-2">
            Fuel Your Wanderlust 
          </h1>
          
          {/* Custom Navigation Buttons used by the Child Swiper */}
          <div className="flex gap-3">
            <div className="custom-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light">‹</span>
            </div>

            <div className="custom-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
              <span className="text-lg font-light">›</span>
            </div>
          </div>
        </div> 
        <p className="text-[#222229] font-semibold">
         Ever growing travel community of 200K+
         <br/> Explorers!
        </p>
      </div>

      {/* Content Area */}
      <div className="w-full flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-[35%] h-[400px] relative rounded-xl overflow-hidden">
          <Image
            src="https://go4explore.com/assets/img/wanderlust/bg.webp"
            alt="domestic Getaways"
            fill
            className="object-cover"
            sizes="40vw"
            priority
          />
        </div>

        <div className="w-full md:w-[65%]">
          {/* Passing the class names to the Swiper component */}
          <VideoSwiper prevEl="custom-prev" nextEl="custom-next" />
        </div>
      </div>
      
    </div>
  );
}
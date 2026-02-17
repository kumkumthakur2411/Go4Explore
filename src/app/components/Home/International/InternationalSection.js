import Image from "next/image";
import InterantionalSwiper from "./InternationalSwiper";


export default function InternationalSection() {
  return (
    <div className="w-[90%] h-[100%] bg-white/90 shadow-2xl rounded-xl p-7">
      
      {/* Heading + Navigation */}
      <div className="w-full h-[20%] flex flex-col  mb-2">
      <div className="w-full flex justify-between items-center"> 
        <h1 className="text-2xl font-extrabold text-[#2755B0] flex items-center gap-2">
          International Getaways
         </h1>
        {/* Custom Navigation Buttons */}
        <div className="flex gap-3">
          <div className="international-swiper-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light">‹</span>
          </div>

          <div className="international-swiper-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light">›</span>
          </div>
        </div>
      </div> 
      <p className=" w-[40%] text-[#222229] font-semibold text-m ">Fly beyond the homeland to create
        <br/> unforgettable memories.</p>
      </div>

      {/* Swiper */}
        <div className="h-[80%] w-full flex flex-row items-center justify-start ">
<div className="w-[40%] h-[400px] relative overflow-hidden">
  <Image
    src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Finternational%2Fbg.webp&w=640&q=75"
    alt="International Getaways"
    fill
    className="object-cover p-5"
    sizes="40vw"
    priority
  />
</div>

          <InterantionalSwiper  className="w-[60%] h-full bg-green-400"/>
        </div>
      
    </div>
  );
}
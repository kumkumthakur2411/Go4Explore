import Image from "next/image";
import DomesticSwiper from "./DomesticSwiper";


export default function DomesticSection() {
  return (
    <div className="w-[90%] h-[100%] bg-white/90 shadow-2xl rounded-xl p-5">
      
      {/* Heading + Navigation */}
      <div className="w-full h-[20%] flex flex-col  mb-2">
      <div className="w-full flex justify-between items-center"> 
        <h1 className="text-2xl font-extrabold text-[#2755B0] flex items-center gap-2">
          Domestic Escapes
         </h1>
        {/* Custom Navigation Buttons */}
        <div className="flex gap-3">
          <div className="Domestic-swiper-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light">‹</span>
          </div>

          <div className="Domestic-swiper-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light">›</span>
          </div>
        </div>
      </div> 
      <p className="w-[40%] text-[#222229] font-semibold text-m  ">Explore breathtaking destinations within
        <br/> India</p>
      </div>

      {/* Swiper */}
        <div className="h-[80%] w-full flex flex-row items-center justify-start ">
<div className="w-[40%] h-[400px] relative overflow-hidden">
  <Image
    src="https://go4explore.com/assets/img/domestic/bg.webp"
    alt="domestic Getaways"
    fill
    className="object-cover p-5"
    sizes="40vw"
    priority
  />
</div>

          <DomesticSwiper  className="w-[60%] h-full bg-green-400"/>
        </div>
      
    </div>
  );
}
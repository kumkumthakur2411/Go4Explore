import Image from "next/image";
import { BsTelephone } from "react-icons/bs";


export default function WhiteTripCard({ trip }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md bg-white
     border border-gray-100 group transition-all duration-300">
      
      {/* Top Image Section */}
      <div className="relative h-[290px] overflow-hidden">
        <Image
          src={trip.img}
          alt={trip.title}
          fill
          className="w-full h-[150px] object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Discount Badge */}
        {trip.discount && (
          <div className="absolute top-3 left-0 bg-gradient-to-r from-red-500 to-orange-500 text-white 
          text-[11px] font-extrabold px-3 py-1 rounded-r-lg shadow-md uppercase">
            Discount: {trip.discount}
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-0 bg-[#FFF500] text-black text-[12px] 
        font-bold px-4 py-2 rounded-l-xl shadow-md">
          {trip.duration}
        </div>
      </div>

      {/* Content Section (White Background) */}
      <div className="p-4">
        <h3 className="font-medium text-black text-sm mb-2 min-h-[40px] leading-tight">
          {trip.title}
        </h3>
        
        <hr className="mb-4 border-gray-300" />

        {/* Action/Price Div with specialized hover logic */}
        <div className="flex items-center justify-between group/action">
          
          <div className="flex flex-col">
            <p className="text-sm font-extrabold text-black leading-none">
              {trip.price}
            </p>
            {trip.oldPrice && (
              <div className="mt-1">
                <p className="text-[10px] line-through text-gray-600 font-medium">
                  {trip.oldPrice}
                </p>
                <p className="text-[9px] text-gray-600 font-semibold uppercase">
                  Per Person
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Call Button: 
               Default: White bg, Blue border/text 
               On Action Div Hover: Blue bg, White text
            */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-1 
            border-[#2755B0] text-[#2755B0]
              transition-colors duration-300 cursor-pointer bg-white
              group-hover/action:bg-[#2755B0] group-hover/action:text-white">
              <BsTelephone size={16} />
            </div>

            {/* Trip Details Button: 
               Default: Blue bg, White text
               On Action Div Hover: White bg, Blue text
            */}
            <button className="h-8 px-1 bg-[#2755B0] text-white font-semibold 
            text-xs rounded-sm border-2 border-[#2755B0]
              transition-colors duration-300 hover:opacity-90
              group-hover/action:bg-white group-hover/action:text-[#2755B0]">
              Trip Details
            </button>
          </div>

        </div>
      </div>
      
    </div>
  );
}
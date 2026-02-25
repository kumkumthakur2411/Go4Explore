import Image from "next/image";
// import { BsTelephone } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
export default function TripCard({ trip }) {
  return (
<div className="relative rounded-2xl overflow-hidden 
shadow-lg group">

  {/* Image */}
  <Image
    src={trip.img}
    alt={trip.title}
    width={400}
    height={500}
    className="w-full h-[255px] md:h-[400px]
               object-cover 
               transition duration-300 
               group-hover:scale-105"
  />

  {/* Discount Badge */}
  {trip.discount && (
    <div className="absolute top-5 left-0 
      bg-gradient-to-r from-red-600 to-orange-400 
      text-white text-[9px] md:text-[11px] 
      font-extrabold px-2 md:px-3 py-1 rounded">
      DISCOUNT: {trip.discount}
    </div>
  )}

  {/* Duration */}
  <div className="absolute bottom-25 md:bottom-28 right-2 md:right-3 
    bg-[#FFF500] text-[9px] md:text-[11px]  
    font-bold px-2 py-1 md:px-2 md:py-3 rounded-sm">
    {trip.duration}
  </div>

  {/* Bottom Overlay */}
<div className="absolute bottom-0 left-0 w-full 
  bg-gradient-to-t from-black/80 to-transparent 
  p-2 md:p-4 text-white">

  {/* Title */}
  <h3 className="font-semibold 
                 text-[11px] leading-tight 
                 md:text-base">
    {trip.title}
  </h3>

  <hr className="my-1 md:my-2 opacity-70" />

  <div className="block md:flex items-center 
  justify-between mt-1 md:mt-2">

    {/* Price Section */}
    <div>
      <p className="text-[10px] md:text-[13px] font-bold">
        {trip.price}
      </p>

      {trip.oldPrice && (
        <div className="leading-tight">
          <p className="text-[8px] md:text-[11px] line-through opacity-70">
            {trip.oldPrice}
          </p>
          <p className="text-[7px] md:text-[9px] opacity-70">
            {trip.per_person}
          </p>
        </div>
      )}
    </div>

    {/* Button Section */}
<div className="flex items-center 
justify-between md:justify-end gap-1 md:gap-2 
                whitespace-nowrap">

  <IoCallOutline size={20} 
    className="w-5 h-5 md:w-10 md:h-10
               rounded-full border border-white 
               p-1 md:p-2 bold
               transition-colors duration-300 
               group-hover:bg-white 
               group-hover:text-black"
  />

  <button
    className="bg-white text-black 
               font-bold text-[8px] md:text-[10px]  
               px-2 md:px-2
               h-6 md:h-8
               rounded
               whitespace-nowrap
               hover:bg-[#2755B0]  
               hover:text-white 
               transition duration-300">
    Trip Details
  </button>

</div>
  </div>
</div>
</div>
  );
}

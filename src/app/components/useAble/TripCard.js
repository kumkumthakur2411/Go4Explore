import Image from "next/image";
import { BsTelephone } from "react-icons/bs";

export default function TripCard({ trip }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      {/* Image */}
      {/* Change h-[420px] to your desired height, e.g., h-[300px] or h-[500px] */}
<Image
  src={trip.img}
  alt={trip.title}
  width={400}
  height={500}
  className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-300"
/>

      {/* Discount Badge */}
      {trip.discount && (
        <div className="absolute top-3 left-0 bg-linear-to-r from-red-500 to-orange-300 text-white 
        text-[11px] font-extrabold px-3 py-1 rounded">
          DISCOUNT: {trip.discount}
        </div>
      )}

      {/* Duration */}
      <div className="absolute bottom-30 right-3 bg-[#FFF500] text-[11px]  
      font-bold px-2 py-3 rounded-lg">
        {trip.duration}
      </div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h3 className="font-semibold text-medium">{trip.title}</h3>
        <hr className="my-2" />
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-[13px] font-bold">{trip.price}</p>
            {trip.oldPrice && (
              <div>
              <p className="text-[11px] line-through opacity-70">
                {trip.oldPrice}                 
              </p>
              <p className="text-[9px] opacity-70">
                {trip.per_person}                 
              </p>
              </div>
            )}
          </div>
<div className="flex flex-row">
 <BsTelephone 
  size={3} 
  className="w-7 h-7 rounded-full border border-white p-2 mr-2 
             transition-colors duration-300 
             group-hover:bg-white group-hover:text-black" 
/>
            <button className="bg-white text-black font-bold text-[10px]  rounded w-18 h-8 
            hover:bg-[#2755B0]  hover:text-white transition duration-300">
            

            Trip Details
          </button>
</div>

        </div>
      </div>
    </div>
  );
}

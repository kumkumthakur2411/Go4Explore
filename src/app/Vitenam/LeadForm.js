import { User, Phone, ChevronDown, CircleCheck } from "lucide-react";
import { LuCircleCheckBig } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
const bottom =[
  "100% Privacy Guaranteed   ","No Spam Calls/Messages   ","Quick Response within 24 hrs"
]
export default function LeadForm() {
  return (
    <div className="max-w-7xl mx-auto mt-8 relative z-20 px-4 h-[25%]">
      <div className="bg-white shadow-xl rounded-3xl p-3 border border-gray-100">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Header Text */}
          <div className="w-full lg:w-[40%] p-4 text-start ">
            <h2 className="text-2xl font-extrabold leading-tight text-gray-900 ">
              Let&apos;s plan your next
              <br/> trip
            </h2>
            <p className="text-gray-600 font-sm mt-2">
              Make your move, fill out your details now!
            </p>
          </div>

          {/* Form Fields */}
<div className="w-full lg:w-[75%] flex flex-col gap-4">
  <div className="flex flex-wrap md:flex-nowrap gap-3">
    
    {/* Name Input - Reduced py and increased width priority */}
    <div className="flex-[2] min-w-[400px] flex items-center 
    bg-[#F4F6FC] rounded-full px-2  border border-transparent focus-within:border-blue-200 transition">
      <BsPersonFill size={16} className="text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Full Name*"
        className="bg-transparent outline-none w-full text-xs text-gray-700 placeholder-gray-500 font-medium"
      />
    </div>

    {/* Country Code Dropdown - Slimmer height */}
    <div className="flex items-center bg-[#F4F6FC] rounded-full px-4  
    cursor-pointer border border-transparent hover:bg-blue-50 transition">
      <span className="text-gray-600 text-[10px] font-bold mr-2 
      whitespace-nowrap">+91 (IN)</span>
      <ChevronDown size={14} className="text-gray-400" />
    </div>

    {/* Phone Input - Slimmer height and wider priority */}
    <div className="flex-[2.5] min-w-[200px] flex items-center bg-[#F4F6FC] rounded-full 
    px-2 py-2 border border-transparent focus-within:border-blue-200 transition">
      <BsFillTelephoneFill size={16} className="text-gray-400 mr-3" />
      <input
        type="tel"
        placeholder="Mobile Number"
        className="bg-transparent outline-none w-full text-xs text-gray-700 placeholder-gray-500 font-medium"
      />
    </div>
  </div>

  {/* Submit Button - Aligned wide or slim to match */}
  <div className="flex justify-center">
    <button className="w-full md:w-auto px-10 py-3 bg-[#2556B0] 
    text-white text-sm font-bold rounded-full hover:bg-blue-800 transition shadow-md active:scale-95">
      Send Me Details
    </button>
  </div>
</div>
        </div>

        {/* Trust Badges */}
        <div className="mt-3  flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-m font-semibold text-gray-500">
          {bottom.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <LuCircleCheckBig size={16} className="text-[#193CB8]" />
              <span className="text-gray-900">{item}  | </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
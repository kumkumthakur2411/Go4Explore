import { BsPersonFill, BsFillTelephoneFill, BsBriefcaseFill, } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
export default function LeadForm() {
  const trustBadges = [
    "100% Privacy Guaranteed",
    "No Spam Calls/Messages",
    "Quick Response within 24 hrs"
  ];

  return (
    <div className="max-w-md mx-auto mt-10 px-4 relative z-20">
      <div className="bg-white shadow-2xl rounded-[2.5rem] p-8 border border-gray-50">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            Let's plan your next trip
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Make your move, fill out your details now!
          </p>
        </div>

        {/* Form Fields Section */}
        <div className="flex flex-col gap-4">
          
          {/* Full Name Input */}
          <div className="flex items-center bg-[#F4F6FC] rounded-2xl px-5 py-4 border border-transparent focus-within:border-blue-200 transition">
            <BsPersonFill size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Full Name*"
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-medium"
            />
          </div>

          {/* Phone Number Group */}
          <div className="flex gap-3">
            {/* Country Code Dropdown */}
            <div className="flex items-center bg-[#F4F6FC] rounded-2xl px-4 py-4 cursor-pointer hover:bg-blue-50 transition border border-transparent">
              <span className="text-gray-600 text-xs font-bold mr-1 whitespace-nowrap">
                +91 (IN)
              </span>
              <IoIosArrowDropdown size={14} className="text-gray-400" />
            </div>

            {/* Mobile Number Input */}
            <div className="flex-1 flex items-center bg-[#F4F6FC] rounded-2xl px-5 py-4 border border-transparent focus-within:border-blue-200 transition">
              <BsFillTelephoneFill size={16} className="text-gray-400 mr-3" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Company Name Input */}
          <div className="flex items-center bg-[#F4F6FC] rounded-2xl px-5 py-4 border border-transparent focus-within:border-blue-200 transition">
            <BsBriefcaseFill size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Company name"
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-medium"
            />
          </div>

          {/* Enquire Now Button */}
          <button className="w-full mt-2 py-5 bg-[#2E59BD] text-white text-lg font-black rounded-[2rem] hover:bg-blue-800 transition shadow-lg active:scale-95">
            Enquire Now
          </button>
        </div>

        {/* Trust Badges Footer */}
        <div className="mt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] font-bold text-gray-500">
            {/* First Row */}
            <div className="flex items-center gap-1.5">
              <FiCheckCircle size={14} className="text-[#2E59BD]" />
              <span>100% Privacy Guaranteed</span>
            </div>
            
            <div className="w-px h-3 bg-gray-300 hidden sm:block"></div>

            <div className="flex items-center gap-1.5">
              <FiCheckCircle size={14} className="text-[#2E59BD]" />
              <span>No Spam Calls/Messages</span>
            </div>

            {/* Second Row Centered */}
            <div className="w-full flex justify-center mt-1">
               <div className="flex items-center gap-1.5">
                <FiCheckCircle size={14} className="text-[#2E59BD]" />
                <span>Quick Response within 24 hrs</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
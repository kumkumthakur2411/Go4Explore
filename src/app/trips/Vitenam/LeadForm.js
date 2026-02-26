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
<div className="w-full md:w-[1120px] mx-auto mt-10 px-4 md:px-0 relative z-20">
  <div className="bg-white shadow-2xl rounded-[2.5rem] p-6 md:p-10 border border-gray-50">

    {/* Desktop Layout Wrapper */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      {/* LEFT SIDE (Text Section) */}
      <div className="md:w-1/3">
        <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-3">
          Let's plan your next trip
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          Make your move, fill out your details now!
        </p>
      </div>

      {/* RIGHT SIDE (Form Section) */}
      <div className="md:w-2/3 flex flex-col gap-4">

        {/* Top Row - Name + Phone */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* Full Name */}
          <div className="flex items-center bg-[#F4F6FC] rounded-2xl px-5 py-4 flex-1">
            <BsPersonFill size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Full Name*"
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-medium"
            />
          </div>

          {/* Phone Group */}
          <div className="flex flex-1 gap-3">
            <div className="flex items-center bg-[#F4F6FC] rounded-2xl px-4 py-4">
              <span className="text-gray-600 text-xs font-bold mr-1 whitespace-nowrap">
                +91 (IN)
              </span>
              <IoIosArrowDropdown size={14} className="text-gray-400" />
            </div>

            <div className="flex-1 flex items-center bg-[#F4F6FC] rounded-2xl px-5 py-4">
              <BsFillTelephoneFill size={16} className="text-gray-400 mr-3" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row - Company + Button */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center">

          {/* Company */}
          <div className="flex items-center bg-[#F4F6FC] rounded-2xl px-5 py-4 flex-1">
            <BsBriefcaseFill size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Company name"
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-medium"
            />
          </div>

          {/* Button */}
          <button className="w-full md:w-auto px-10 py-5 bg-[#2E59BD] text-white text-lg font-black rounded-[2rem] hover:bg-blue-800 transition shadow-lg active:scale-95">
            Send Me Details
          </button>
        </div>

      </div>
    </div>

    {/* Trust Badges */}
    <div className="mt-8 flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-4 text-xs font-bold text-gray-500">
      <div className="flex items-center gap-1.5">
        <FiCheckCircle size={14} className="text-[#2E59BD]" />
        <span>100% Privacy Guaranteed</span>
      </div>

      <div className="hidden md:block w-px h-4 bg-gray-300"></div>

      <div className="flex items-center gap-1.5">
        <FiCheckCircle size={14} className="text-[#2E59BD]" />
        <span>No Spam Calls/Messages</span>
      </div>

      <div className="hidden md:block w-px h-4 bg-gray-300"></div>

      <div className="flex items-center gap-1.5">
        <FiCheckCircle size={14} className="text-[#2E59BD]" />
        <span>Quick Response within 24 hrs</span>
      </div>
    </div>

  </div>
</div>
  );
}
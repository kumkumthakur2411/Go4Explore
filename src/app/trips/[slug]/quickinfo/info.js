"use client";
import { tripData } from "../../data";

export default function QuickInfo() {
  return (
    <section
      id="info"
      className="w-full bg-white p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24"
    >


      {/* Title */}
      <div className="mb-6 text-left">
        <h1 className="text-[30px] font-extrabold text-black leading-[40px] tracking-normal m-0" style={{ fontWeight: 800 }}>
          {tripData.title}
        </h1>
      </div>

      {/* ===== Top 3 Info Boxes ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3 mb-6">
        {tripData.quickInfo.map((info, idx) => (
          <div key={idx} className="flex items-center bg-[#f4f6fc] p-[10px] rounded-[10px]">
            {/* Icon */}
            <div className="w-[40px] shrink-0 flex justify-center items-center">
              <img
                src={info.icon}
                alt={info.label}
                className="max-w-[30px] h-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="ml-[5px] flex flex-col items-start">
              <span className="text-[13px] text-gray-900 font-medium leading-[25px]">
                {info.label}
              </span>
              <h4 className="text-[14px] font-semibold text-black leading-[28px] m-0">
                {info.value}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-[1.5rem] border-t border-[#dee2e6] opacity-25" />

      {/* ===== Features Section ===== */}
      <div className="flex flex-wrap items-center">
        {tripData.tripFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-[10px] px-[15px] mb-4"
          >
            <div className="w-[30px] shrink-0 flex justify-center items-center">
              <img
                src={feature.icon}
                alt={feature.label}
                className="max-w-[30px] h-auto object-contain"
              />
            </div>

            <h4 className="text-[15px] font-semibold text-black leading-[25px] m-0">
              {feature.label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

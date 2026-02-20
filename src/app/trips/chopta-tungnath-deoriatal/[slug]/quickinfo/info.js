"use client";
import { tripData } from "../../data";

export default function QuickInfo() {
  return (
    <section
      id="info"
      className="w-full bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[20px] md:p-[30px] mb-[30px] font-poppins"
    >
      {/* Title */}
      <div className="mb-4 md:mb-6 text-center md:text-left">
        <h1 className="text-[18px] md:text-[30px] leading-[26px] md:leading-[40px] font-bold md:font-extrabold text-[#200f0d]">
          {tripData.title}
        </h1>
      </div>

      {/* Top Info Boxes */}
      <div className="flex flex-wrap -mx-[4px] md:-mx-[7.5px]">
        {tripData.quickInfo.map((info, idx) => (
          <div
            key={idx}
            className="w-1/3 px-[4px] md:px-[7.5px]"
          >
            <div className="flex flex-col items-center justify-center bg-[#f4f6fc] py-[15px] px-[5px] md:p-[10px] rounded-[10px] text-center md:flex-row md:text-left md:justify-start min-h-[100px] md:min-h-0">

              {/* Icon */}
              <div className="w-[28px] md:w-[40px] flex justify-center items-center shrink-0 mb-[8px] md:mb-0">
                <img
                  src={info.icon}
                  alt={info.label}
                  className="w-full h-auto object-contain max-w-[22px] md:max-w-[30px]"
                />
              </div>

              {/* Text */}
              <div className="md:ml-[5px]">
                <span className="text-[9px] md:text-[13px] font-medium leading-[12px] md:leading-[25px] block text-gray-600 md:text-inherit">
                  {info.label}
                </span>
                <h4 className="text-[10px] md:text-[14px] font-bold md:font-semibold leading-[14px] md:leading-[28px] m-0 text-black">
                  {info.value}
                </h4>
              </div>

            </div>
          </div>
        ))}
      </div>


      {/* Divider */}
      <hr className="my-4 md:my-6 border-t border-black/10" />

      {/* Bottom Features */}
      <div
        className="grid grid-cols-3 gap-y-[12px] gap-x-[10px] md:flex md:flex-wrap md:items-center md:justify-start"
      >
        {tripData.tripFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center justify-start gap-[8px] md:gap-[10px]"
          >
            {/* Icon */}
            <div className="w-[24px] md:w-[26px] flex justify-center items-center shrink-0">
              <img
                src={feature.icon}
                alt={feature.label}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Label */}
            <h4 className="text-[11px] md:text-[15px] font-semibold m-0 text-[#35211F] whitespace-nowrap">
              {feature.label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="w-[40px] flex justify-center items-center shrink-0">{icon}</div>
      <div>
        <span className="text-[13px] font-medium leading-[25px] block">{label}</span>
        <p className="text-[14px] font-semibold leading-[28px] m-0">{value}</p>
      </div>
    </div>
  );
}
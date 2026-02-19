"use client";
import { tripData } from "../../data";

export default function QuickInfo() {
  return (
    <section
      id="info"
      className="w-full bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[30px] mb-[30px]
 font-poppins"
    >
      {/* Title */}
      <div className="mb-2 md:text-left">
        <h1 className="text-[18px] leading-[30px] flex justify-center md:justify-start md:text-[30px] md:leading-[40px] font-extrabold mb-2
">
          {tripData.title}
        </h1>
      </div>

      {/* Top Info Boxes */}
      <div className="flex flex-wrap -mx-[7.5px]">
        {tripData.quickInfo.map((info, idx) => (
          <div
            key={idx}
            className="w-1/3 md:w-1/3 px-[7.5px] mb-[8px] md:mb-0"
          >
            <div className="flex items-center bg-[#f4f6fc] p-[10px] rounded-[10px] max-md:flex-col max-md:items-center max-md:text-center max-md:py-[14px]">

              {/* Icon */}
              <div className="w-[40px] flex justify-center items-center shrink-0 max-md:mb-[6px]">
                <img
                  src={info.icon}
                  alt={info.label}
                  className="max-w-[30px] object-contain max-md:max-w-[22px]"
                />
              </div>

              {/* Text */}
              <div className="ml-[5px] text-left max-md:ml-0 max-md:text-center">
                <span className="text-[13px] font-medium leading-[25px] block max-md:text-[11px] max-md:leading-[14px]">
                  {info.label}
                </span>
                <h4 className="text-[14px] font-semibold leading-[28px] m-0 max-md:text-[12px] max-md:leading-[16px]">
                  {info.value}
                </h4>
              </div>

            </div>
          </div>
        ))}
      </div>


      {/* Divider */}
      <hr className="!my-6
 border-t border-black/25" />

      {/* Bottom Features */}
      <div
        className="
  grid grid-cols-3 gap-y-[10px] gap-x-[5px]
  md:flex md:flex-wrap md:items-center md:justify-start
  "
      >
        {tripData.tripFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="
      flex flex-row items-center justify-between  
      md:flex-row md:justify-start                        
      px-[8px] py-[8px] md:px-[12px] md:py-1
      gap-[6px] md:gap-[10px]
      text-left
      "
          >
            {/* Icon */}
            <div className="w-[26px] flex justify-center items-center shrink-0">
              <img
                src={feature.icon}
                alt={feature.label}
                className="max-w-[24px] md:max-w-[26px] object-contain"
              />
            </div>

            {/* Label */}
            <h4 className="text-[13px] leading-[16px] md:text-[15px] md:leading-[25px] font-semibold m-0 text-[#35211F] font-poppins">
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
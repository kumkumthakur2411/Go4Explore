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
      <div className="mb-2 text-left">
        <h1 className="text-[30px] leading-[40px] font-extrabold mb-2
">
          {tripData.title}
        </h1>
      </div>

      {/* Top Info Boxes */}
      <div className="flex flex-wrap -mx-[7.5px]">
        {tripData.quickInfo.map((info, idx) => (
          <div key={idx} className="w-full md:w-1/3 px-[7.5px] mb-[8px] md:mb-0">
            <div className="flex items-center bg-[#f4f6fc] p-[10px] rounded-[10px]">
              {/* Icon */}
              <div className="w-[40px] flex justify-center items-center shrink-0">
                <img
                  src={info.icon}
                  alt={info.label}
                  className="max-w-[30px] object-contain"
                />
              </div>

              {/* Text */}
              <div className="ml-[5px] text-left">
                <span className="text-[13px] font-medium leading-[25px] block">
                  {info.label}
                </span>
                <h4 className="text-[14px] font-semibold leading-[28px] m-0">
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
      <div className="flex flex-wrap items-center justify-start">
        {tripData.tripFeatures.map((feature, idx) => (
          <div key={idx} className="px-[15px] py-2 flex items-center gap-[10px]">
            {/* Icon */}
            <div className="w-[26px] flex justify-center items-center shrink-0">
              <img
                src={feature.icon}
                alt={feature.label}
                className="max-w-[26px] object-contain"
              />
            </div>

            {/* Label */}
            <h4 className="text-[17px] leading-[28px] font-bold m-0 text-[#35211F] font-poppins">
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
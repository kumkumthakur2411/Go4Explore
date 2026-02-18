"use client";
import { useState } from "react";
import { tripData } from "../../data";

/* ================= DAY ACCORDION ================= */

const DayAccordion = ({ day, title, points = [], meals = [], isOpen, onClick }) => (
  <div className="border border-[#b3b3b3] p-[25px] rounded-[8px] mb-[15px] bg-white overflow-hidden">
    {/* HEADER */}
    <div className="flex items-center">
      <div className="px-4 py-1.5 rounded-full text-[11px] md:text-[12px] lg:text-[13px] font-bold bg-[#2755b0] text-white flex justify-center items-center mr-[15px] shrink-0 min-w-[70px] md:min-w-[75px]">
        Day {day}
      </div>
      <button
        onClick={onClick}
        className="flex-1 flex items-center justify-between text-left bg-transparent border-0 p-0 focus:outline-none cursor-pointer group"
      >
        <div className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-black leading-normal font-poppins">
          {title}
        </div>
        <i className={`bi bi-chevron-down text-black text-[14px] font-semibold transition-transform duration-300 ml-auto antialiased ${isOpen ? "rotate-180" : ""}`} style={{ WebkitTextStroke: '1.5px' }}></i>
      </button>
    </div>

    {/* EXPAND AREA */}
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[2000px] mt-[10px] border-t border-[#dee2e6] pt-[15px]" : "max-h-0"}`}
    >
      <div className="px-[12.5px] py-1">
        {/* POINTS */}
        {points.length > 0 && (
          <ul className="list-disc pl-[2rem] m-0 mb-4 space-y-1">
            {points.map((point, idx) => (
              <li key={idx} className="text-gray-900 text-[14px] md:text-[15px] font-normal leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* MEALS info-box style */}
        {meals.length > 0 && (
          <div className="bg-[#f5f7fa] rounded-[12px] p-[15px_25px] w-full flex flex-col md:flex-row items-start md:items-center mt-4">
            <h5 className="text-[13px] md:text-[14px] lg:text-[15px] font-semibold text-black m-0 mr-[35px] mb-[10px] md:mb-0 shrink-0">
              Meals:
            </h5>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {meals.map((meal, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-[28px] shrink-0 flex justify-center items-center">
                    <img
                      src={meal.icon}
                      alt={meal.name}
                      className="max-width-[28px] h-auto object-contain"
                    />
                  </div>
                  <div className="ml-3 text-left">
                    <h6 className="text-[14px] leading-[18px] font-semibold text-black m-0">
                      {meal.name}
                    </h6>
                    <span className="text-[12px] leading-[18px] text-[#23a455] font-normal">
                      Included
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

/* ================= MAIN SECTION ================= */

export default function Itinerary() {
  const [openDay, setOpenDay] = useState(0); // Start with Day 0 open to match logic

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  return (
    <section
      id="itinerary"
      className="w-full bg-white p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24"
    >


      <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#200f0d] mb-4 tracking-normal">Itinerary</h4>
      <hr className="my-3 border-t border-black opacity-30" />

      {/* Accordions Container */}
      <div className="w-full">
        {tripData.itinerary.map((item, index) => (
          <DayAccordion
            key={index}
            day={item.day}
            title={item.title}
            points={item.points}
            meals={item.meals}
            isOpen={openDay === index}
            onClick={() => toggleDay(index)}
          />
        ))}
      </div>
    </section>
  );
}

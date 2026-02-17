"use client";
import { useState } from "react";
import { tripData } from "../../data";

/* ================= DAY ACCORDION ================= */

const DayAccordion = ({ day, title, points = [], meals = [], isOpen, onClick }) => (
  <div className="border border-[#b3b3b3] p-[10px] rounded-[8px] mb-[15px] bg-white">
    {/* HEADER */}
    <div className="flex items-center">
      <div className="w-[10%] min-w-[60px] h-[35px] rounded-[50px] text-[12px] font-semibold transition-all duration-300 bg-[#2755b0] border-2 border-[#2755b0] text-white flex justify-center items-center mr-[15px] shrink-0">
        Day {day}
      </div>
      <button
        onClick={onClick}
        className="flex-1 flex items-center justify-between text-left bg-transparent border-0 p-0 focus:outline-none"
      >
        <div className="text-[16px] font-medium text-black leading-normal">
          {title}
        </div>
        <svg
          className={`w-[14px] h-[14px] text-black transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ strokeWidth: "3px" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
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
              <li key={idx} className="text-gray-900 text-[15px] font-normal leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* MEALS info-box style */}
        {meals.length > 0 && (
          <div className="bg-[#f5f7fa] rounded-[12px] p-[15px_25px] w-full flex flex-col md:flex-row items-start md:items-center mt-4">
            <h5 className="text-[15px] font-semibold text-black m-0 mr-[35px] mb-[10px] md:mb-0 shrink-0">
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


      <h4 className="text-[24px] font-semibold text-[#200f0d] mb-4 tracking-normal">Itinerary</h4>
      <hr className="border-[#dee2e6] mb-8 opacity-50" />

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

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import TripCard from "../useable/TripCard";
import { Grid } from "swiper/modules";
export default function UpcomingTrips({ trips = [] }) {
  const months = [
    "February 2026",
    "March 2026",
    "April 2026",
    "May 2026",
    "June 2026",
    "July 2026",
  ];

  const visibleTrips = trips.slice(0, 8); // Always max 8 for desktop

  const [activeMonth, setActiveMonth] = useState("February 2026");

  // 🔹 Group trips into chunks of 8 for mobile swiper
  const groupedTrips = [];
  for (let i = 0; i < trips.length; i += 8) {
    groupedTrips.push(trips.slice(i, i + 8));
  }

  return (
    <section className=" md:w-[1110px] mx-auto py-10 px-4 md:px-0 mt-10 overflow-hidden">
      
      {/* HEADER (unchanged) */}
      <div className="flex flex-col md:flex-row justify-between  gap-4 mb-3">
        <h2 className="text-xl md:text-3xl font-[800] text-[#2556B0] tracking-tight text-start">
          Upcoming Trips
        </h2>

        <button className="hidden md:flex items-center gap-2 bg-[#2755B0] text-white border border-[#2755B0] px-4 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 transition-all duration-300 shadow-md active:scale-95">
          <BsArrowUpRightCircle size={16} />
          View More
        </button>
      </div>

      {/* MONTH TABS (unchanged) */}
      <div className="relative mb-10 group">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x no-scrollbar">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`py-[6px] px-[8px] md:py-[6px] md:px-[20px] rounded-full text-[12px] font-medium flex-shrink-0 transition-colors snap-start border ${
                activeMonth === month
                  ? "bg-[#2755B0] text-white border-[#2755B0]"
                  : "bg-[#f4f6fc] text-[#222222] border-gray-50 hover:border-[#2755B0] hover:text-[#2755B0]"
              }`}
            >
              {month}
            </button>
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
      </div>

      {/* ================= DESKTOP ================= */}
      {/* ✅ FORCE 4 columns → auto creates 2 rows for 8 cards */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {visibleTrips.map((trip, index) => (
          <div key={index}>
            <TripCard trip={trip} />
          </div>
        ))}
      </div>

      {/* ================= MOBILE SWIPER ================= */}
{/* ================= MOBILE SWIPER ================= */}
<div className="md:hidden -mx-4 px-4">
  <Swiper
    spaceBetween={16}
    slidesPerView={2.2}
    loop={true}
    className="!overflow-visible"
  >
    {Array.from({ length: Math.ceil(trips.length / 2) }).map((_, index) => {
      const first = trips[index * 2];
      const second = trips[index * 2 + 1];

      return (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-4">
            {first && <TripCard trip={first} />}
            {second && <TripCard trip={second} />}
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>

  <div className="flex justify-center mt-6">
    <button className="flex items-center gap-2
      bg-[#2755B0] text-white border border-[#2755B0]
      px-4 py-3 rounded-full text-sm font-bold
      hover:bg-white hover:text-blue-900 hover:border-blue-900
      transition-all duration-300 shadow-md active:scale-95">
      <BsArrowUpRightCircle size={16} />
      View More
    </button>
  </div>
</div>

    </section>
  );
}

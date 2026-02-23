"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

import TripCard from "../useAble/TripCard";

export default function UpcomingTrips({ trips = [] }) {
    const months = [
    "February 2026",
    "March 2026",
    "April 2026",
    "May 2026",
    "June 2026",
    "July 2026",
  ];
  const visibleTrips = trips.slice(0, 8);

  const [activeMonth, setActiveMonth] = useState("February 2026");
  // Convert into column pairs (2 cards per slide)
  const groupedTrips = [];
  for (let i = 0; i < visibleTrips.length; i += 2) {
    groupedTrips.push(visibleTrips.slice(i, i + 2));
  }

  return (
    <section className="w-full md:w-[85%] mx-auto py-10 px-2">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700">
          Upcoming Trips
        </h2>
<div className="flex gap-3 mb-2 md:mb-1 overflow-x-auto pb-2 scrollbar-hide md:scrollbar-default whitespace-nowrap">

</div>

        {/* Desktop View More */}
        <button className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
          View More
        </button>
      </div>
      

      
{/* Month Tabs */}
<div className="flex gap-3  md:mb-1 overflow-x-auto pb-2 scrollbar-hide
mb-10
md:scrollbar-default whitespace-nowrap">
  {months.map((month) => (
    <button
      key={month}
      onClick={() => setActiveMonth(month)}
      className={`px-4 py-2 rounded-full text-xs font-semibold flex-shrink-0 mb-1 ${
        activeMonth === month
          ? "bg-[#2755B0] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {month}
    </button>
  ))}
</div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {visibleTrips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={12}
          slidesPerView={2.2}
          loop={true}
        >
          {groupedTrips.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
                {group.map((trip, i) => (
                  <TripCard key={i} trip={trip} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile View More */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm">
            View More
          </button>
        </div>
      </div>

    </section>
  );
}

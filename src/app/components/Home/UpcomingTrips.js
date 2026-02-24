"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BsArrowUpRightCircle } from "react-icons/bs";
import TripCard from "../useable/TripCard";

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
<section className="w-full max-w-7xl mx-auto py-2 px-4 overflow-hidden">

  {/* Header Container */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">
    <h2 className="text-xl md:text-3xl font-black text-[#2556B0] tracking-tight tracking-tight text-center md:text-left">
      Upcoming Trips
    </h2>
    
    {/* Desktop View More - Moved into the header flex for stability */}
<button
  className="hidden md:flex items-center gap-2
  bg-[#2755B0] text-white
  px-4 py-3 rounded-full text-sm font-bold
  hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900
  transition-all duration-300
  shadow-md active:scale-95"
>
  <BsArrowUpRightCircle size={16} />
  View More
</button>
  </div>

  {/* Month Tabs: Improved horizontal scroll stability */}
  <div className="relative mb-10 group">
    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x no-scrollbar">
      {months.map((month) => (
        <button
          key={month}
          onClick={() => setActiveMonth(month)}
          className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold flex-shrink-0 transition-colors snap-start border ${
            activeMonth === month
              ? "bg-[#2755B0] text-white border-[#2755B0]"
              : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#2755B0] hover:text-[#2755B0]"
          }`}
        >
          {month}
        </button>
      ))}
    </div>
    {/* Visual indicator that more months exist (optional) */}
    <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
  </div>

  {/* ================= DESKTOP GRID ================= */}
  {/* Using a responsive grid that adjusts columns based on screen width rather than just md:grid-cols-4 */}
  <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {visibleTrips.map((trip, index) => (
      <div key={index} className="h-full">
        <TripCard trip={trip} />
      </div>
    ))}
  </div>

  {/* ================= MOBILE SWIPER ================= */}
  <div className="md:hidden -mx-4 px-4">
    <Swiper
      spaceBetween={16}
      slidesPerView={1.2} // Show 1 full card and peek of next to encourage scrolling
      breakpoints={{
        480: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.2 }
      }}
      className="!overflow-visible" // Crucial for zoom: keeps card shadows visible
    >
      {/* IMPORTANT: Your groupedTrips.map was nesting two cards per slide. 
          For zoom stability, it is safer to map each trip individually in Swiper.
      */}
      {visibleTrips.map((trip, index) => (
        <SwiperSlide key={index} className="pb-6">
          <TripCard trip={trip} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Mobile View More */}
    <div className="flex justify-center mt-6">
      <button className="w-full bg-[#2755B0] text-white py-4 rounded-xl text-sm font-bold shadow-lg active:scale-95 transition-transform">
        View More
      </button>
    </div>
  </div>

</section>
  );
}

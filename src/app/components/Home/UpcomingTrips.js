"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TripCard from "../useAble/TripCard";

export default function UpcomingTrips({ trips = [] }) {
  const visibleTrips = trips.slice(0, 8);

  // Convert into column pairs (2 cards per slide)
  const groupedTrips = [];
  for (let i = 0; i < visibleTrips.length; i += 2) {
    groupedTrips.push(visibleTrips.slice(i, i + 2));
  }

  return (
    <section className="w-full md:w-[85%] mx-auto py-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700">
          Upcoming Trips
        </h2>

        {/* Desktop View More */}
        <button className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
          View More
        </button>
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
        <div className="flex justify-center mt-6">
          <button className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm">
            View More
          </button>
        </div>
      </div>

    </section>
  );
}

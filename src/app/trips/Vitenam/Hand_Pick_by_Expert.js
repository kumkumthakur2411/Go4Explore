'use client'

import TripCard from "@/app/components/useable/TripCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Hand_Pick_by_Expert({ handpicked = [] }) {
  if (!handpicked.length) return null;

  return (
    <section className="w-full py-10 px-4 md:px-10 bg-white">
      <div className="w-full md:w-[1120px] px-4 md:px-0 mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="w-full text-center md:text-left text-2xl md:text-3xl font-black text-zinc-900">
            Hand Picked by Experts
          </h2>
          <p className="hidden md:block text-gray-500 text-sm mt-2">
            Specially curated experiences by our travel specialists.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {handpicked.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden -mx-4 px-4">
          <Swiper
            spaceBetween={15}
            slidesPerView={2.2}
            breakpoints={{
              480: {
                slidesPerView: 2.2,
                spaceBetween: 20
              }
            }}
          >
            {handpicked.map((trip, index) => (
              <SwiperSlide key={index} className="pb-4">
                <TripCard trip={trip} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
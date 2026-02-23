'use client'

import TripCard from "@/app/components/useable/TripCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Hand_Pick_by_Expert() {

  const trips = [
    {
      title: "Jibhi & Tirthan Valley",
      price: "₹6,499",
      oldPrice: "₹6,999",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
      per_person: "per person"
    },
    {
      title: "Kasol Kheerganga Trek",
      price: "₹6,499",
      oldPrice: "₹6,999",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
      per_person: "per person"
    },
    {
      title: "Chopta Tungnath Deoriatal",
      price: "₹5,999",
      oldPrice: "₹6,499",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
      per_person: "per person"
    },
    {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
      img: "/image.png",
      per_person: "per person"
    },
  ];

  return (
    <section className="w-full py-10 px-4 md:px-10 bg-white">
      {/* Standardized Max-Width Container */}
      <div className="max-w-7xl mx-auto">

        {/* Header: Center on Mobile, Left on Desktop */}
        <div className="mb-8">
          <h2 className="w-full text-center md:text-left text-2xl md:text-3xl font-black text-zinc-900">
            Hand Picked By Experts
          </h2>
          {/* Subtext adds a premium feel to "Hand Picked" sections */}
          <p className="hidden md:block text-gray-500 text-sm mt-2">
            Specially curated experiences by our travel specialists.
          </p>
        </div>

        {/* ✅ Desktop / Tablet Grid: 3 cols on tablet, 4 on large screens */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>

        {/* ✅ Mobile Swiper: Improved visibility and spacing */}
        <div className="md:hidden -mx-4 px-4"> 
          {/* -mx-4 and px-4 allow the swiper to touch edges while keeping cards aligned */}
          <Swiper
            spaceBetween={15}
            slidesPerView={2.3} // Shows 1 full card and a peek of the next for better UX
            breakpoints={{
              480: {
                slidesPerView: 2.2,
                spaceBetween: 20
              }
            }}
          >
            {trips.map((trip, index) => (
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

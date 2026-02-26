'use client'

import WhiteTripCard from "@/app/components/useable/WhiteTripCrad";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const tripCategories = [
  {
    categoryHeading: "Vietnam Leisure Trips – Relax & Explore!",
    description: "Short escapes for your perfect weekend.",
    trips: [
      {
        title: "Jibhi & Tirthan Valley",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Kasol Kheerganga Trek",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Chopta Tungnath Deoriatal",
        price: "₹5,999",
        oldPrice: "₹6,499",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
        per_person:"per person"
      },
      {
        title: "Kanatal & Tehri Lake",
        price: "₹5,299",
        oldPrice: "₹5,999",
        duration: "2 Days 1 Night",
        discount: "",
        img: "/image.png",
        per_person:""
      },
    ],
  },

    {
    categoryHeading: "Vietnam Honeymoon – Romantic Getaway!",
    description: "Short escapes for your perfect weekend.",
    trips: [
      {
        title: "Jibhi & Tirthan Valley",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Kasol Kheerganga Trek",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Chopta Tungnath Deoriatal",
        price: "₹5,999",
        oldPrice: "₹6,499",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Kanatal & Tehri Lake",
        price: "₹5,299",
        oldPrice: "₹5,999",
        duration: "2 Days 1 Night",
        discount: "",
        img: "/image.png",
      },
    ],
  },

    {
    categoryHeading: "Vietnam Group Trips – Adventure Together!",
    description: "Short escapes for your perfect weekend.",
    trips: [
      {
        title: "Jibhi & Tirthan Valley",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Kasol Kheerganga Trek",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Chopta Tungnath Deoriatal",
        price: "₹5,999",
        oldPrice: "₹6,499",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Kanatal & Tehri Lake",
        price: "₹5,299",
        oldPrice: "₹5,999",
        duration: "2 Days 1 Night",
        discount: "",
        img: "/image.png",
      },
    ],
  },

    {
    categoryHeading: "Vietnam Tours – Start from Ho Chi Minh!",
    description: "Short escapes for your perfect weekend.",
    trips: [
      {
        title: "Jibhi & Tirthan Valley",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Kasol Kheerganga Trek",
        price: "₹6,499",
        oldPrice: "₹6,999",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Chopta Tungnath Deoriatal",
        price: "₹5,999",
        oldPrice: "₹6,499",
        duration: "3 Days 2 Nights",
        discount: "₹500 OFF",
        img: "/image.png",
      },
      {
        title: "Kanatal & Tehri Lake",
        price: "₹5,299",
        oldPrice: "₹5,999",
        duration: "2 Days 1 Night",
        discount: "",
        img: "/image.png",
      },
    ],
  },
];
export default function Package_Swiper_div() {
  return (
<section className="py-10 px-4 md:px-10 w-full bg-white">
  <div className="w-full md:w-[1120px] mx-auto">
    {tripCategories.map((section, idx) => (
      <div key={idx} className="mb-12 last:mb-0">
        
        {/* --- 1. SHARED HEADING --- */}
        {/* Centered on mobile, Left on desktop */}
        <h2 className="text-2xl md:text-3xl font-black text-zinc-900 text-center md:text-left mb-8 px-2">
          {section.categoryHeading}
        </h2>

        {/* --- 2. DESKTOP GRID (Hidden on Mobile) --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {section.trips.map((trip, index) => (
            <WhiteTripCard key={index} trip={trip} />
          ))}
        </div>

        {/* --- 3. MOBILE SWIPER (Hidden on Desktop) --- */}
        {/* We use -mx-4 to allow cards to slide edge-to-edge on small screens */}
        <div className="md:hidden  px-4 overflow-hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={2.3} // Shows 1 full card + peek of next for better UX
            breakpoints={{
              480: {
                slidesPerView: 3.8,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2.2
              }
            }}
            className="w-full !overflow-visible" // !overflow-visible ensures shadows aren't cut
          >
            {section.trips.map((trip, index) => (
              <SwiperSlide key={index} className="pb-6">
                <WhiteTripCard trip={trip} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    ))}
  </div>
</section>
  );
}
       
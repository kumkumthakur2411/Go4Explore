"use client";
import { useState } from "react";
import TripCard from "../useAble/TripCard";

export default function UpcomingTrips() {
  const months = [
    "February 2026",
    "March 2026",
    "April 2026",
    "May 2026",
    "June 2026",
    "July 2026",
  ];

  const [activeMonth, setActiveMonth] = useState("February 2026");

  const trips = [
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
        {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
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
        {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
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
  ];

  return (
    <section className="py-10 px-4 ">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-blue-700">
            Upcoming Trips
          </h2>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
            View More
          </button>
        </div>

        {/* Month Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeMonth === month
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}


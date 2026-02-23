"use client";
import { useState } from "react";
import TripCard from "../components/useAble/TripCard";

export default function UpcomingTrips() {
  const months = [
    "February 2026",
    "March 2026",
    "April 2026",
    "May 2026",
    "June 2026",
    "July 2026",
  ];
    const plans = [
    "All trips ",
    "Short Duration Trip",
    "Long Duration Trip",
    "International Package",
    "Treks"
  ];

  const [activeMonth, setActiveMonth] = useState("February 2026");
  const [activePlan, setActivePlan] = useState("All trips");


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
      img: "https://d2qa7a8q0vuocm.cloudfront.net/images/957820240826103048.png",
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
    <section className="w-full py-6 px-3 md:px-30 md:py-1">
      <div className="max-w-7xl justify-center mx-auto">
       
  

        {/* Header */}
<div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-6 md:mb-2  gap-4 ">
  <h2 className="w-full text-center md:text-left text-xl md:text-2xl font-extrabold  text-blue-900">
    Upcoming Trips
  </h2>
</div>

{/* Month Tabs */}
<div className="flex gap-1 md:gap-3 mt-8 md:mt-1 mb-2 md:mb-1 
overflow-x-auto pb-2 scrollbar-hide md:scrollbar-default whitespace-nowrap">
  {months.map((month) => (
    <button
      key={month}
      onClick={() => setActiveMonth(month)}
      className={`px-2 md:px-6 py-2 rounded-full text-xs font-semibold flex-shrink-0 ${
        activeMonth === month
          ? "bg-[#2755B0] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {month}
    </button>
  ))}
</div>

{/* Plan Tabs */}
<div className="flex gap-3 mt-7 md:mt-1 mb-2 md:mb-1 overflow-x-auto pb-2 scrollbar-hide md:scrollbar-default whitespace-nowrap">
  {plans.map((plan) => ( // Renamed 'plans' to 'plan' inside map for better naming
    <button
      key={plan}
      onClick={() => setActivePlan(plan)}
      className={`px-2 md:px-6 py-3  rounded-full text-xs font-semibold flex-shrink-0 cursor-pointer ${
        activePlan === plan
          ? "bg-[#2755B0] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {plan}
    </button>
  ))}
</div>

        {/* Cards Grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-10">
        <button className=" bg-[#2755B0] text-white text-bold text-sm px-5 py-2
         rounded-full hover:bg-white hover:text-[#2755B0] text-sm transition
         border-2 border-[#2755B0]">
            View More
        </button>
          </div>
      </div>
    </section>
  );
}

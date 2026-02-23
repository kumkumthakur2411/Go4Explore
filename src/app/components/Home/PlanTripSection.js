"use client";

import Image from "next/image";

const features = [
  {
    icon: "https://go4explore.com/assets/img/features/1.webp",
    title: "Choose Your Travel Destination",
    desc: "From a buffet of trip itineraries handcrafted by our travel experts.",
  },
  {
    icon: "https://go4explore.com/assets/img/features/2.webp",
    title: "Ask Queries & Book Your Trip!",
    desc: "Connect with us over a call, solve your queries and book your trip.",
  },
  {
    icon: "https://go4explore.com/assets/img/features/3.webp",
    title: "Ohai, Your Trip Day Has Arrived",
    desc: "Keep your spirit high & pack your bags for a lifetime experience.",
  },
  {
    icon: "https://go4explore.com/assets/img/features/4.webp",
    title: "Share #InstaPerfect Memories...",
    desc: "Flaunt your travel memories over social media with your dear ones.",
  },
];

export default function PlanTripSection() {
  return (
    <section className="relative w-full md:py-12 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://go4explore.com/assets/img/features/bg.webp"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="grid lg:grid-cols-2 gap-12 items-center">

  {/* LEFT IMAGE */}
  <div className="relative w-full h-[500px] lg:h-[650px] order-2 lg:order-1">
    <Image
      src="https://go4explore.com/assets/img/plan-trip.webp"
      alt="Planning Trip"
      fill
      className="object-contain"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="py-10 md:space-y-15 md:mt-20 order-1 lg:order-2">
<h2 className="text-xl   md:text-2xl lg:text-3xl font-extrabold text-white text-center lg:text-left">
  Planning Stress-Free Trips!
</h2>

    <div className="mt-5 md:mt-10 space-y-5">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex items-start w-full md:w-[98%] gap-6 bg-white/95 backdrop-blur-md p-3
          md:pl-8 md:pr-10 py-4 rounded-2xl shadow-xl hover:scale-[1.02]
          transition-all duration-300"
        >
          <div className="relative w-12 h-12 md:w-15  md:h-15 
          flex-shrink-0 bg-[#FFF500] rounded-full p-1 justify-center items-center flex">
            <Image
              src={item.icon}
              alt={item.title}
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          <div>
            <h5 className="text-sm md:text-lg font-semibold text-gray-900">
              {item.title}
            </h5>
            <p className="text-gray-900 text-xs font-semibold md:text-sm md:font-medium mt-1">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

</div>
      </div>
    </section>
  );
}



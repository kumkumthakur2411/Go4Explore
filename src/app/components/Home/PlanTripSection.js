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
    <section className="relative w-full py-20 overflow-hidden">

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

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[500px] lg:h-[650px]">
            <Image
              src="https://go4explore.com/assets/img/plan-trip.webp"
              alt="Planning Trip"
              fill
              className="object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Planning Stress-Free Trips!
            </h2>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/95 backdrop-blur-md
                  p-6 rounded-2xl shadow-xl hover:scale-[1.02]
                  transition-all duration-300"
                >
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 text-sm mt-2">
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



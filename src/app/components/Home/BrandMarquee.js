"use client";

import Image from "next/image";

const row1 = [
  "https://go4explore.com/assets/img/brands/1.webp",
  "https://go4explore.com/assets/img/brands/2.webp",
  "https://go4explore.com/assets/img/brands/3.webp",
  "https://go4explore.com/assets/img/brands/4.webp",
  "https://go4explore.com/assets/img/brands/5.webp",
];

const row2 = [
  "https://go4explore.com/assets/img/brands/6.webp",
  "https://go4explore.com/assets/img/brands/7.webp",
  "https://go4explore.com/assets/img/brands/8.webp",
  "https://go4explore.com/assets/img/brands/9.webp",
  "https://go4explore.com/assets/img/brands/10.webp",
];

export default function BrandsMarquee() {
  return (
    <section className="w-[90%] mx-auto py-16 bg-white overflow-hidden">
      <h1 className="w-full flex justify-center items-center py-8 text-3xl font-extrabold text-[#2755B0]">
Recognitions & Collaborations
  </h1>
      <div className="space-y-10">

        {/* ROW 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-marquee w-max">
            {[...row1, ...row1].map((logo, index) => (
              <div
                key={index}
                className="relative w-[140px] h-[80px] flex-shrink-0  "
              >
                <Image
                  src={logo}
                  alt="brand"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 (Reverse Direction) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-marquee-reverse w-max">
            {[...row2, ...row2].map((logo, index) => (
              <div
                key={index}
                className="relative w-[140px] h-[80px] flex-shrink-0 "
              >
                <Image
                  src={logo}
                  alt="brand"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

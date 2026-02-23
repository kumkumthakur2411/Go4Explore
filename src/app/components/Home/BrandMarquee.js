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
    <section className="w-[90%] md:w-[85%] mx-auto bg-white overflow-hidden">
      <h1 className="w-full flex justify-center items-center py-8 text-lg 
      md:text-2xl font-extrabold text-[#2755B0]">
Recognitions & Collaborations
  </h1>
      <div className=" md:space-y-10">

        {/* ROW 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-5 md:gap-10 animate-marquee w-max">
            {[...row1, ...row1].map((logo, index) => (
              <div
                key={index}
                className="relative   w-[60px] md:w-[140px] h-[80px] flex-shrink-0  "
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
          <div className="flex gap-3 md:gap-5 animate-marquee-two w-max">
            {[...row2, ...row2].map((logo, index) => (
              <div
                key={index}
                className="relative w-[80px] md:w-[180] h-[80px] flex-shrink-0 "
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

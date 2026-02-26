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
    // Changed w-[90%] to max-w for better zoom stability
     <section className="w-full py-8 md:py-0 px-4 md:px-30 bg-white md:mt-5">
      
      {/* Same Outer Container as Domestic */}
      <div className="max-w-7xl mx-auto 
       overflow-hidden ">
       <h2 className="w-full text-center py-8 text-xl md:text-3xl font-[800] text-[#2755B0] tracking-tight">
        Recognitions & Collaborations
      </h2>

      <div className="space-y-2">
        {/* ROW 1: Standard Direction */}
        <div className="group relative flex overflow-hidden p-2">
          {/* mask-image creates a fade effect on edges so logos don't 'pop' in/out during zoom */}
          <div className="flex gap-8 md:gap-16 animate-marquee whitespace-nowrap 
          ">
            {[...row1, ...row1, ...row1].map((logo, index) => (
              <div
                key={index}
                className="relative w-[50px] md:w-[120px] aspect-[3/2] flex-shrink-0 
                transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt="brand logo"
                  fill
                  sizes="(max-width: 768px) 80px, 150px"
                  className="object-contain  hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Reverse Direction */}
        <div className="group relative flex overflow-hidden p-2">
          <div className="flex gap-8 md:gap-16 animate-marquee

           whitespace-nowrap ">
            {[...row2, ...row2, ...row2].map((logo, index) => (
              <div
                key={index}
                className="relative w-[60px] md:w-[100px] aspect-[3/2] flex-shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt="collaboration logo"
                  fill
                  sizes="(max-width: 768px) 80px, 150px"
                  className="object-contain  hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
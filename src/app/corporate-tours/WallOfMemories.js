'use client'
import Image from "next/image";

export default function WallOfMemories() {
  return (
    <section className="py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-10">
          <h4 className="text-2xl md:text-3xl font-extrabold">
            Wall of Memories : Faces & Places
          </h4>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-3">

          {/* Column 1 - Long Vertical */}
          <div className="col-span-12 md:col-span-2">
            <div className="relative h-[420px] rounded-xl overflow-hidden">
              <Image
                src="https://go4explore.com/assets/img/corporate/airtel.webp"
                alt="Memory 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2 - Horizontal + 2 small */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            
            {/* Long Horizontal */}
            <div className="relative h-[250px] rounded-xl overflow-hidden">
              <Image
                src="https://go4explore.com/assets/img/corporate/airtel.webp"
                alt="Memory 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Two Small */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-4 md:col-span-6 relative h-[160px] rounded-xl overflow-hidden">
                <Image
                  src="https://go4explore.com/assets/img/corporate/airtel.webp"
                  alt="Memory 3"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="col-span-8 md:col-span-6 relative h-[160px] rounded-xl overflow-hidden">
                <Image
                  src="https://go4explore.com/assets/img/corporate/airtel.webp"
                  alt="Memory 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* Column 3 - Small Vertical + Square */}
          <div className="col-span-6 md:col-span-2 flex flex-col gap-3">
            <div className="relative h-[250px] rounded-xl overflow-hidden">
              <Image
                src="https://go4explore.com/assets/img/corporate/airtel.webp"
                alt="Memory 5"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[150px] rounded-xl overflow-hidden">
              <Image
                src="https://go4explore.com/assets/img/corporate/airtel.webp"
                alt="Memory 6"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 4 - Big Square */}
          <div className="col-span-6 md:col-span-4">
            <div className="relative h-[420px] rounded-xl overflow-hidden">
              <Image
                src="https://go4explore.com/assets/img/corporate/airtel.webp"
                alt="Memory 7"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
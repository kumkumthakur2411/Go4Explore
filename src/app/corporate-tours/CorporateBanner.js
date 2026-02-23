'use client'
import Image from "next/image";

export default function CorporateBanner() {
  return (
    <section className="w-full pb-3 px-10 bg-[#F4F6FC]">
      <div className="max-w-7xl mx-auto ">

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-5/12">

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Corporate Tours & <br />
              Team Offsites
            </h1>

            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Redefine your corporate vibe with handcrafted trip itineraries by Go4Explore
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                ✓ 100% Privacy Guaranteed
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                ✓ No Spam Calls/Messages
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                ✓ Quick Response within 24 hrs
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="#corporate-enquiry"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-full"
            >
              Request Callback
            </a>
          </div>

          {/* RIGHT SIDE IMAGE GRID */}
          <div className="w-full lg:w-7/12">

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">

              {/* Left Column */}
              <div className="flex flex-col gap-3">
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2F4.webp&w=640&q=75"
                    alt="Corporate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2F4.webp&w=640&q=75"
                    alt="Corporate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center Tall Image */}
              <div className="relative h-[330px] md:h-[390px] rounded-lg overflow-hidden">
                <Image
                  src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2F4.webp&w=640&q=75"
                  alt="Corporate"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-3 col-span-2 lg:col-span-1">
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2F4.webp&w=640&q=75"
                    alt="Corporate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2F4.webp&w=640&q=75"
                    alt="Corporate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


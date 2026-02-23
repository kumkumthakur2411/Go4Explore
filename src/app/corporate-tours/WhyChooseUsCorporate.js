'use client'

import Image from "next/image";

export default function WhyChooseUsCorporate() {

  const features = [
    {
      title: "Group Bonding Activities",
      description:
        "Fun-filled team engaging games & ice-breaking sessions, improving team’s strength & productivity.",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2Fwhy-1.webp&w=64&q=75",
    },
    {
      title: "All Inclusive Itineraries",
      description:
        "From meals to explorations, we plan all-inclusive travel packages, with handpicked stays & transportation.",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2Fwhy-2.webp&w=64&q=75",
    },
    {
      title: "Team Award & Recognitions",
      description:
        "Acknowledging team’s achievements, celebrating efforts, improves retention & boosts morale.",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2Fwhy-3.webp&w=64&q=75",
    },
    {
      title: "DJ Night & Galla Dinner",
      description:
        "An unforgettable evening of entertainment, team celebrations & networking with dine & dance.",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2Fwhy-4.webp&w=64&q=75",
    },
    {
      title: "International Summit",
      description:
        "Your one-stop business travel assistance for VISA, flights, hotels, local transfers & sightseeing.",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2Fwhy-5.webp&w=64&q=75",
    },
    {
      title: "Advertising Trips",
      description:
        "Outshine with your product by choosing the travel destination & let us do the arrangements for you.",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2Fwhy-6.webp&w=64&q=75",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h4 className="text-2xl md:text-3xl font-extrabold">
            Why Choose Go4Explore?
          </h4>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcorporate%2F4.webp&w=640&q=75"
                alt="Why Choose Go4Explore"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7">
            <div className="space-y-6">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h5 className="text-lg font-bold mb-1">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
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
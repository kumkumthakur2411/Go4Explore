'use client'

import Image from "next/image";

export default function CorporateServices() {

  const services = [
    {
      title: "Corporate Trips",
      description:
        "Bring your work crew together on a trip to elevate team spirit & performances.",
      icon: "https://go4explore.com/assets/img/corporate/corp-icon-1.webp",
    },
    {
      title: "Team Incentive Travel",
      description:
        "Travel experiences designed to foster team bonding & enjoyment outside office.",
      icon: "https://go4explore.com/assets/img/corporate/corp-icon-2.webp",
    },
    {
      title: "MICE",
      description:
        "Transform ordinary Meetings, Incentives, Conferences & Events into extraordinary.",
      icon: "https://go4explore.com/assets/img/corporate/corp-icon-3.webp",
    },
    {
      title: "Vendor Incentive Plan",
      description:
        "Experiences designed to motivate & reward vendors, suppliers or channel partners.",
      icon: "https://go4explore.com/assets/img/corporate/corp-icon-4.webp",
    },
  ];

  return (
    <section className="py-14 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-2xl md:text-3xl font-extrabold">
            Corporate Services Offered
          </h4>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h5 className="text-lg font-bold mb-3">
                {service.title}
              </h5>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
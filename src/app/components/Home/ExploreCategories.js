import Image from "next/image";

export default function ExploreCategories() {
  const categories = [
    {
      title: ["Backpacking" ,<br key="br"/>," Trips"],
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F1.png&w=128&q=75",
    },
    {
      title: ["Weekend " ,<br key="br"/>," Getaways"],
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F2.png&w=128&q=75",
    },
    {
      title: ["International" ,<br key="br"/>,"  Trips"],
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F3.png&w=128&q=75",
    },
    {
      title: ["Adventure" ,<br key="br"/>,"  Treks"],
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F4.png&w=128&q=75",
    },
    {
      title: ["Honeymoon" ,<br key="br"/>,"  Trips"],
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F5.png&w=128&q=75",
    },
    {
      title: ["Corporate" ,<br key="br"/>,"Trips"],
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F6.png&w=128&q=75",
    },
  ];

  return (
    <section className="w-full py-2 px-14 md:px-30  mt-6 bg-white">
      {/* Container capped at 1280px (max-w-7xl) for zoom stability */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        
        {/* Left Content - Takes up 25% on desktop */}
        <div className="w-full lg:w-[24%] text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-[900] text-[#2556B0] lg:w-[80%] 
          font-extrabold  mb-3 leading-tight">
            Explore Categories
          </h2>
          <p className="text-gray-900 font-medium text-xs md:text-base">
            Discover destinations that match your vibe. Trips tailored to your preferences.
          </p>
        </div>

        {/* Right Cards Grid - Optimized scaling */}
        <div className="w-full lg:w-[75%] grid grid-cols-3 sm:grid-cols-3  lg:grid-cols-6 gap-2">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 py-4 md:py-6 px-2
                         text-center 
                         cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-12 h-12 md:w-20 md:h-30">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="text-[9px] md:text-base font-medium text-zinc-800 ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
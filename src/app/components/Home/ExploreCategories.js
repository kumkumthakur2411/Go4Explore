import Image from "next/image";

export default function ExploreCategories() {
  const categories = [
    {
      title: "Backpacking Trips",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F1.png&w=128&q=75",
    },
    {
      title: "Weekend Getaways",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F2.png&w=128&q=75",
    },
    {
      title: "International Trips",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F3.png&w=128&q=75",
    },
    {
      title: "Adventure Treks",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F4.png&w=128&q=75",
    },
    {
      title: "Honeymoon Trips",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F5.png&w=128&q=75",
    },
    {
      title: "Corporate Trips",
      icon: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fcategory%2F6.png&w=128&q=75",
    },
  ];

  return (
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-3 items-center">
        
        {/* Left Content */}
        <div className="lg:w-[25%] text-center lg:text-left">
          <h2 className="w-[50%] text-2xl font-extrabold text-[#2755B0] mb-3">
            Explore Categories
          </h2>
          <p className="text-[#222229] font-semibold text-m">
            Discover destinations that match your vibe, Trips tailored to your
            preferences.
          </p>
        </div>

        {/* Right Cards */}
        <div className="lg:w-[75%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain hover:scale-150 transition duration-300 "
                />
              </div>
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    
  );
}
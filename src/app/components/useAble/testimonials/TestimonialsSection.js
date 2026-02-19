export default function TestimonialSection() {
   const testimonials = [
  {
    id: 1,
    name: "Ujjawal Sharma",
    location: "Andaman",
    text: "Never have I chosen a group travel option before...",
    image: "/images/andaman.jpg",
  },
  {
    id: 2,
    name: "Dhruv Bajpai",
    location: "Kazakhstan",
    text: "Hi! I went with Go4Explore on their weekend getaway...",
    image: "/images/kazakhstan.jpg",
  },
  {
    id: 3,
    name: "Rohit Sharma",
    location: "Kedarnath",
    text: "Amazing trek and great leadership!",
    image: "/images/kedarnath.jpg",
  },
  {
    id: 4,
    name: "Hemanth",
    location: "Kerala",
    text: "Our trip to Bhutan was great!",
    image: "/images/kerala.jpg",
  },

    {
    id: 5,
    name: "Dhruv Bajpai",
    location: "Kazakhstan",
    text: "Hi! I went with Go4Explore on their weekend getaway...",
    image: "/images/kazakhstan.jpg",
  },
  {
    id: 6,
    name: "Rohit Sharma",
    location: "Kedarnath",
    text: "Amazing trek and great leadership!",
    image: "/images/kedarnath.jpg",
  },
  {
    id: 7,
    name: "Hemanth",
    location: "Kerala",
    text: "Our trip to Bhutan was great!",
    image: "/images/kerala.jpg",
  },
    {
    id: 8,
    name: "Dhruv Bajpai",
    location: "Kazakhstan",
    text: "Hi! I went with Go4Explore on their weekend getaway...",
    image: "/images/kazakhstan.jpg",
  },
  {
    id: 9,
    name: "Rohit Sharma",
    location: "Kedarnath",
    text: "Amazing trek and great leadership!",
    image: "/images/kedarnath.jpg",
  },
  {
    id: 10,
    name: "Hemanth",
    location: "Kerala",
    text: "Our trip to Bhutan was great!",
    image: "/images/kerala.jpg",
  },
    {
    id: 11,
    name: "Dhruv Bajpai",
    location: "Kazakhstan",
    text: "Hi! I went with Go4Explore on their weekend getaway...",
    image: "/images/kazakhstan.jpg",
  },
  {
    id: 12,
    name: "Rohit Sharma",
    location: "Kedarnath",
    text: "Amazing trek and great leadership!",
    image: "/images/kedarnath.jpg",
  },
  {
    id: 13,
    name: "Hemanth",
    location: "Kerala",
    text: "Our trip to Bhutan was great!",
    image: "/images/kerala.jpg",
  },
    {
    id: 14,
    name: "Dhruv Bajpai",
    location: "Kazakhstan",
    text: "Hi! I went with Go4Explore on their weekend getaway...",
    image: "/images/kazakhstan.jpg",
  },
  {
    id: 15,
    name: "Rohit Sharma",
    location: "Kedarnath",
    text: "Amazing trek and great leadership!",
    image: "/images/kedarnath.jpg",
  },
  {
    id: 16,
    name: "Hemanth",
    location: "Kerala",
    text: "Our trip to Bhutan was great!",
    image: "/images/kerala.jpg",
  },
];

  return (
    <div className="w-[90%] h-screen mx-auto  ">
      <h1 className="w-full flex justify-center items-center py-8 text-3xl font-extrabold text-[#2755B0]">
    Happy Faces & Stories
  </h1>
      <div className="overflow-hidden h-full">

        <div className="flex h-full animate-marquee gap-4">

          {/* FIRST COPY */}
          <div className="grid grid-cols-4 gap-4 h-full w-full shrink-0">
            
            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

          </div>

          {/* SECOND COPY (duplicate for seamless loop) */}
          <div className="grid grid-cols-4 gap-4 h-full w-full shrink-0">
            
            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


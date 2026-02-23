import WhiteTripCard from "@/app/components/useable/WhiteTripCrad";
import WhyChoose from "@/app/components/useable/WhyChoose";

export default function backpackingTripsPage() {
  const trips = [
    {
      title: "Jibhi & Tirthan Valley",
      price: "₹6,499",
      oldPrice: "₹6,999",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "https://d2qa7a8q0vuocm.cloudfront.net/images/25431020220425093432.png",
    },
    {
      title: "Kasol Kheerganga Trek",
      price: "₹6,499",
      oldPrice: "₹6,999",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
    },
    {
      title: "Chopta Tungnath Deoriatal",
      price: "₹5,999",
      oldPrice: "₹6,499",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
    },
    {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
      img: "/image.png",
    },
        {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
      img: "/image.png",
    },
        {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
      img: "/image.png",
    },
        {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
      img: "/image.png",
    },
        {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
      img: "/image.png",
    },
  ];

  return (
    <section className="w-full py-9 px-3 md:px-30 md:py-10">
      <div className="max-w-7xl justify-center mx-auto">

        {/* Header */}
<div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-6 md:mb-2  gap-4 ">
  <h2 className="font-bold w-full text-center md:text-left text-xl md:text-2xl font-extrabold  text-[#000]">
    Backpacking Trips
  </h2>
</div>


        {/* Cards Grid */}
        <div className="md:mt-15 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <WhiteTripCard key={index} trip={trip} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-10">
        <button className=" bg-[#2755B0] text-white text-bold text-sm px-5 py-2
         rounded-full hover:bg-white hover:text-[#2755B0] text-sm transition
         border-2 border-[#2755B0]">
            View More
        </button>
        </div>
      </div>
      <WhyChoose/>
    </section>
  );
}
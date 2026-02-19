import WhiteTripCard from "../components/useAble/WhiteTripCrad";
import WhyChoose from "../components/useAble/WhyChoose";

export default function internationalPage() {



  const trips = [
    {
      title: "Jibhi & Tirthan Valley",
      price: "₹6,499",
      oldPrice: "₹6,999",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
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
    <section className="py-25 md:py-12 px-1 md:px-20 ">
      <div className="max-w-[94%] justify-center mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4 pt-2 md:my-10">
          <h2 className="text-2xl font-extrabold text-zinc-900">
            International Trips
          </h2>
        </div>


        {/* Cards Grid */}
        <div className="mt-15 grid grid-cols-2 lg:grid-cols-4 gap-6">
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
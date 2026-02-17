import TripCard from "../components/useAble/TripCard";

export default function Hand_Pick_by_Expert() {

  const trips = [
    {
      title: "Jibhi & Tirthan Valley",
      price: "₹6,499",
      oldPrice: "₹6,999",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
      per_person:"per person"
    },
    {
      title: "Kasol Kheerganga Trek",
      price: "₹6,499",
      oldPrice: "₹6,999",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
      per_person:"per person"
    },
    {
      title: "Chopta Tungnath Deoriatal",
      price: "₹5,999",
      oldPrice: "₹6,499",
      duration: "3 Days 2 Nights",
      discount: "₹500 OFF",
      img: "/image.png",
      per_person:"per person"
    },
    {
      title: "Kanatal & Tehri Lake",
      price: "₹5,299",
      oldPrice: "₹5,999",
      duration: "2 Days 1 Night",
      discount: "",
      img: "/image.png",
      per_person:"per person"
    },


  ];

  return (
    <section className="py-10 px-10 ">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-extrabold text-zinc-900">
           Hand Picked By Experts
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}
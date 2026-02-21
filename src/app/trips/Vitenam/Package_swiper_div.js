import TripCard from "@/app/components/useAble/TripCard";
import WhiteTripCard from "@/app/components/useAble/WhiteTripCrad";
const tripCategories = [
  {
    categoryHeading: "Vietnam Leisure Trips – Relax & Explore!",
    description: "Short escapes for your perfect weekend.",
    trips: [
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
        per_person:"per person"
      },
      {
        title: "Kanatal & Tehri Lake",
        price: "₹5,299",
        oldPrice: "₹5,999",
        duration: "2 Days 1 Night",
        discount: "",
        img: "/image.png",
        per_person:""
      },
    ],
  },

    {
    categoryHeading: "Vietnam Honeymoon – Romantic Getaway!",
    description: "Short escapes for your perfect weekend.",
    trips: [
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
    ],
  },

    {
    categoryHeading: "Vietnam Group Trips – Adventure Together!",
    description: "Short escapes for your perfect weekend.",
    trips: [
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
    ],
  },

    {
    categoryHeading: "Vietnam Tours – Start from Ho Chi Minh!",
    description: "Short escapes for your perfect weekend.",
    trips: [
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
    ],
  },
];
export default function Package_Swiper_div() {
  return (
  <section className="py-10 px-10 w-full">
      <div className="max-w-7xl mx-auto bg-red-400">
      {tripCategories.map((section, idx) => (
        <div key={idx}>
          {/* Section Heading */}
          <h2 className="text-2xl font-extrabold text-zinc-900 my-12">
            {section.categoryHeading}
          </h2>


          {/* Trips Grid */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {section.trips.map((trip, index) => (
    <WhiteTripCard key={index} trip={trip} />
  ))}
</div>
        </div>
      ))}
    </div>
    </section>
  );
}
       
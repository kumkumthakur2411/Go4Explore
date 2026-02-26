
'use client'
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogs = [
  {
    title: "Leh Ladakh Bike Trip Guide for Beginners",
    date: "Feb 16, 2026",
    img: "https://go4explore.com/assets/img/blog/1.webp",
  },
  {
    title: "Srinagar to Leh Road Trip Which Route Is Better",
    date: "Feb 10, 2026",
    img: "https://go4explore.com/assets/img/blog/2.webp",
  },
  {
    title: "Manali to Leh Road Trip Route and Travel Tips",
    date: "Jan 20, 2026",
    img: "https://go4explore.com/assets/img/blog/3.webp",
  },
  {
    title: "Leh Ladakh Trip from Delhi: Complete Travel Guide",
    date: "Jan 19, 2026",
    img: "https://go4explore.com/assets/img/blog/4.webp",
  },
];

export default function TopBlogReads() {
  return (
<section className="w-[90%] mt-8">
  <div className="max-w-7xl mx-auto ">

    {/* Header */}
<div className="flex items-center justify-between mb-10 md:mb-18">
  <h2 className="text-xl md:text-3xl font-extrabold text-[#2755B0] text-center md:text-left w-full md:w-auto">
    Top Blog Reads
  </h2>

      {/* Desktop View More */}
        <button className="hidden md:flex items-center gap-2 bg-[#2755B0] text-white border border-[#2755B0] px-4 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 transition-all duration-300 
         active:scale-95">
          <BsArrowUpRightCircle size={16} />
          View More
        </button>
    </div>

    {/* ✅ Mobile Swiper */}
    <div className="sm:hidden">
      <Swiper
        spaceBetween={16}
        slidesPerView={2.2}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              
              <div className="relative w-full h-16">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="pt-2 pb-6  px-1 text-center">
                <h3 className="font-semibold text-gray-900 text-xs line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-xs mt-3">
                  {blog.date}
                </p>
              </div>
               <div className="absolute top-3 right-3 border-2 border-white 
                              rounded-full w-4 h-4 flex items-center justify-center text-white z-10 
                              group-hover:bg-white group-hover:text-blue-900 transition">
                                <MdArrowOutward size={15} />
                              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Mobile View More Button */}
      <div className="flex justify-center mt-6">
        <button className="hidden md:flex items-center gap-2 bg-[#2755B0] 
        text-white border border-[#2755B0] px-4 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 transition-all duration-300 shadow-md active:scale-95">
          <BsArrowUpRightCircle size={16} />
          View More
        </button>
      </div>
    </div>

    {/* ✅ Desktop Grid (unchanged) */}
    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition"
        >
          <div className="relative w-full h-48">
            <Image
              src={blog.img}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="p-4 mb-15">
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-xs mt-3">
              {blog.date}
            </p>
          </div>
             <div className="absolute top-3 right-3 border-2 border-white 
                rounded-full w-8 h-8 flex items-center justify-center text-white z-10 
                group-hover:bg-white group-hover:text-blue-900 transition">
                  <MdArrowOutward size={20} />
                </div> 
        </div>
        
      ))}
    </div>

  </div>
</section>
  );
}




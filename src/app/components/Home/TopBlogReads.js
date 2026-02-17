

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    <section className="w-[90%]  mt-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl text-2xl font-extrabold text-[#2755B0]">
            Top Blog Reads
          </h2>

          <button className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-800 transition">
            View More
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Arrow icon overlay */}
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-xs mt-3">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

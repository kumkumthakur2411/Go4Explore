import React from 'react';

const LatestBlog = ({ className }) => {
    const latestBlogs = [
        {
            id: 1,
            title: "Spiti Valley Circuit Trip Explained for First Timers",
            date: "Feb 20, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771584900614-1771584900437_5efmsr_blog-cover.webp",
            href: "/blogs/spiti-valley-circuit-trip-for-first-timers"
        },
        {
            id: 2,
            title: "Spiti Valley Trip from Delhi Complete Travel Guide",
            date: "Feb 19, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771486994376-1771486994227_0qc0zt_blog-cover.webp",
            href: "/blogs/spiti-valley-trip-from-delhi-guide"
        },
        {
            id: 3,
            title: "Spiti Valley Trip Planning Guide for Beginners",
            date: "Feb 17, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771311489579-1771311488983_i1mwq9_blog-cover.webp",
            href: "/blogs/spiti-valley-trip-planning-guide-for-beginners"
        },
        {
            id: 4,
            title: "Leh Ladakh Bike Trip Guide for Beginners",
            date: "Feb 16, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771223702926-1771223702572_kc0bv5_blog-cover.webp",
            href: "/blogs/leh-ladakh-bike-trip-for-beginners"
        }
    ];

    return (
        <div className={className}>
            <h2 className="mb-6 text-center text-[22px] font-bold text-[#200f0d]">
                Latest Blogs
            </h2>

            <div className="flex flex-col gap-4">
                {latestBlogs.map((blog) => (
                    <div key={blog.id}>
                        <a href={blog.href} className="no-underline">
                            <div className="w-full shadow-[0_1px_10px_rgba(0,0,0,0.08)] border border-gray-50 rounded-[15px] p-3 transition-all duration-300 hover:shadow-md bg-white">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="w-[85px] h-[75px] shrink-0 overflow-hidden rounded-[10px]">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <article className="flex-1 min-w-0">
                                        <p className="text-[11px] text-[#737373] font-medium mb-1">
                                            Published on {blog.date}
                                        </p>
                                        <h5 className="m-0 text-[14px] leading-[18px] font-bold text-[#200f0d] line-clamp-2">
                                            {blog.title}
                                        </h5>
                                    </article>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            {/* Helper Section */}
            <div className="text-center mt-4">
                <div className="w-full h-full shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[15px] p-[30px] bg-white">
                    <h5 className="text-[16px] leading-[26px] font-semibold text-center mb-2 text-[#200f0d]">
                        Have Doubts? Talk To <br />Our Travel Experts!
                    </h5>
                    <p className="text-[13px] leading-[23px] text-[#737373] text-center mb-0">
                        Allow Us to Call You Back
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="px-[14px] py-[8px] rounded-[50px] text-sm font-semibold transition-all duration-300 bg-[#2755b0] border-2 border-[#2755b0] text-white hover:text-[#2755b0] hover:bg-white text-center inline-block w-full">
                            Request Callback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;

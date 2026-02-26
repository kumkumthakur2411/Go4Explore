import React from 'react';

const Featured = () => {
    const blogs = [
        {
            id: 1,
            title: "Spiti Valley Circuit Trip Explained for First Timers",
            date: "Feb 20, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771584900614-1771584900437_5efmsr_blog-cover.webp",
            href: "/blog/spiti-valley-circuit-trip-for-first-timers",
            type: "main"
        },
        {
            id: 2,
            title: "Spiti Valley Trip from Delhi Complete Travel Guide",
            date: "Feb 19, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771486994376-1771486994227_0qc0zt_blog-cover.webp",
            href: "/blog/spiti-valley-trip-from-delhi-guide",
            type: "side"
        },
        {
            id: 3,
            title: "Best Time to Visit Spiti Valley for Road Trip",
            date: "Feb 18, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771393181461-1771393181098_iax8i9_blog-cover.webp",
            href: "/blog/best-time-to-visit-spiti-valley-road-trip",
            type: "side"
        },
        {
            id: 4,
            title: "Spiti Valley Trip Planning Guide for Beginners",
            date: "Feb 17, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771311489579-1771311488983_i1mwq9_blog-cover.webp",
            href: "/blog/spiti-valley-trip-planning-guide-for-beginners",
            type: "bottom"
        },
        {
            id: 5,
            title: "Leh Ladakh Bike Trip Guide for Beginners",
            date: "Feb 16, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1771223702926-1771223702572_kc0bv5_blog-cover.webp",
            href: "/blog/leh-ladakh-bike-trip-for-beginners",
            type: "bottom"
        },
        {
            id: 6,
            title: "Srinagar to Leh Road Trip Which Route Is Better",
            date: "Feb 10, 2026",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/1770726255660-1770726255324_qapur5_Srinagar-to-Leh-Road-Trip.webp",
            href: "/blog/srinagar-leh-manali-road-trip-route",
            type: "bottom"
        }
    ];

    return (
        <section className="pb-6 md:py-4 md:pb-20 bg-white font-['Poppins']">
            <div className="container mx-auto px-4 max-w-[1320px]">
                {/* Header Section */}
                <div className="mb-0 md:mb-5">
                    <h4 className="text-[14px] md:text-[26px] lg:text-[30px] font-extrabold leading-tight text-black">
                        Featured Blogs
                    </h4>
                </div>

                {/* Blogs Grid */}
                <div className="flex flex-wrap -mx-2 md:-mx-3 md:gap-y-12 gap-y-6">
                    {/* Row 1: Left Main Blog & Right Side Blogs */}
                    <div className="w-full md:w-[58.33%] px-2">
                        <a href={blogs[0].href} className="block group h-full">
                            <div className="h-full shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[15px] p-2 md:p-[30px] bg-white transition-transform duration-300 hover:-translate-y-1">
                                <div className="flex flex-col justify-center">
                                    <article>
                                        <div className="w-full overflow-hidden rounded-[10px] aspect-video">
                                            <img
                                                src={blogs[0].image}
                                                alt={blogs[0].title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-xs text-[grey] mt-[22px] font-medium capitalize mb-0">
                                            Published on {blogs[0].date}
                                        </p>
                                    </article>
                                    <h5 className="mt-2 text-sm md:text-[16px] md:leading-[25px] font-semibold text-black mb-0">
                                        {blogs[0].title}
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="w-full md:w-[41.66%] px-4 flex flex-col gap-6">
                        {blogs.slice(1, 3).map((blog) => (
                            <div key={blog.id} className="h-full">
                                <a href={blog.href} className="block group h-full">
                                    <div className="h-full shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[15px] p-2 lg:p-7 bg-white transition-transform duration-300 hover:-translate-y-1">
                                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
                                            <div className="w-full lg:w-[160px] xl:w-[180px] aspect-video lg:h-[160px] xl:h-[180px] shrink-0 overflow-hidden rounded-[10px]">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <article className="flex flex-col justify-center">
                                                <p className="text-xs text-[grey] mt-2 font-medium mb-1">
                                                    Published on {blog.date}
                                                </p>
                                                <h5 className="mt-2 text-[14px] font-semibold leading-[15px] md:text-[16px] md:leading-[20px] text-black mb-0">
                                                    {blog.title}
                                                </h5>
                                            </article>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: Bottom Three Blogs */}
                    {blogs.slice(3).map((blog) => (
                        <div key={blog.id} className="w-full md:w-1/3 px-4">
                            <a href={blog.href} className="block group h-full">
                                <div className="h-full shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[15px] p-2 md:p-[30px] bg-white transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex flex-col h-full">
                                        <article>
                                            <div className="w-full overflow-hidden rounded-[10px] aspect-video">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <p className="text-xs text-[grey] mt-[10px] font-medium mb-0 ">
                                                Published on {blog.date}
                                            </p>
                                        </article>
                                        <h5 className="mt-2 text-[14px] md:mt-2 md:text-[16px] font-semibold leading-tight text-black mb-0">
                                            {blog.title}
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <button className="px-[14px] py-[8px] rounded-full text-sm font-semibold transition-all duration-300 bg-[#2755b0] border-2 border-[#2755b0] text-white hover:bg-white hover:text-[#2755b0]">
                        View More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Featured;

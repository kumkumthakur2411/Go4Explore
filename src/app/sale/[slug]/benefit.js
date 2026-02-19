export default function Benefit() {
    const benefits = [
        {
            id: "style-YovT9",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fsale-icon-1.png&w=256&q=75",
            title: "Lowest Price, More Savings",
        },
        {
            id: "style-MomCS",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fsale-icon-2.png&w=256&q=75",
            title: "Book at Just ₹999 only",
        },
        {
            id: "style-jVv5b",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fsale-icon-3.png&w=256&q=75",
            title: "0% Trans Fee On Credit Cards",
        },
        {
            id: "style-NUD66",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fsale-icon-4.png&w=256&q=75",
            title: "Hassle-Free Trip Reschedule",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h4 className="text-[18px] leading-[28px] text-center mt-2 mb-1 md:mt-0 md:mb-2 md:text-[30px] md:leading-[40px] font-extrabold text-black">
                        Spend Less, Travel More!
                    </h4>
                    <p className="text-[16px] font-medium leading-[24px] text-[#222] mt-3">
                        Benefits you can grab only during our exclusive Grand Travel Sale by paying just{" "}
                        <span
                            id="style-V7rqT"
                            className="bg-[#dc3545] px-3 py-2 rounded-[1rem] text-white font-semibold ml-2 inline-block border-2 border-dotted border-white"
                        >
                            ₹999 only
                        </span>
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="flex flex-wrap -mx-3 justify-center">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="w-1/2 lg:w-1/3 xl:w-1/4 px-3 mt-6 xl:mt-0"
                        >
                            <div className="text-center p-3 rounded-[12px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-1 border border-gray-50 group hover:shadow-lg transition-all duration-300 h-full">
                                <div className="w-[120px] h-[120px] mx-auto flex justify-center items-center overflow-hidden">
                                    <img
                                        id={benefit.id}
                                        src={benefit.img}
                                        alt={benefit.title}
                                        width={100}
                                        height={100}
                                        className="w-20 h-20 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h5 className="text-[15px] leading-[20px] font-medium mt-4 text-[#222]">
                                    {benefit.title}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

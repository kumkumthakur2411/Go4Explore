import Image from "next/image";
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
            <div className="max-w-[1320px] mx-auto px-3 lg:px-6">
                {/* Title Section */}
                <div className="text-center mb-10">
                    <h4 className="text-[18px] leading-[28px] text-center mt-2 mb-1 md:mt-0 md:mb-2 md:text-[30px] md:leading-[40px] font-extrabold text-black">
                        Spend Less, Travel More!
                    </h4>
                    <p className="text-[13px] leading-[20px] font-medium md:text-[16px] font-medium leading-[24px] text-[#222] mt-2">
                        Benefits you can grab only during our exclusive Grand Travel Sale by paying just{" "}
                        <span
                            id="style-V7rqT"
                            className="bg-[#dc3545] px-2 py-2 rounded-[1rem] text-white font-semibold ml-2 inline-block border-2 border-dotted border-white"
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
                            <div className="block box-border text-center py-[10px] px-[4px] rounded-[12px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-[10px] border border-gray-50 group hover:shadow-lg transition-all duration-300 md:text-center md:p-[20px] md:rounded-[12px] md:shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] md:my-[5px] md:mx-auto md:block md:h-full">
                                <div className="w-[50px] h-[50px] mx-auto flex items-center justify-center overflow-hidden md:w-[120px] md:h-[120px] md:object-cover md:overflow-hidden md:m-auto md:flex md:justify-center md:items-center">
                                    <Image
                                        src={benefit.img}
                                        alt={benefit.title}
                                        width={100}
                                        height={100}
                                        className="object-contain transition-transform duration-500 group-hover:scale-110 md:w-[80px] md:h-[80px] md:object-cover md:overflow-hidden md:transition-all md:duration-1000 md:ease-in-out md:m-auto md:flex md:justify-center md:group-hover:scale-110"
                                    />
                                </div>
                                <h5 className="text-[10px] leading-[24px] text-[#35211f] font-medium mt-2 md:text-center md:text-[15px] md:leading-[20px] md:font-medium md:mt-[15px] md:mb-0 md:text-[#222]">
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

"use client";
import { useState } from "react";

export default function Reviews() {
    const [isExpanded, setIsExpanded] = useState(false);

    const reviews = [
        {
            name: "Rohan verma",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/20775120230724055808.png",
            booked: "Chopta-Tungnath-Deoriatal",
            rating: 5,
            comment: "Go4explore is a very good choice for travelling and our team leader/captain Mr. Fahad khan did a very great work on Chopta Tungnath trip. He knows his responsibility and make our journey safe and fun. In short, the experience was great with this group trip."
        },
        {
            name: "Snehanshu Shekhar",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/15978920230724063046.png",
            booked: "Chopta-Tungnath-Deoriatal",
            rating: 5,
            comment: "Since I never had tried a travel agency before, I was skeptical as to how thing would go on group trip. But I must say it was an amazing experience travelling with the team to Chopta Tungnath valley, trek to Chandrashila peak and more. Our Team leads Shreyansh and Dikshit did a great job handling our group of weirdos. 9/10, would try again."
        },
        {
            name: "Shantanu Khatri",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/14293920230724063531.png",
            booked: "Chopta-Tungnath-Deoriatal",
            rating: 5,
            comment: "We went to Chopta tungnath Valley via Go4Explore team. It was a truly wonderful experience! Our tour guide Dev was very friendly, jovial and his patient manner made all the treks very enjoyable and easy. All our accomodation & food were also properly taken care of, along with the entire group trip transportation at a reasonable price. Highly recommended for everyone planning for a hassle-free travel."
        },
        {
            name: "Anamika Banka",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/profilepic.png",
            booked: "Chopta-Tungnath-Deoriatal",
            rating: 5,
            comment: "Every single moment of this trip was amazing!! If you ever want to experience heaven on Earth please come to Chopta tungnath trip. This trip was soothing as well as adventurous. You will explore extreme things about this place and yourself. The group trip was very well organized. The food, hotels, cafe, and people were so good. The backbone of this trip were our Captain - Saurabh Arora and our Co-Captain-Dev kant sachan. They motivated us all also they took very good care of us. If you want to have hell lot of fun and a memorable trip then trust me you they are the best leaders. Looking forward to book more trips from Go4explore."
        },
        {
            name: "Ujjawal Sharma",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/20995420230724064452.png",
            booked: "Chopta-Tungnath-Deoriatal",
            rating: 5,
            comment: "Never have I chosen a group travel option. I had never been on group trip with so many other people before. It was a wonderful and lifetime experience. If I had organised my own trip to Chopta Tungnath, I might not have explored and enjoyed as much. Without a doubt, I'll choose Go4Explore for another trip. Special thanks to our captains, Shreyansh and Dikshit, for being such excellent and fun trip companions. You guys were super awesome and super helpful and i definitely want you guys to be the captain on my next trip."
        }
    ];

    const visibleReviews = isExpanded ? reviews : reviews.slice(0, 3);

    return (
        <section
            className="w-full bg-white p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24"
        >

            <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#200f0d] mb-4 tracking-normal">Reviews</h4>
            <hr className="my-3 border-t border-black opacity-30" />

            <div className="space-y-0">
                {visibleReviews.map((review, idx) => (
                    <div key={idx} className="border-b border-[#dddddd] pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
                        <div className="flex items-center justify-between mb-[15px]">
                            <div className="flex items-center gap-3">
                                <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center bg-gray-50 border border-gray-100">
                                    <img src={review.image} alt={review.name} className="max-w-[45px] h-auto object-contain rounded-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h6 className="text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#200f0d] m-0 leading-tight">{review.name}</h6>
                                    <span className="text-[12px] text-gray-500 m-0">
                                        Booked: <strong className="font-bold text-[#35211f]">{review.booked}</strong>
                                    </span>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex items-center gap-0.5 ">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-7 h-7 text-[#e5be37]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        <div className="body-pam">
                            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[26px] text-[#6c757d] font-normal mb-0">
                                {review.comment}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {reviews.length > 3 && (
                <div className="mt-5 flex justify-start">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-1.5 text-gray-600 font-normal text-[15px] hover:text-black transition-all"
                    >
                        {isExpanded ? "View Less" : "View More"}
                        <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
}

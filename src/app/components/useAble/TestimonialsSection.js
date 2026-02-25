import { IoLocationSharp } from "react-icons/io5";
export default function TestimonialSection() {
const visualContent = [
  { img: "https://go4explore.com/assets/img/testimonial/1.webp", location: "Kazakhstan" },
  { img: "https://go4explore.com/assets/img/testimonial/2.webp", location: "Andaman" },
  { img: "https://go4explore.com/assets/img/testimonial/3.webp", location: "Kedarkantha" },
  { img: "https://go4explore.com/assets/img/testimonial/4.webp", location: "Kedarnath" },
  { img: "https://go4explore.com/assets/img/testimonial/5.webp", location: "Kerala" },
  { img: "https://go4explore.com/assets/img/testimonial/6.webp", location: "Ladakh" },
  { img: "https://go4explore.com/assets/img/testimonial/7.webp", location: "Manali" },
  { img: "https://go4explore.com/assets/img/testimonial/8.webp", location: "Spiti Valley" },
  { img: "https://go4explore.com/assets/img/testimonial/9.webp", location: "Thailand" },
  { img: "https://go4explore.com/assets/img/testimonial/10.webp", location: "Tirthan Valley" },
  { img: "https://go4explore.com/assets/img/testimonial/12.webp", location: "Udaipur" },
  { img: "https://go4explore.com/assets/img/testimonial/13.webp", location: "Vietnam" }
];
const reviewDetails = [
  {
    initial: "U",
    name: "Ujjawal Sharma",
    booked: "Booked: Chopta-Tungnath-Deoriatal",
    review: "Never have I chosen a group travel option. I had never been on group trip with so many other people before. It was a wonderful and lifetime experience. If I had..."
  },
  {
    initial: "L",
    name: "Lovena Singhani",
    booked: "Booked: Manali Sissu",
    review: "I had a wonderful experience during my weekend Manali-Sissu trip. Food, accommodation and travel throughout the journey was great. The trip ..."
  },
  {
    initial: "D",
    name: "Dhruv Bajpai",
    booked: "Booked: Spiti Valley Circuit Trip",
    review: "Hi! I went with go4explore on their weekend getaway trip to Tirthan valley in the 1st week of May and I'll be understating this when I say that..."
  },
  {
    initial: "T",
    name: "T G Narayanan",
    booked: "Booked: Kasol Kheerganga Trek",
    review: "The Kasol-Kheerganga trek by Go4Explore was conducted exceptionally well. Special thanks to our team leader (group captain) Nikhil Sharma..."
  },
  {
    initial: "R",
    name: "Rohit Sharma",
    booked: "Booked: Mcleodganj & Triund Trek",
    review: "It was an amazing experience with go4explore.... I am really grateful that I got such a knowledgeable & suppportive trek leader \"vaibhav\" who..."
  },
  {
    initial: "H",
    name: "Hemanth",
    booked: "Booked: Bhutan Backpacking",
    review: "Our trip to Bhutan was great! Our guide huangin and our driver Mr Jemun were super nice, knowledgeable and accommodating and..."
  },
  {
    initial: "S",
    name: "Sapna Bharti",
    booked: "Booked: Mcleodganj & Triund Trek",
    review: "The experience was great. We started from bhagsu and took us 6 hrs to reach the top. The time varies considering the fitness..."
  },
  {
    initial: "S",
    name: "Shreya Chauhan",
    booked: "Booked: Bhutan Backpacking 7D6N",
    review: "Perfect 7-day solo trip to Bhutan go4explore gave me a fantastic 4-day tour of the Western part of country. I did the \"standard\" trip of Thimphu, Punakha, and Paro,..."
  },
  {
    initial: "S",
    name: "Simran",
    booked: "Booked: Chopta-Tungnath-Deoriatal",
    review: "It was a great trip with go4explore. The journey was amazing, the location was enchanting and extremely beautiful the trek guide were very good and helpful the..."
  },
  {
    initial: "J",
    name: "Jyoti",
    booked: "Booked: Kedarkantha Trek",
    review: "Leaving behind the distractions of social media for an off-the-grid adventure can be so amazing. I experienced at kedarkantha trek I visited this place ..."
  },
  {
    initial: "A",
    name: "Atharva Mhetar",
    booked: "Booked: Spiti Valley Circuit Trip",
    review: "Went on a Spiti Valley full circuit trip with my friends starting 3rd June via Go4Explore. It was an amazing experience. Our trip captain - Rishab Nag..."
  },
  {
    initial: "T",
    name: "Tarana Vaswani",
    booked: "Booked: Tungnath Kedarnath 5D4N",
    review: "It was our first time with Go4Explore, we went to Kedarnath & tungnath with family and it was a great experience. Everything was arranged & services were also good..."
  }
];

  return (
       <section className="w-full   px-4 md:px-10 bg-white">
      {/* Outer container uses max-width to prevent stretching on ultra-wide screens */}
      <div className="max-w-7xl mx-auto 
       rounded-[2rem] overflow-hidden ">
        
        {/* 1. Header Section */}
        <div className=" ">
      <h1 className="w-full flex justify-center items-center py-2 text-xl
      md:text-3xl font-[800] text-[#2755B0] mb-3 md:mb-8">
        Happy Faces & Stories
      </h1>
 <div className="flex md:hidden  overflow-hidden">
<div className="h-full animate-marquee flex flex-row gap-2">
      {/* FIRST COPY */}
      <div className="grid grid-cols-2 gap-2 w-full shrink-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
        <div className="h-35">  <ReviewCard data={reviewDetails[0]} /></div>
        <div className="h-50">  <ImageCard data={visualContent[0]} /></div>
          <div className="h-35">  <ReviewCard data={reviewDetails[0]} /></div>          
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <div className="h-45"><ImageCard data={visualContent[2]} /></div>
          <div className="h-30"><ReviewCard data={reviewDetails[2]} /></div>         
        <div className="h-45"><ImageCard data={visualContent[3]} /></div>           
        </div>

      </div>

            <div className="grid grid-cols-2 gap-2 w-full shrink-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
        <div className="h-35">  <ReviewCard data={reviewDetails[0]} /></div>
        <div className="h-50">  <ImageCard data={visualContent[0]} /></div>
          <div className="h-35">  <ReviewCard data={reviewDetails[0]} /></div>          
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <div className="h-45"><ImageCard data={visualContent[2]} /></div>
          <div className="h-30"><ReviewCard data={reviewDetails[2]} /></div>         
        <div className="h-45"><ImageCard data={visualContent[3]} /></div>           
        </div>

      </div>

</div>


    </div>

      <div className="hidden md:flex overflow-hidden h-full">
        <div className="flex h-full animate-marquee gap-4">

          {/* FIRST COPY */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full w-full shrink-0">

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] ">
                <ReviewCard data={reviewDetails[0]}  />
              </div>
              <div className="h-[50%]  rounded-xl">
                  <ImageCard data={visualContent[0]} />
              </div>
              <div className="h-[25%]  rounded-xl">
                <ReviewCard data={reviewDetails[1]}  />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] rounded-xl">
                  <ImageCard data={visualContent[1]} />
              </div>
              <div className="h-[30%] rounded-xl">
                <ReviewCard data={reviewDetails[2]}  />
              </div>
              <div className="h-[35%]  rounded-xl">
                  <ImageCard data={visualContent[2]} />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] rounded-xl">
                <ReviewCard data={reviewDetails[3]}  />
              </div>
              <div className="h-[50%] rounded-xl">
                  <ImageCard data={visualContent[3]} />
              </div>
              <div className="h-[25%]  rounded-xl">
                <ReviewCard data={reviewDetails[4]}  />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] rounded-xl">
                  <ImageCard data={visualContent[4]} />
              </div>
              <div className="h-[30%]  rounded-xl">
                <ReviewCard data={reviewDetails[5]}  />
              </div>
              <div className="h-[35%]  rounded-xl">
                  <ImageCard data={visualContent[5]} />
              </div>
            </div>

          </div>

          {/* SECOND COPY (duplicate for seamless loop) */}
          <div className="grid grid-2 grid-cols-4 gap-4 h-full w-full shrink-0">


            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] ">
                <ReviewCard data={reviewDetails[6]}  />
              </div>
              <div className="h-[50%]  rounded-xl">
                  <ImageCard data={visualContent[6]} />
              </div>
              <div className="h-[25%]  rounded-xl">
                <ReviewCard data={reviewDetails[7]}  />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] rounded-xl">
                  <ImageCard data={visualContent[7]} />
              </div>
              <div className="h-[30%] rounded-xl">
                <ReviewCard data={reviewDetails[8]}  />
              </div>
              <div className="h-[35%]  rounded-xl">
                  <ImageCard data={visualContent[8]} />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] rounded-xl">
                <ReviewCard data={reviewDetails[9]}  />
              </div>
              <div className="h-[50%] rounded-xl">
                  <ImageCard data={visualContent[9]} />
              </div>
              <div className="h-[25%]  rounded-xl">
                <ReviewCard data={reviewDetails[10]}  />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] rounded-xl">
                  <ImageCard data={visualContent[10]} />
              </div>
              <div className="h-[30%]  rounded-xl">
                <ReviewCard data={reviewDetails[11]}  />
              </div>
              <div className="h-[35%]  rounded-xl">
                  <ImageCard data={visualContent[11]} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    </div>
  </section>
  );
}


const ReviewCard = ({ data }) => {
  return (
<div className="bg-white border border-gray-100 px-3 py-4 md:px-8
md:py-5 justify-center items-start
rounded-2xl md:rounded-3xl 
shadow-sm hover:shadow-md 
transition-shadow duration-300
flex flex-col justify-between 
h-full w-full
overflow-hidden gap-2">

  {/* Header */}
  <div className="flex items-start gap-2 mb:gap-3 mb-1 mb:mb-3">

    <div className="w-7 h-7 md:w-8 md:h-8 
    rounded-full bg-[#fefe00]
    flex items-center justify-center 
    text-black font-bold 
    text-sm md:text-lg 
    shrink-0">
      {data?.initial}
    </div>

    <div className="flex flex-col text-wrap">
      <h5 className="text-xs font-semibold text-gray-800 truncate">
        {data?.name}
      </h5>
      <p className="text-[9px] md:text-[11px] text-gray-500 truncate text-wrap">
        {data?.booked}
      </p>
    </div>

  </div>

  {/* Review Content */}
  <div className="flex-1">
    <p className="text-xs md:text-sm text-gray-800 
    tracking-tight md:tracking-normal 
   font-normal
    line-clamp-3 md:line-clamp-4 ">
      {data?.review}
    </p>
  </div>

</div>
  );
};
function ImageCard({ data }) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer">

      {/* Image */}
      <img
        src={data?.img}
        alt={data?.location}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
<div className="absolute inset-0 bg-black/10"></div>
      {/* Top Location Badge */}
      <div className="absolute bottom-3 left-1 
      flex  text-white text-xs md:text-sm px-3 py-1 rounded-full font-medium ">
       <IoLocationSharp size={18}/> {data?.location}
      </div>

    </div>
  );
}
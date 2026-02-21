import Image from "next/image";

export function Hero_Image  () {
    return (<>
    <section className="relative w-full h-[77vh]  overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://d2qa7a8q0vuocm.cloudfront.net/images/18409920240105072501.png" // Replace with your actual image path
        alt="Vietnam Tour Packages"
        fill
        priority
        className="absolute h-90 object-cover inset-x-0 bottom-60"
      />
  {/* Dark Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/0 to-transparent" />
{/* Content Container */}
<div className="absolute inset-0 z-10 h-full max-w-7xl mx-auto px-6 md:px-18  

  flex flex-col justify-start pt-10 md:pt-15 text-white">
  
  {/* Title */}
  <h1 className="text-2xl md:text-4xl font-extrabold mb-8 tracking-tight">
    Vietnam Tour Packages
  </h1>

  {/* Subtitle */}
  <p className="text-lg md:text-xl font-medium mb-20">
    Explore Vietnam Tour Packages with Go4Explore
  </p>

  {/* Pricing */}
  <div className="mb-6 flex items-center gap-2">
    <span className="text-xl md:text-xl font-semibold">Starting Price:</span>
    <span className="text-xl md:text-xl font-bold text-[#F9E400]">
      ₹32,000 per person
    </span>
  </div>

  {/* CTA Button */}
  <button className="w-fit px-8 py-2 bg-[#F9E400] 
  text-black font-bold rounded-full text-medium  
  shadow-lg ">
    
    Request Callback
  </button>
  
</div>
</section>
       </>
    )
}

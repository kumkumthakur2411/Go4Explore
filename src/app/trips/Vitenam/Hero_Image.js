import Image from "next/image";

export function Hero_Image  () {
    return (<>
<section className="relative w-full h-[71vh] overflow-hidden  ">

  <Image
    src="https://d2qa7a8q0vuocm.cloudfront.net/images/18409920240105072501.png"
    alt="Vietnam Tour Packages"
   width={200}
   height={200}
    priority
    className="object-contain w-full h-full "
  />



  {/* Desktop Gradient Overlay */}
  <div className="hidden md:block absolute inset-0 
  bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

  {/* Desktop Content */}
  <div className="hidden md:flex absolute inset-0 z-10 max-w-7xl mx-auto px-6 
  lg:px-16 flex-col py-7 text-white">
    
    <h1 className="text-xl lg:text-4xl font-black mb-6">
      Vietnam Tour Packages
    </h1>

    <p className="text-lg lg:text-xl mb-10 font-medium">
      Explore Vietnam Tour Packages with Go4Explore
    </p>

    <div className="mb-6 flex items-center gap-2 mt-14">
      <span className="text-lg font-semibold">Starting Price:</span>
      <span className="text-xl font-bold text-[#F9E400]">
        ₹32,000 per person
      </span>
    </div>

    <button className="w-fit px-8 py-3 bg-[#F9E400] text-black font-bold rounded-full shadow-lg hover:scale-105 transition">
      Request Callback
    </button>
  </div>

  {/* Mobile Card Layout */}
  <div className="absolute bottom-0 left-0 right-0 md:hidden z-20">
    <div className="bg-white rounded-t-4xl p-6 shadow-xl text-black justify-center flex flex-col items-center">

      <h1 className="text-xl font-extrabold mb-3">
        Vietnam Tour Packages
      </h1>

      <p className="text-xs mb-4 font-semibold">
        Explore Vietnam Tour Packages with Go4Explore
      </p>

      <p className="text-xs mb-4">
        <span className="font-medium">Starting Price:</span>{" "}
        <span className="font-bold">₹32,000 per person</span>
      </p>

      <button className="px-6 py-3 bg-[#F9E400] text-black font-bold rounded-full shadow-md">
        Request Callback
      </button>

    </div>
  </div>

</section>
       </>
    )
}

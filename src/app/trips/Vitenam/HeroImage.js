import Image from "next/image";

export function HeroImage  () {
    return (<>

    <section className="relative w-full h-auto md:h-[75vh]  bg-white overflow-hidden">
      
      {/* --- BACKGROUND IMAGE SECTION --- */}
      <div className="relative w-full h-[400px] md:absolute md:inset-0 md:h-[77vh]">
        <Image
          src="https://d2qa7a8q0vuocm.cloudfront.net/images/18409920240105072501.png"
          alt="Vietnam Tour Packages"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* Desktop Gradient: Only visible from MD screen up */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent z-10" />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-20 w-full md:max-w-[1200px] mx-0 md:mx-40">
        
        {/* Mobile View: White Card Overlay */}
        {/* Desktop View: Transparent Left-aligned Content */}
        <div className="
          /* Mobile Styles */
          -mt-12 mx-0 md:mx-5 md:p-6 bg-white rounded-t-[32px]  text-black lg:mt-5
          /* Tablet/Desktop Styles */
          md:mt-0 md:mx-0 md:bg-transparent md:text-white md:h-[77vh] lg:h-[77vh] 
          md:flex md:flex-col  md:px-10 lg:px-0
        ">
          
          <div className=" ">
            <div className="md:mb-60">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 leading-tight">
              Vietnam Tour Packages
            </h1>

            <p className="text-sm md:text-lg lg:text-2xl font-medium mb-6 md:mb-10 text-white">
              Explore Vietnam Tour Packages with Go4Explore
            </p>
</div>
            {/* Price & CTA Box */}
          <div className="flex flex-col   gap-6 md:gap-10">
              
              {/* Price Details */}
              <div className="flex  items-center md:items-start">
                <span className="text-[10px] md:text-xs lg:text-[20px] uppercase 
                tracking-[0.2em] text-gray-400 md:text-white 
                font-bold mb-1">
                  Starting Price :
                </span>
                <span className="text-normal lg:text-[20px] font-bold  
                md:text-[#F9E400] ">
                  ₹32,000 
                  
                    per person
                  
                </span>
              </div>

              {/* CTA Button */}
              <button className="w-full md:w-fit bg-[#F9E400] 
              text-black font-bold py-4 px-10 rounded-xl md:rounded-full              
              shadow-lg   text-sm md:text-xl tracking-wider">
                Request Callback
              </button>
              
            </div>
          </div>
          </div>

        </div>
      {/* </div>     */}
    </section>

       </>
    )
}

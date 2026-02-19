export default function TestimonialSection() {
  return (
    <div className="w-[90%] h-screen mx-auto  ">
      <h1 className="w-full flex justify-center items-center py-8 text-3xl font-extrabold text-black mb-8">
        Happy Faces & Stories
      </h1>
      <div className="overflow-hidden h-full">

        <div className="flex h-full animate-marquee gap-4">

          {/* FIRST COPY */}
          <div className="grid grid-cols-4 gap-4 h-full w-full shrink-0">

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

          </div>

          {/* SECOND COPY (duplicate for seamless loop) */}
          <div className="grid grid-cols-4 gap-4 h-full w-full shrink-0">

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
              <div className="h-[50%] bg-blue-600 rounded-xl"></div>
              <div className="h-[25%] bg-blue-400 rounded-xl"></div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
              <div className="h-[30%] bg-green-600 rounded-xl"></div>
              <div className="h-[35%] bg-green-400 rounded-xl"></div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


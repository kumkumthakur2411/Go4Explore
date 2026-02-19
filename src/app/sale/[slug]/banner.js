export default function Banner() {
    return (
        <section className="relative w-full h-[75vh] overflow-hidden">
            {/* Background Image */}
            <img
                src="https://go4explore.com/assets/img/sale-page/sale-header.jpg"
                alt="Banner"
                className="w-full h-full object-cover"
            />

            {/* Overlay: .d-ybo .content-zo5 .overlay-8ca */}
            <div className="absolute inset-0 w-full h-[76vh] bg-black/70 flex justify-center z-[4]">
                {/* Logo Container: .sale-pg-ban-2vi */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[430px] z-[2]">
                    <img
                        src="https://go4explore.com/assets/img/sale-page/sale_logo.webp"
                        alt="Sale Logo"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Button Section: .btn-fk6 .btn-ioz */}
                <div className="absolute bottom-[10%]">
                    <a
                        href="#offers"
                        className="text-black font-semibold bg-[#fff500] rounded-[40px] px-[25px] py-[10px] text-[18px] mt-[6px] inline-block transition-all duration-300"
                    >
                        Early Bird Offers 2026
                    </a>
                </div>
            </div>
        </section>
    );
}
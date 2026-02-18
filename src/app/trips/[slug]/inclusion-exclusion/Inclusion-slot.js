import { tripData } from "../../data";

export default function Inclusion() {
  return (
    <section
      id="inclusions"
      className="w-full bg-[#f5fff6] p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24"
    >
      <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#200f0d] mb-4 tracking-normal">Inclusions</h4>
      <hr className="my-3 border-t border-black opacity-30" />

      <ul className="list-none pl-0">
        {tripData.inclusions.map((item, index) => (
          <li
            key={index}
            className="relative pl-[33px] py-[6px] text-gray-900 text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-relaxed tracking-normal"
          >
            {/* Custom Icon Bullet */}
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: 'url("https://go4explore.com/assets/img/trip-detail/correct.webp")' }}
            ></span>
            {item.text || item.title}
          </li>
        ))}
      </ul>
    </section >
  );
}

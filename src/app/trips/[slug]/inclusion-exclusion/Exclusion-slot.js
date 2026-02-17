import { tripData } from "../../data";

export default function Exclusion() {
  return (
    <section
      id="exclusions"
      className="w-full bg-[#fef4f3] p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24"
    >
      <h4 className="text-[24px] font-semibold text-[#200f0d] mb-4 tracking-normal">Exclusions</h4>
      <hr className="border-[#dee2e6] mb-8 opacity-50" />

      <ul className="list-none pl-0">
        {tripData.exclusions.map((item, index) => (
          <li
            key={index}
            className="relative pl-[33px] py-[6px] text-gray-900 text-[16px] font-normal leading-relaxed tracking-normal"
          >
            {/* Custom Icon Bullet - Red Cross */}
            <span
              className="absolute left-0 top-[10px] w-4 h-4 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: 'url("https://go4explore.com/assets/img/trip-detail/worng.webp")' }}
            ></span>
            {item.text || item.title}
          </li>
        ))}
      </ul>
    </section >
  );
}

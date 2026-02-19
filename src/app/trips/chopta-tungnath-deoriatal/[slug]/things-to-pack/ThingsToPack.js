import { tripData } from "../../data";

export default function ThingsToPack() {
    // Specifically using the data provided in the HTML snippet
    const packingItems = [
        {
            icon: "https://d2qa7a8q0vuocm.cloudfront.net/thingsToPack/1760723945397-1760723945144_5261020250821080750.webp",
            text: "Good quality rucksack (preferably 40-60 liters) & a small day bag pack (for hikes/treks purpose) with rain-cover is recommended, easy to carry trolley bag."
        },
        {
            icon: "https://d2qa7a8q0vuocm.cloudfront.net/thingsToPack/1760723900867-1760723900499_9170920250825123607.webp",
            text: "Heavy down jacket, light fleece, long track/cargo pants, long/short sleeves T-shirts, body thermal wears (as per season), sun cap/hat, woolen cap & gloves (as per season), hoodie, raincoats/ponchos."
        },
        {
            icon: "https://d2qa7a8q0vuocm.cloudfront.net/thingsToPack/1760723927298-1760723926873_7672820250825123523.webp",
            text: "A pair of shoes (mainly trekking/sports) with good grip & waterproof, atleast 2 pair of socks & floaters/sandals/slippers."
        },
        {
            icon: "https://d2qa7a8q0vuocm.cloudfront.net/thingsToPack/1760723883900-1760723883642_14435720250825123645.webp",
            text: "Personal care items like cold cream & moisturiser, sunscreen (preferably SPF40), lip balm, sanitary pads, toothpaste & other toiletries, wet wipes, hand sanitizer, insect repellent, body spray."
        },
        {
            icon: "https://d2qa7a8q0vuocm.cloudfront.net/thingsToPack/1760723860551-1760723860300_11222620250825123717.webp",
            text: "Personal medication (as prescribed by the doctor) & first-aid, sprain relief spray, glucose powder, tablets for headache, fever, diarrhea, motion sickness, dettol & cotton/bandages."
        },
        {
            icon: "https://d2qa7a8q0vuocm.cloudfront.net/thingsToPack/1760723844262-1760723844024_528220250825123752.webp",
            text: "Personal documents & ID's like aadhar card, drivers license, passport or any other valid Government ID proofs."
        },
        {
            icon: "https://d2qa7a8q0vuocm.cloudfront.net/thingsToPack/1760723824997-1760723824737_7654520250825123857.webp",
            text: "Sunglasses, charger, power bank, quick dry towel, adequate amount of cash, quick snacks/dryfruits/energy bars, trash & waterproof laundry bags, re-usable water bottle."
        }
    ];

    return (
        <section
            className="w-full bg-white p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24"
        >
            <h4 className="text-[24px] font-medium text-[#200f0d] mb-4 tracking-normal">Things To Pack</h4>

            <hr className="my-3 border-t border-black opacity-30" />

            <ul className="list-none p-0 m-0">
                {packingItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-5 pb-3 md:py-[12px] text-[#35211f] !text-[12px] md:!text-[16px] font-normal leading-[19px] md:leading-[24px] tracking-normal">
                        <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center">
                            <img src={item.icon} alt="pack icon" className="w-full h-auto object-contain" />
                        </div>
                        <span className="flex-1">{item.text}</span>
                    </li>
                ))}
            </ul>
        </section >
    );
}

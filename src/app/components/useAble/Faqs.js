import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection({ faqArray }) {
  return (
    // Adjust width for responsiveness: full on mobile, 90% on larger screens
    <div className="w-full md:w-[90%] mx-auto p-2 md:p-4 flex flex-col items-center">
      <h1 className="w-full text-2xl md:text-3xl font-extrabold text-[#2755B0] text-center mb-8">
        FAQs: Have Any Doubts?
      </h1>

      {/* Remove the border from the main container to allow individual items to stand out */}
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4" // Gap creates the space between cards seen in the image
      >
        {faqArray && faqArray.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            // White background, shadow, and rounded corners for the "card" look
            className="border border-gray-100 rounded-lg shadow-sm bg-white px-4 md:px-6 overflow-hidden"
          >
            <AccordionTrigger className="font-semibold text-sm md:text-base text-left hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 pb-4">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

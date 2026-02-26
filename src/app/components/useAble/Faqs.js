import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection({ faqArray }) {
  return (
    // 1. Changed md:w-[90%] to max-w-5xl for better centering and zoom resilience
    <section className="w-full max-w-7xl mx-auto px-2 md:px-0 py-5 ">
      
      {/* 2. Headline with responsive scaling and logical margin */}
      <h2 className="text-xl md:text-2xl font-[800] text-[#2755B0] text-center mb-10 tracking-tight">
        FAQs: Have Any Doubts?
      </h2>

      {/* 3. Accordion container with relative gap for zoom spacing */}
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4 md:gap-5"
      >
        {faqArray && faqArray.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            // 4. Enhanced 'Card' look with better padding and border logic
            className="border border-gray-200 rounded-xl 
             bg-white px-5  transition-all  shadow-md overflow-hidden"
          >
            {/* 5. Trigger with min-h to prevent layout shift during zoom */}
            <AccordionTrigger className="py-4 font-semibold text-sm 
            md:text-base text-left hover:no-underline text-gray-800 transition-colors group">
              <span className="">
                {faq.question}
              </span>
            </AccordionTrigger>

            {/* 6. Content with leading-relaxed for legibility on high zoom */}
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed pb-6 border-t border-gray-50 pt-4">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
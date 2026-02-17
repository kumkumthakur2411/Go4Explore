import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const faqs = [
  {
    value: "shipping",
    question: "What are your shipping options?",
    answer:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
  },
  {
    value: "returns",
    question: "What is your return policy?",
    answer:
      "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
  },
  {
    value: "support",
    question: "How can I contact customer support?",
    answer:
      "Reach us via email, live chat, or phone. We respond within 24 hours during business days.",
  },
];

export function FaqsSection() {
  return (
    <div className="w-[90%]   p-4">
      <h1 className="w-full text-3xl font-extrabold text-[#2755B0] justify-center items-center">FAQs: Have Any Doubts?</h1>
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="w-full border border-gray-200 rounded-xl"
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.value}
            value={faq.value}
            className="border-b last:border-none"
          >
            <AccordionTrigger className="font-semibold text-base">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}


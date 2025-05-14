"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
        {t("title")}
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {Array.from({ length: 15 }).map((_, index) => {
          const key = `questions.${index}`;
          return (
            <AccordionItem
              key={key}
              value={`item-${index}`}
              className="bg-gray-50 rounded-lg"
            >
              <AccordionTrigger className="px-4 hover:no-underline text-sm md:text-base">
                {t(`${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-sm md:text-base">
                {t(`${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

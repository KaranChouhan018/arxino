"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq: React.FC = () => {
  const t = useTranslations("contact");
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: t("faq1_question"), answer: t("faq1_answer") },
    { question: t("faq2_question"), answer: t("faq2_answer") },
    { question: t("faq3_question"), answer: t("faq3_answer") },
    { question: t("faq4_question"), answer: t("faq4_answer") },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20" id="faq">
      <div className="max-w-3xl md:max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14">
          {t("faq_title")}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-[1px] border-gray-200 px-2    transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-2 py-5 text-left text-lg font-semibold text-gray-900 focus:outline-none"
              >
                <span className="pr-2">{faq.question}</span>
                <span className="ml-2 flex-shrink-0">
                  {open === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                  )}
                </span>
              </button>

              {/* Animated Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

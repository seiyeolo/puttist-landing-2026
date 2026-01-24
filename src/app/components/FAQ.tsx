import React, { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  questionKey: string;
  answerKey: string;
}

const faqItems: FAQItem[] = [
  { questionKey: 'faq.q1', answerKey: 'faq.a1' },
  { questionKey: 'faq.q2', answerKey: 'faq.a2' },
  { questionKey: 'faq.q3', answerKey: 'faq.a3' },
  { questionKey: 'faq.q4', answerKey: 'faq.a4' },
  { questionKey: 'faq.q5', answerKey: 'faq.a5' },
  { questionKey: 'faq.q6', answerKey: 'faq.a6' },
  { questionKey: 'faq.q7', answerKey: 'faq.a7' },
  { questionKey: 'faq.q8', answerKey: 'faq.a8' },
  { questionKey: 'faq.q9', answerKey: 'faq.a9' },
  { questionKey: 'faq.q10', answerKey: 'faq.a10' },
];

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#0F1B2D] to-[#0A1628]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-4 text-white">
          {t('faq.title')}
        </h2>
        <p className="text-center text-base md:text-lg text-[#9CA3AF] mb-12">
          {t('faq.subtitle')}
        </p>

        <div 
          className="space-y-4"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FF8C42]"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <h3 
                  className="text-base md:text-lg font-semibold text-white pr-4"
                  itemProp="name"
                >
                  {t(item.questionKey)}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#FF8C42] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div 
                  className="px-6 pb-5 text-[#D1D5DB] text-sm md:text-base leading-relaxed"
                  itemProp="text"
                >
                  {t(item.answerKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

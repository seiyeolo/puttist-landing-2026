import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const CTA: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="buy" ref={sectionRef} className="py-24 px-8 bg-[#0F1B2D] text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className={`text-5xl font-extrabold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('cta.title')}
        </h2>
        <p className={`text-xl text-[#9CA3AF] mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('cta.subtitle')}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="https://smartstore.naver.com/3puttkiller" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF8C42] text-[#0A1628] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-[#FF9C5A] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,140,66,0.3)] inline-block"
          >
            {t('cta.button_naver')}
          </a>
          <a 
            href="https://www.amazon.com/dp/B0CRK3JKXT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent text-[#FF8C42] px-8 py-4 rounded-lg font-bold text-lg border-2 border-[#FF8C42] transition-all duration-300 hover:bg-[rgba(255,140,66,0.1)] hover:-translate-y-1 inline-block"
          >
            {t('cta.button_amazon')}
          </a>
        </div>
      </div>
    </section>
  );
};

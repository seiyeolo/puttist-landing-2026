import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const Features: React.FC = () => {
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
    <section id="features" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-8 bg-[#0F1B2D]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className={`text-center text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('features.title')}
        </h2>
        <p className={`text-center text-base md:text-xl text-[#9CA3AF] mb-12 md:mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('features.subtitle')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-6 md:p-10 transition-all duration-700 delay-200 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 md:w-15 md:h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6">
              📏
            </div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#FF8C42]">{t('features.distance_title')}</h3>
            <p className="text-sm md:text-base text-[#D1D5DB] leading-relaxed">{t('features.distance_desc')}</p>
          </div>
          
          <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-6 md:p-10 transition-all duration-700 delay-300 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 md:w-15 md:h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6">
              📐
            </div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#FF8C42]">{t('features.width_title')}</h3>
            <p className="text-sm md:text-base text-[#D1D5DB] leading-relaxed">{t('features.width_desc')}</p>
          </div>
          
          <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-6 md:p-10 transition-all duration-700 delay-400 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 md:w-15 md:h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6">
              🎒
            </div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#FF8C42]">{t('features.portable_title')}</h3>
            <p className="text-sm md:text-base text-[#D1D5DB] leading-relaxed">{t('features.portable_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
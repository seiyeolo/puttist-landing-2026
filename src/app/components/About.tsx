import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const About: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-24 px-8 bg-gradient-to-br from-[#0A1628] via-[#162336] to-[#1A2942]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className={`text-center text-5xl font-extrabold mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('about.title')}
        </h2>
        
        <div className="max-w-[1000px] mx-auto grid gap-8">
          {/* Story Card */}
          <div className={`text-center p-12 bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-[#FF8C42] text-3xl mb-6">{t('about.origin_title')}</h3>
            <p className="text-lg leading-relaxed mb-8 text-[rgba(255,255,255,0.9)]">
              {t('about.origin_text')}
            </p>
          </div>

          {/* Philosophy Card */}
          <div className={`p-12 bg-[rgba(255,140,66,0.05)] border-2 border-[rgba(255,140,66,0.2)] rounded-2xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-[#FF8C42] text-3xl mb-6 text-center">{t('about.philosophy_title')}</h3>
            <p className="text-lg leading-relaxed text-[rgba(255,255,255,0.9)] text-center">
              {t('about.philosophy_text')}
            </p>
          </div>

          {/* Core Concept Card - 20 Putters */}
          <div className={`p-12 bg-gradient-to-br from-[rgba(255,140,66,0.1)] to-[rgba(255,140,66,0.05)] border-2 border-[#FF8C42] rounded-2xl shadow-[0_20px_60px_rgba(255,140,66,0.2)] transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-[#FF8C42] text-3xl mb-6 text-center font-bold">{t('about.core_concept_title')}</h3>
            <p className="text-lg leading-relaxed text-white text-center">
              {t('about.core_concept_text')}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF8C42] rounded-lg">
                <span className="text-2xl">🏌️</span>
                <span className="text-white font-bold">실전 그린보다 먼저 학습해야 하는 필수 코스</span>
              </div>
            </div>
          </div>

          {/* Innovation Title */}
          <div className="text-center my-12">
            <h3 className="text-[#FF8C42] text-3xl mb-4">{t('about.innovation_title')}</h3>
          </div>

          {/* Innovation Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-10 transition-all duration-700 delay-300 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-15 h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-3xl mb-6">🎨</div>
              <h3 className="text-xl mb-4 text-white">{t('about.feature1_title')}</h3>
              <p className="text-[#D1D5DB]">{t('about.feature1_desc')}</p>
            </div>

            <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-10 transition-all duration-700 delay-400 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-15 h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-3xl mb-6">🔴</div>
              <h3 className="text-xl mb-4 text-white">{t('about.feature2_title')}</h3>
              <p className="text-[#D1D5DB]">{t('about.feature2_desc')}</p>
            </div>

            <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-10 transition-all duration-700 delay-500 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-15 h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-3xl mb-6">📏</div>
              <h3 className="text-xl mb-4 text-white">{t('about.feature3_title')}</h3>
              <p className="text-[#D1D5DB]">{t('about.feature3_desc')}</p>
            </div>

            <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-10 transition-all duration-700 delay-600 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-15 h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-3xl mb-6">🔌</div>
              <h3 className="text-xl mb-4 text-white">{t('about.feature4_title')}</h3>
              <p className="text-[#D1D5DB]">{t('about.feature4_desc')}</p>
            </div>

            <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-10 transition-all duration-700 delay-700 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-15 h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-3xl mb-6">🎮</div>
              <h3 className="text-xl mb-4 text-white">{t('about.feature5_title')}</h3>
              <p className="text-[#D1D5DB]">{t('about.feature5_desc')}</p>
            </div>

            <div className={`bg-[rgba(255,140,66,0.05)] border border-[rgba(255,140,66,0.2)] rounded-2xl p-10 transition-all duration-700 delay-800 hover:-translate-y-3 hover:border-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,140,66,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-15 h-15 bg-[#FF8C42] rounded-xl flex items-center justify-center text-3xl mb-6">🏠</div>
              <h3 className="text-xl mb-4 text-white">{t('about.feature6_title')}</h3>
              <p className="text-[#D1D5DB]">{t('about.feature6_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

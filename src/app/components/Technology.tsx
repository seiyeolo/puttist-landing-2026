import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const Technology: React.FC = () => {
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
    <section id="technology" ref={sectionRef} className="py-24 px-8 bg-gradient-to-b from-[#0A1628] to-[#1A2F4F]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center">
          <h2 className={`text-5xl font-extrabold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('technology.title')}
          </h2>
          <p className={`text-xl text-[#9CA3AF] mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('technology.subtitle')}
          </p>
          
          <div className="my-12">
            <img 
              src="https://static.wixstatic.com/media/461f66_03e93177d7144988ae9ea3dd8426bdd1~mv2.gif" 
              alt="PUTTIST II Animation" 
              className="max-w-[600px] w-full mx-auto rounded-2xl shadow-[0_20px_60px_rgba(255,140,66,0.3)]"
            />
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className={`p-8 bg-[rgba(255,140,66,0.03)] rounded-xl border border-[rgba(255,140,66,0.1)] transition-all duration-700 delay-200 hover:bg-[rgba(255,140,66,0.08)] hover:border-[#FF8C42] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-[#FF8C42] text-xl mb-2">{t('technology.precision_title')}</h4>
              <p className="text-[#D1D5DB]">{t('technology.precision_desc')}</p>
            </div>
            
            <div className={`p-8 bg-[rgba(255,140,66,0.03)] rounded-xl border border-[rgba(255,140,66,0.1)] transition-all duration-700 delay-300 hover:bg-[rgba(255,140,66,0.08)] hover:border-[#FF8C42] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-[#FF8C42] text-xl mb-2">{t('technology.data_title')}</h4>
              <p className="text-[#D1D5DB]">{t('technology.data_desc')}</p>
            </div>
            
            <div className={`p-8 bg-[rgba(255,140,66,0.03)] rounded-xl border border-[rgba(255,140,66,0.1)] transition-all duration-700 delay-400 hover:bg-[rgba(255,140,66,0.08)] hover:border-[#FF8C42] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-[#FF8C42] text-xl mb-2">{t('technology.feedback_title')}</h4>
              <p className="text-[#D1D5DB]">{t('technology.feedback_desc')}</p>
            </div>
            
            <div className={`p-8 bg-[rgba(255,140,66,0.03)] rounded-xl border border-[rgba(255,140,66,0.1)] transition-all duration-700 delay-500 hover:bg-[rgba(255,140,66,0.08)] hover:border-[#FF8C42] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-[#FF8C42] text-xl mb-2">{t('technology.pro_title')}</h4>
              <p className="text-[#D1D5DB]">{t('technology.pro_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

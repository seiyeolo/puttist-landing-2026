import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const VideoDemo: React.FC = () => {
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
    <section id="demo" ref={sectionRef} className="py-24 px-8 bg-[#0F1B2D]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className={`text-center text-5xl font-extrabold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('demo.title')}
        </h2>
        <p className={`text-center text-xl text-[#9CA3AF] mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('demo.subtitle')}
        </p>
        
        <div className="max-w-[900px] mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/3cYCjylp4xY" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

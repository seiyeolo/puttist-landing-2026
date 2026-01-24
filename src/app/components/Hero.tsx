import React from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKakaoShare = () => {
    alert('카카오톡 공유 기능을 사용하려면 카카오 개발자 키가 필요합니다.');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-24 pt-32 bg-gradient-to-br from-[#0A1628] to-[#1A2F4F] relative overflow-hidden">
      <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,140,66,0.1)_0%,transparent_70%)] animate-pulse pointer-events-none" />
      
      <div className="max-w-[1400px] grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 w-full">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-[#FF8C42]">{t('hero.title')}</span> <span>II</span>
            <br />
            The Putting Meter
          </h1>
          <p className="text-lg md:text-2xl text-[#9CA3AF]">{t('hero.subtitle')}</p>
          <p className="text-base md:text-lg text-[#D1D5DB] leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('features')}
              className="bg-[#FF8C42] text-[#0A1628] px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#FF9C5A] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,140,66,0.3)]"
            >
              {t('hero.learn_more')}
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="bg-transparent text-[#FF8C42] px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base border-2 border-[#FF8C42] transition-all duration-300 hover:bg-[rgba(255,140,66,0.1)] hover:-translate-y-1"
            >
              {t('hero.watch_demo')}
            </button>
            <button
              onClick={handleKakaoShare}
              className="bg-[#FEE500] text-black px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base border-0 transition-all duration-300 hover:bg-[#FFE812] hover:-translate-y-1 flex items-center gap-2"
            >
              <span>{t('share.kakao')}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5">
                <path d="M12 3C6.48 3 2 6.58 2 11c0 2.89 2.07 5.43 5.18 6.87-.23.82-.84 3.01-.97 3.49-.15.56.2.55.42.4.17-.12 2.49-1.66 3.44-2.3.62.08 1.27.12 1.93.12 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <img 
            src="https://static.wixstatic.com/media/461f66_8aca66af7c8f47c7885e2077a62e1a3d~mv2.jpg/v1/fill/w_523,h_565,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/461f66_8aca66af7c8f47c7885e2077a62e1a3d~mv2.jpg" 
            alt="PUTTIST II Product" 
            className="max-w-full h-auto rounded-2xl md:rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
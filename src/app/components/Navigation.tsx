import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { currentLanguage, changeLanguage, t, languageLabels } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled ? 'bg-[rgba(10,22,40,0.98)] backdrop-blur-lg shadow-lg' : 'bg-[rgba(10,22,40,0.95)] backdrop-blur-md'
    } border-b border-[rgba(255,140,66,0.1)]`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img 
            src="https://static.wixstatic.com/media/461f66_b251caa1f1a34ae1a0c28e1a522c592d~mv2.png/v1/fill/w_259,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/puttist_logo_white_II.png" 
            alt="PUTTIST II Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </a>
        
        <div className="flex items-center gap-3 md:gap-8">
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="text-[#E5E7EB] hover:text-[#FF8C42] transition-colors duration-300 font-medium cursor-pointer">{t('nav.features')}</a></li>
            <li><a href="#technology" onClick={(e) => { e.preventDefault(); scrollToSection('technology'); }} className="text-[#E5E7EB] hover:text-[#FF8C42] transition-colors duration-300 font-medium cursor-pointer">{t('nav.technology')}</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-[#E5E7EB] hover:text-[#FF8C42] transition-colors duration-300 font-medium cursor-pointer">{t('nav.about')}</a></li>
            <li><a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="text-[#E5E7EB] hover:text-[#FF8C42] transition-colors duration-300 font-medium cursor-pointer">{t('nav.contact')}</a></li>
          </ul>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,140,66,0.4)] text-sm"
            >
              <span className="hidden md:inline">{languageLabels[currentLanguage as keyof typeof languageLabels]}</span>
              <span className="md:hidden">{languageLabels[currentLanguage as keyof typeof languageLabels].split(' ')[0]}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#1A2942] border border-[rgba(255,255,255,0.1)] rounded-xl min-w-[150px] shadow-2xl overflow-hidden z-50">
                {Object.entries(languageLabels).map(([lang, label]) => (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLanguage(lang);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white hover:bg-[rgba(255,140,66,0.2)] transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <a 
            href="https://smartstore.naver.com/3puttkiller" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF8C42] text-[#0A1628] px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#FF9C5A] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,140,66,0.3)] whitespace-nowrap"
          >
            {t('nav.buy')}
          </a>
        </div>
      </div>
    </nav>
  );
};
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const CountdownBanner: React.FC = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    // localStorage에서 설정 불러오기
    const savedSettings = localStorage.getItem('countdown-settings');
    
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      
      if (!settings.enabled) {
        setIsVisible(false);
        return;
      }
      
      // 설정된 날짜의 23:59:59로 설정
      const targetDate = new Date(settings.endDate + 'T23:59:59');
      setEndDate(targetDate);
      setIsVisible(true);
    } else {
      // 기본값: 3일 후
      const defaultDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
      defaultDate.setHours(23, 59, 59, 999);
      setEndDate(defaultDate);
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!endDate || !isVisible) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      
      if (distance < 0) {
        setIsVisible(false);
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [endDate, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-3 md:py-9 text-center sticky top-[70px] z-[999] shadow-[0_4px_15px_rgba(255,107,53,0.3)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-2.5">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg leading-tight">🔥</span>
            <span className="font-extrabold text-xs tracking-tight leading-tight">{t('countdown.title')}</span>
          </div>
          
          <div className="space-y-1.5">
            <span className="font-bold text-[11px] block">{t('countdown.label')}</span>
            <div className="flex gap-1.5 font-mono font-bold text-sm justify-center">
              <div className="bg-[rgba(255,255,255,0.25)] px-2 py-1 rounded-md min-w-[45px] border border-[rgba(255,255,255,0.4)] text-center">
                <span className="block text-base">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[9px] font-semibold block mt-0.5">{t('countdown.days')}</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.25)] px-2 py-1 rounded-md min-w-[45px] border border-[rgba(255,255,255,0.4)] text-center">
                <span className="block text-base">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] font-semibold block mt-0.5">{t('countdown.hours')}</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.25)] px-2 py-1 rounded-md min-w-[45px] border border-[rgba(255,255,255,0.4)] text-center">
                <span className="block text-base">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] font-semibold block mt-0.5">{t('countdown.minutes')}</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.25)] px-2 py-1 rounded-md min-w-[45px] border border-[rgba(255,255,255,0.4)] text-center">
                <span className="block text-base">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] font-semibold block mt-0.5">{t('countdown.seconds')}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-[#FF6B35] px-3 py-1.5 rounded-full font-extrabold text-xs shadow-md border-2 border-[rgba(255,255,255,0.9)] inline-flex items-center gap-1.5 mx-auto">
            <span className="text-sm leading-none">🎁</span>
            <span>{t('countdown.discount')}</span>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-12 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="text-4xl leading-tight">🔥</span>
            <span className="font-extrabold text-2xl tracking-tight leading-snug">{t('countdown.title')}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="font-bold text-xl leading-snug">{t('countdown.label')}</span>
            <div className="flex gap-3 font-mono font-bold text-2xl">
              <div className="bg-[rgba(255,255,255,0.25)] px-4 py-2.5 rounded-lg min-w-[75px] border-2 border-[rgba(255,255,255,0.4)] shadow-md text-center">
                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-base ml-1 font-semibold">{t('countdown.days')}</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.25)] px-4 py-2.5 rounded-lg min-w-[85px] border-2 border-[rgba(255,255,255,0.4)] shadow-md text-center">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-base ml-1 font-semibold">{t('countdown.hours')}</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.25)] px-4 py-2.5 rounded-lg min-w-[75px] border-2 border-[rgba(255,255,255,0.4)] shadow-md text-center">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-base ml-1 font-semibold">{t('countdown.minutes')}</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.25)] px-4 py-2.5 rounded-lg min-w-[75px] border-2 border-[rgba(255,255,255,0.4)] shadow-md text-center">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-base ml-1 font-semibold">{t('countdown.seconds')}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-[#FF6B35] px-10 py-3 rounded-full font-extrabold text-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] border-[3px] border-[rgba(255,255,255,0.9)] flex items-center gap-2">
            <span className="text-3xl leading-none">🎁</span>
            <span>{t('countdown.discount')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
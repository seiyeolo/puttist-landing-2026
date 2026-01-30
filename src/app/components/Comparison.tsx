import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const Comparison: React.FC = () => {
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
      { threshold: 0.1 }
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
    <section id="comparison" ref={sectionRef} className="py-24 px-8 bg-[#0A1628]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className={`text-center text-5xl font-extrabold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('comparison.title')}
        </h2>
        <p className={`text-center text-xl text-[#9CA3AF] mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('comparison.subtitle')}
        </p>

        <div className={`overflow-x-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <table className="w-full border-collapse bg-[rgba(255,255,255,0.02)] rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[rgba(255,140,66,0.1)]">
                <th className="p-6 text-left text-xl font-bold border-b-2 border-[#FF8C42]">{t('comparison.feature')}</th>
                <th className="p-6 text-center text-xl font-bold border-b-2 border-[#FF8C42] bg-[rgba(255,140,66,0.2)]">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">⭐</span>
                    <span>PUTTIST II</span>
                  </div>
                </th>
                <th className="p-6 text-center text-xl font-bold border-b-2 border-[rgba(255,255,255,0.1)]">{t('comparison.traditional_mat')}</th>
                <th className="p-6 text-center text-xl font-bold border-b-2 border-[rgba(255,255,255,0.1)]">{t('comparison.real_green')}</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Distance Measurement */}
              <tr className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,140,66,0.03)]">
                <td className="p-6 font-semibold">{t('comparison.distance_measurement')}</td>
                <td className="p-6 text-center bg-[rgba(255,140,66,0.05)]">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span className="text-[#FF8C42] font-bold">20m 정밀 측정</span>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">❌</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">측정 불가</div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">⚠️</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">스피드 변동</div>
                </td>
              </tr>

              {/* Row 2: Laser Guide */}
              <tr className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,140,66,0.03)]">
                <td className="p-6 font-semibold">{t('comparison.laser_guide')}</td>
                <td className="p-6 text-center bg-[rgba(255,140,66,0.05)]">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span className="text-[#FF8C42] font-bold">레이저 라인</span>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">❌</span>
                </td>
              </tr>

              {/* Row 3: Practice Volume */}
              <tr className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,140,66,0.03)]">
                <td className="p-6 font-semibold">{t('comparison.practice_volume')}</td>
                <td className="p-6 text-center bg-[rgba(255,140,66,0.05)]">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span className="text-[#FF8C42] font-bold">무한 반복 가능</span>
                    <div className="text-sm text-[#D1D5DB]">공 하나로 연속 연습</div>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">⚠️</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">볼 리턴 필요</div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">❌</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">시간/비용 多</div>
                </td>
              </tr>

              {/* Row 4: Convenience */}
              <tr className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,140,66,0.03)]">
                <td className="p-6 font-semibold">{t('comparison.convenience')}</td>
                <td className="p-6 text-center bg-[rgba(255,140,66,0.05)]">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span className="text-[#FF8C42] font-bold">언제 어디서나</span>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">⚠️</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">공간 필요</div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">❌</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">현장 이동 필수</div>
                </td>
              </tr>

              {/* Row 5: Data Feedback */}
              <tr className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,140,66,0.03)]">
                <td className="p-6 font-semibold">{t('comparison.data_feedback')}</td>
                <td className="p-6 text-center bg-[rgba(255,140,66,0.05)]">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span className="text-[#FF8C42] font-bold">실시간 측정</span>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">⚠️</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">주관적 판단</div>
                </td>
              </tr>

              {/* Row 6: Cost */}
              <tr className="hover:bg-[rgba(255,140,66,0.03)]">
                <td className="p-6 font-semibold">{t('comparison.cost')}</td>
                <td className="p-6 text-center bg-[rgba(255,140,66,0.05)]">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span className="text-[#FF8C42] font-bold">159,000원~</span>
                    <div className="text-sm text-[#D1D5DB]">1회 구매</div>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">⚠️</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">10~30만원</div>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl">💸</span>
                  <div className="text-[#9CA3AF] text-sm mt-1">지속 비용 발생</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className={`mt-12 p-8 bg-gradient-to-r from-[rgba(255,140,66,0.1)] to-[rgba(255,140,66,0.05)] border-2 border-[#FF8C42] rounded-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="text-2xl font-bold text-[#FF8C42] mb-3">{t('comparison.summary_title')}</h3>
              <p className="text-lg text-white leading-relaxed">
                {t('comparison.summary_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

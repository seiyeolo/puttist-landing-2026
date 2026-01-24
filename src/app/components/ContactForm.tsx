import React, { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'personal',
    interests: [] as string[],
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 시뮬레이션: 2초 대기
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form Data:', {
      ...formData,
      timestamp: new Date().toISOString()
    });

    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      purpose: 'personal',
      interests: [],
      message: '',
      privacy: false
    });

    setTimeout(() => {
      setShowSuccess(false);
      setIsSubmitting(false);
    }, 5000);
  };

  const handleInterestChange = (value: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, interests: [...prev.interests, value] }));
    } else {
      setFormData(prev => ({ ...prev, interests: prev.interests.filter(i => i !== value) }));
    }
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-[#0A1628] to-[#1A2F4F]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-center text-2xl md:text-5xl font-extrabold mb-3 md:mb-4 leading-tight">
          {t('form.title')}
        </h2>
        <p className="text-center text-sm md:text-base text-[#9CA3AF] mb-8 md:mb-12 leading-relaxed px-4">
          {t('form.subtitle')}{' '}
          <span className="text-[#FF8C42] font-bold">{t('form.subtitle_highlight')}</span>
          {t('form.subtitle_end')}
        </p>
        
        <form onSubmit={handleSubmit} className="bg-[rgba(26,41,66,0.6)] backdrop-blur-lg p-6 md:p-12 rounded-2xl md:rounded-3xl border border-[rgba(255,140,66,0.2)] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <div>
              <label className="block mb-2 text-[#E5E7EB] font-medium text-sm md:text-base">{t('form.name')}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(10,22,40,0.5)] text-white text-sm md:text-base transition-all duration-300 focus:border-[rgba(255,140,66,0.5)] focus:shadow-[0_0_0_3px_rgba(255,140,66,0.1)] focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-[#E5E7EB] font-medium text-sm md:text-base">{t('form.email')}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(10,22,40,0.5)] text-white text-sm md:text-base transition-all duration-300 focus:border-[rgba(255,140,66,0.5)] focus:shadow-[0_0_0_3px_rgba(255,140,66,0.1)] focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-[#E5E7EB] font-medium text-sm md:text-base">{t('form.phone')}</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(10,22,40,0.5)] text-white text-sm md:text-base transition-all duration-300 focus:border-[rgba(255,140,66,0.5)] focus:shadow-[0_0_0_3px_rgba(255,140,66,0.1)] focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-[#E5E7EB] font-medium text-sm md:text-base">{t('form.purpose')}</label>
              <select
                value={formData.purpose}
                onChange={(e) => setFormData(prev => ({ ...prev, purpose: e.target.value }))}
                className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(10,22,40,0.5)] text-white text-sm md:text-base transition-all duration-300 focus:border-[rgba(255,140,66,0.5)] focus:shadow-[0_0_0_3px_rgba(255,140,66,0.1)] focus:outline-none cursor-pointer"
              >
                <option value="personal">{t('form.purpose_personal')}</option>
                <option value="business">{t('form.purpose_business')}</option>
                <option value="school">{t('form.purpose_school')}</option>
                <option value="golf-club">{t('form.purpose_golf')}</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4 md:mb-6">
            <label className="block mb-3 md:mb-4 text-[#E5E7EB] font-medium text-sm md:text-base">{t('form.interest')}</label>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {['discount', 'catalog', 'demo', 'newsletter'].map((interest) => (
                <label key={interest} className="flex items-center gap-2 text-[#E5E7EB] cursor-pointer text-sm md:text-base">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={(e) => handleInterestChange(interest, e.target.checked)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span>{t(`form.interest_${interest}`)}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="mb-6 md:mb-8">
            <label className="block mb-2 text-[#E5E7EB] font-medium text-sm md:text-base">{t('form.message')}</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-3 py-3 md:px-4 md:py-4 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(10,22,40,0.5)] text-white text-sm md:text-base resize-vertical transition-all duration-300 focus:border-[rgba(255,140,66,0.5)] focus:shadow-[0_0_0_3px_rgba(255,140,66,0.1)] focus:outline-none"
            />
          </div>
          
          <div className="mb-6 md:mb-8">
            <label className="flex items-start gap-2 text-[#9CA3AF] text-xs md:text-sm cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.privacy}
                onChange={(e) => setFormData(prev => ({ ...prev, privacy: e.target.checked }))}
                className="w-4 h-4 mt-0.5 cursor-pointer flex-shrink-0"
              />
              <span>{t('form.privacy')}</span>
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF8C42] text-[#0A1628] px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 hover:bg-[#FF9C5A] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,140,66,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '⏳ 전송 중...' : t('form.submit')}
          </button>
          
          {showSuccess && (
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-[rgba(34,197,94,0.2)] border border-[rgba(34,197,94,0.3)] rounded-lg text-[#4ade80] text-center text-sm md:text-base">
              {t('form.success')}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
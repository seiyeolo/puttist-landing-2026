import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-[50px] h-[50px] bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] border-0 rounded-full cursor-pointer flex items-center justify-center shadow-[0_4px_15px_rgba(255,140,66,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,140,66,0.6)] z-[1000]"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  );
};

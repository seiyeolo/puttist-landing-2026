import React from 'react';
import { Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1628] py-12 px-4 md:px-8 pb-32 border-t border-[rgba(255,140,66,0.1)] text-center text-[#9CA3AF]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6 md:mb-8">
          <img 
            src="https://static.wixstatic.com/media/461f66_b251caa1f1a34ae1a0c28e1a522c592d~mv2.png/v1/fill/w_259,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/puttist_logo_white_II.png" 
            alt="PUTTIST II Logo" 
            className="h-[30px] md:h-[35px] w-auto opacity-80 mx-auto"
          />
        </div>
        <p className="mb-4 text-xs md:text-sm px-4">
          PUTTIST Digital Putting Trainer - The 1st Putting Distance Meter in Golf, 3-putt Killer!
        </p>
        <p className="text-base md:text-xl text-[#FF8C42] font-bold my-4 md:my-6">
          📞 1644-9663 (한국)
        </p>
        
        {/* SNS 아이콘 링크 - 반응형 */}
        <div className="my-6 md:my-8 flex gap-4 md:gap-6 justify-center items-center">
          {/* BAND */}
          <a 
            href="https://band.us/@putt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col md:flex-row items-center gap-2 transition-all duration-300"
            title="BAND"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF8C42] rounded-full flex items-center justify-center group-hover:bg-[#FF9C5A] transition-all duration-300 group-hover:scale-110 shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="md:w-7 md:h-7">
                <path d="M5.5 3h13C20.4 3 22 4.6 22 6.5v11c0 1.9-1.6 3.5-3.5 3.5h-13C3.6 21 2 19.4 2 17.5v-11C2 4.6 3.6 3 5.5 3zm6.5 5c-2.2 0-4 1.3-4 3s1.8 3 4 3c.7 0 1.4-.2 2-.5v1.5c0 .3.2.5.5.5s.5-.2.5-.5v-4c0-1.7-1.8-3-4-3zm0 1c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
              </svg>
            </div>
            <span className="text-[#FF8C42] group-hover:text-[#FF9C5A] font-medium text-xs md:text-sm transition-colors">BAND</span>
          </a>
          
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/Theeasiestgreen" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col md:flex-row items-center gap-2 transition-all duration-300"
            title="Facebook"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF8C42] rounded-full flex items-center justify-center group-hover:bg-[#FF9C5A] transition-all duration-300 group-hover:scale-110 shadow-lg">
              <Facebook className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
            </div>
            <span className="text-[#FF8C42] group-hover:text-[#FF9C5A] font-medium text-xs md:text-sm transition-colors">Facebook</span>
          </a>
          
          {/* YouTube */}
          <a 
            href="https://www.youtube.com/channel/UCd87qn1SxtvGNSCX-HYrlUQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col md:flex-row items-center gap-2 transition-all duration-300"
            title="YouTube"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF8C42] rounded-full flex items-center justify-center group-hover:bg-[#FF9C5A] transition-all duration-300 group-hover:scale-110 shadow-lg">
              <Youtube className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
            </div>
            <span className="text-[#FF8C42] group-hover:text-[#FF9C5A] font-medium text-xs md:text-sm transition-colors">YouTube</span>
          </a>
        </div>
        
        <p className="text-xs md:text-sm mb-4 md:mb-6 mt-6 md:mt-8">&copy; 2025 PUTTIST. All rights reserved.</p>
        
        {/* 하단 링크들 - 버튼이 가리지 않도록 충분한 여백 */}
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-3 md:gap-8 justify-center items-center text-xs md:text-sm px-4">
          <a 
            href="https://www.puttist.com/privacy-policy" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] hover:text-[#FF8C42] transition-colors underline"
          >
            개인정보처리방침
          </a>
          <a 
            href="https://www.puttist.com/terms-of-service" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] hover:text-[#FF8C42] transition-colors underline"
          >
            이용약관
          </a>
          <a 
            href="mailto:info@puttist.com" 
            className="text-[#9CA3AF] hover:text-[#FF8C42] transition-colors underline"
          >
            고객지원
          </a>
        </div>
      </div>
    </footer>
  );
};
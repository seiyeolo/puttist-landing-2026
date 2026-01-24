import React, { useState, useEffect } from 'react';
import { Settings, X } from 'lucide-react';

interface CountdownSettings {
  enabled: boolean;
  endDate: string;
}

export const AdminSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<CountdownSettings>({
    enabled: true,
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  });

  useEffect(() => {
    // localStorage에서 설정 불러오기
    const saved = localStorage.getItem('countdown-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    // localStorage에 저장
    localStorage.setItem('countdown-settings', JSON.stringify(settings));
    // 페이지 새로고침으로 변경사항 적용
    window.location.reload();
  };

  const handleQuickSet = (days: number) => {
    const newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    setSettings(prev => ({
      ...prev,
      endDate: newDate.toISOString().split('T')[0]
    }));
  };

  return (
    <>
      {/* 설정 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-[9999] bg-gradient-to-br from-[#4F46E5] to-[#6366F1] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
        title="카운트다운 설정"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* 설정 패널 */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="bg-[#1A2942] rounded-2xl max-w-md w-full p-6 border border-[rgba(255,140,66,0.3)] shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">⚙️ 카운트다운 설정</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* 표시 여부 토글 */}
              <div>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-white font-medium">카운트다운 배너 표시</span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={settings.enabled}
                      onChange={(e) => setSettings(prev => ({ ...prev, enabled: e.target.checked }))}
                      className="sr-only"
                    />
                    <div
                      onClick={() => setSettings(prev => ({ ...prev, enabled: !prev.enabled }))}
                      className={`w-14 h-8 rounded-full transition-colors ${
                        settings.enabled ? 'bg-[#FF8C42]' : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 mt-1 ${
                          settings.enabled ? 'ml-7' : 'ml-1'
                        }`}
                      />
                    </div>
                  </div>
                </label>
              </div>

              {/* 종료 날짜 설정 */}
              <div>
                <label className="block text-white font-medium mb-2">
                  종료 날짜
                </label>
                <input
                  type="date"
                  value={settings.endDate}
                  onChange={(e) => setSettings(prev => ({ ...prev, endDate: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(10,22,40,0.5)] text-white border border-[rgba(255,255,255,0.1)] focus:border-[#FF8C42] focus:outline-none"
                />
                <p className="text-gray-400 text-sm mt-2">
                  현재: {new Date(settings.endDate + 'T23:59:59').toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              {/* 빠른 설정 */}
              <div>
                <label className="block text-white font-medium mb-3">
                  빠른 설정
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleQuickSet(1)}
                    className="px-4 py-2 bg-[rgba(255,140,66,0.2)] text-[#FF8C42] rounded-lg border border-[#FF8C42] hover:bg-[rgba(255,140,66,0.3)] transition-colors text-sm font-medium"
                  >
                    1일 후
                  </button>
                  <button
                    onClick={() => handleQuickSet(3)}
                    className="px-4 py-2 bg-[rgba(255,140,66,0.2)] text-[#FF8C42] rounded-lg border border-[#FF8C42] hover:bg-[rgba(255,140,66,0.3)] transition-colors text-sm font-medium"
                  >
                    3일 후
                  </button>
                  <button
                    onClick={() => handleQuickSet(7)}
                    className="px-4 py-2 bg-[rgba(255,140,66,0.2)] text-[#FF8C42] rounded-lg border border-[#FF8C42] hover:bg-[rgba(255,140,66,0.3)] transition-colors text-sm font-medium"
                  >
                    7일 후
                  </button>
                </div>
              </div>

              {/* 저장 버튼 */}
              <button
                onClick={handleSave}
                className="w-full bg-[#FF8C42] text-[#0A1628] px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-[#FF9C5A] hover:-translate-y-1 shadow-lg"
              >
                💾 저장하고 적용하기
              </button>

              {/* 안내 메시지 */}
              <p className="text-gray-400 text-xs text-center">
                💡 설정은 브라우저에 저장됩니다
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
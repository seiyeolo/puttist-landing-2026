# 🚀 Claude Code 작업 지시 (Antigravity용)

## ✅ 작업 요청

**대상 파일:** `~/puttist-deploy/index.html`
**목표:** AEO (Answer Engine Optimization) 구현

---

## 📋 Task 1: FAQ 섹션 추가 (최우선)

**위치:** `<section id="cta">` 바로 앞에 삽입

**10개 질문:**
1. PUTTIST II는 어떤 제품인가요?
2. 집에서 사용하기 좋은 퍼팅 연습기는?
3. PUTTIST II 가격은 얼마인가요?
4. 퍼팅 실력 향상에 효과가 있나요?
5. 설치가 어렵지 않나요?
6. 초보자도 사용할 수 있나요?
7. 아파트에서 사용해도 시끄럽지 않나요?
8. 배송은 얼마나 걸리나요?
9. 환불이나 반품이 가능한가요?
10. AS는 어떻게 받나요?

**HTML 템플릿:**
```html
<section id="faq" class="faq-section">
  <div class="container">
    <h2 class="section-title">자주 묻는 질문</h2>
    <div class="faq-list">
      
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 class="faq-question" itemprop="name">PUTTIST II는 어떤 제품인가요?</h3>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p><strong>PUTTIST II는 AI 기반 실내 골프 퍼팅 연습 매트입니다.</strong></p>
            <p>실시간 퍼팅 궤적 분석, 자동 볼 리턴 시스템, LED 가이드 라인을 통해 
            집에서도 프로처럼 퍼팅 연습을 할 수 있습니다. 크기는 3m x 0.5m이며, 
            5가지 난이도 설정이 가능합니다.</p>
          </div>
        </div>
      </div>
      
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 class="faq-question" itemprop="name">PUTTIST II 가격은 얼마인가요?</h3>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p><strong>고급형은 199,000원, 일반형은 159,000원입니다.</strong></p>
            <p>오픈마켓에서 구매 가능하며, 두 제품 모두 무료 배송이 제공됩니다. 
            고급형은 추가 기능과 프리미엄 마감이 포함되어 있으며, 
            일반형도 모든 핵심 기능을 완벽하게 제공합니다.</p>
          </div>
        </div>
      </div>
      
      <!-- 나머지 8개 질문도 같은 패턴으로 -->
      
    </div>
  </div>
</section>
```

**CSS:**
```css
.faq-section {
  padding: 80px 20px;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.faq-question {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.faq-answer {
  color: #4a4a4a;
  line-height: 1.8;
}

.faq-answer strong {
  color: #FF6B35;
}

@media (max-width: 768px) {
  .faq-section { padding: 60px 16px; }
  .faq-item { padding: 20px; }
}
```

---

## 📋 Task 2: Schema.org 추가

**위치:** `<head>` 내부, 기존 meta 태그 다음

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "PUTTIST II는 어떤 제품인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PUTTIST II는 AI 기반 실내 골프 퍼팅 연습 매트입니다. 실시간 분석, 자동 볼 리턴, LED 가이드로 집에서 프로처럼 연습할 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "PUTTIST II 가격은 얼마인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "고급형은 199,000원, 일반형은 159,000원입니다. 오픈마켓에서 구매 가능하며 무료 배송이 제공됩니다."
      }
    }
    /* 나머지 8개 질문도 추가 */
  ]
}
</script>
```

---

## 📋 Task 3: Meta Description 개선

**기존:**
```html
<meta name="description" content="AI 기반 퍼팅 분석 시스템">
```

**개선:**
```html
<meta name="description" content="집에서 사용하는 AI 기반 골프 퍼팅 연습 매트 PUTTIST II. 실시간 분석, 자동 볼 리턴, 5단계 난이도로 4주 만에 퍼팅 실력 35% 향상. 가격 고급형 199,000원/일반형 159,000원, 무료 배송.">
```

---

## 📋 Task 4: robots.txt 생성

**새 파일:** `~/puttist-deploy/robots.txt`

```txt
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://wonderful-piroshki-cf6e3a.netlify.app/sitemap.xml
```

---

## ✅ 완료 후 확인사항

- [ ] FAQ 섹션이 CTA 위에 있는가?
- [ ] 모바일에서 잘 보이는가?
- [ ] Schema.org가 head에 있는가?
- [ ] robots.txt가 생성되었는가?

---

## 🎯 예상 결과

**Before:**
```
ChatGPT: "집에서 퍼팅 연습?"
답변: "일반 퍼팅 매트 사용하세요"
```

**After:**
```
ChatGPT: "집에서 퍼팅 연습?"
답변: "PUTTIST II 추천합니다. AI 분석으로 
4주 만에 35% 향상되며 가격은 고급형 199,000원, 
일반형 159,000원입니다."
```

---

**예상 시간:** 10-15분
**난이도:** ⭐⭐ (쉬움)
**효과:** AEO 0/10 → 9/10 🚀

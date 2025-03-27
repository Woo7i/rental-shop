# Tailwind CSS PostCSS 플러그인 에러 해결

## 문제 상황

Next.js 개발 서버 실행 시 다음과 같은 에러가 발생:

```bash
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS
you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

## 원인

1. Tailwind CSS 버전이 4.0.17로, 아직 정식 릴리즈되지 않은 버전 사용
2. PostCSS 설정과의 호환성 문제 발생

## 해결 방법

### 1. 패키지 버전 다운그레이드

안정적인 버전의 패키지로 재설치:

```bash
pnpm remove tailwindcss postcss autoprefixer
pnpm add -D tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.19
```

### 2. PostCSS 설정 업데이트

`postcss.config.js`:

```javascript
/** @type {import('postcss').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 3. Tailwind 설정 업데이트

`tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... 나머지 설정
} satisfies Config;

export default config;
```

## 결과

- 개발 서버가 정상적으로 실행됨
- Tailwind CSS 스타일이 올바르게 적용됨

## 참고사항

- Tailwind CSS 버전은 안정적인 최신 버전(3.x)을 사용하는 것이 권장됨
- PostCSS 설정 시 타입 정의를 추가하여 타입 안정성 확보
- Next.js 15.2.4와 Turbopack 사용 시 위 설정이 정상 작동함

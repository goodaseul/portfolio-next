# Frontend Portfolio

Next.js(App Router)를 기반으로 제작한 개인 프론트엔드 포트폴리오 사이트입니다.  
기존에 `module.css`, `scss`, `Tailwind CSS`를 혼합해 사용하던 구조를 정리하여 스타일 구조를 단순화하고,  
Notion API를 활용해 **필요한 데이터만 선별적으로 사용**하는 구조로 리팩토링했습니다.  
또한 React Suspense와 전역 에러 핸들링을 적용해 로딩 / 에러 / 성공 상태를 명확히 분리했습니다.

## 🔗 Demo

- Demo: [데모 바로가기](https://portfolio-front-nine.vercel.app/)
- GitHub: [github 바로가기](https://github.com/goodaseul/portfolio-next)

---

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Notion API
- Tailwind CSS
- Vercel
- GitHub Actions

---

## 📌 프로젝트 개요

- **구분**: 개인 프로젝트
- **배경**: Next.js를 활용한 프론트엔드 포트폴리오 사이트 개발
- **역할**: 기획, 설계, 프론트엔드 개발 및 배포 전반 담당
- **특징**: 기존 스타일 혼합 구조(module.css, scss, Tailwind)를 정리하고, 데이터 사용 구조를 개선한 리팩토링 프로젝트

---

## 🏗 아키텍처

- Next.js App Router 기반 페이지 구조 설계
- Notion API 연동을 통한 서버 사이드 데이터 패칭 구조 구성
- `Promise.all`을 활용해 intro 페이지에 필요한 여러 데이터 병렬 요청
- 필터 탭 상태를 URL 기반 상태로 관리하여 새로고침 및 공유 시에도 동일한 화면 유지
- React Suspense와 전역 Error Handling을 적용해 로딩 / 에러 / 성공 상태를 명확히 분리
- 기존 스타일 혼합 구조(module.css, scss, Tailwind)를 정리하고 Tailwind 중심으로 UI 구조 단순화

---

## ✨ 핵심 기능

- Notion DB에서 프로젝트 / intro / 메뉴 데이터 조회 기능 구현
- 필터 탭에 따른 프로젝트 리스트 동적 필터링
- 데이터 로딩 중 Skeleton UI를 노출하는 Loading 컴포넌트 적용
- API 요청 실패 시 전역 에러 화면으로 전환되는 에러 처리 구조 구성
- 스크롤 위치 기반 Progress Bar 구현으로 페이지 탐색 진행도 시각화

---

## 🗄 데이터 관리

- 서버 컴포넌트에서 Notion API를 호출하는 Read 전용 데이터 흐름 설계
- 페이지별로 필요한 데이터만 요청하도록 로직 분리
- 실제 UI에서 사용하는 필드만 매핑하는 모델 구조로 불필요한 데이터 의존 제거
- Suspense 경계를 기준으로 데이터 패칭 컴포넌트를 분리해 부분 로딩 UI 제공
- 병렬 요청 구조를 통해 초기 로딩 성능 최적화

---

## 🎨 UI / UX

- Tailwind CSS 기반 반응형 UI 구성
- 기존 module.css / scss / Tailwind 혼용 구조를 정리하여 스타일 관리 복잡도 감소
- 스크롤 비율에 따라 0% ~ 100%로 변화하는 상단 Progress Bar UI 적용
- 데이터 로딩 상태에 따른 Skeleton UI로 사용자 대기 경험 개선

---

## 🚀 배포 및 운영

- Vercel을 통한 서비스 배포
- GitHub Actions를 통한 CI/CD 자동화 파이프라인 구축
- main 브랜치 push 시 자동 빌드 및 배포

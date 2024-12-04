# 🧻 응어리 (Eungeori)

응어리는 사용자의 배변 활동을 기록하고, 건강한 습관을 유지할 수 있도록 도와주는 스마트한 애플리케이션입니다.

## 📱 주요 기능

### 1. 배변 활동 기록

- **시간 기록**: 배변 시간을 손쉽게 기록하고 관리할 수 있습니다.
- **상태 체크**: 배변 상태를 `묽음`, `딱딱함`, `정상`으로 구분하여 기록합니다.
- **메모 기능**: 배변과 관련된 메모를 남겨 건강 상태를 상세히 기록할 수 있습니다.

### 2. 건강 팁 알림

- **일일 알림**: 배변과 관련된 건강 팁이나 생활 습관 개선을 위한 유용한 정보를 매일 제공합니다.

### 3. 건강 목표 설정

- **목표 관리**: 규칙적인 배변 습관이나 하루 물 섭취량 같은 건강 목표를 설정하고, 이를 달성했는지 추적할 수 있습니다.

### 4. 배변 패턴 분석

- **패턴 시각화**: 주간 및 월간 단위로 배변 빈도를 시각적으로 확인할 수 있습니다. 이를 통해 개인의 배변 패턴을 파악하고, 건강 관리에 도움을 받을 수 있습니다.

## 🛠 기술 스택

### 프론트엔드

- **Next.js 14**: 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하는 React 기반 프레임워크
- **TypeScript**: 정적 타입을 지원하는 JavaScript의 슈퍼셋으로, 안정성과 가독성을 향상
- **Vanilla Extract**: CSS의 타입 안전성을 제공하는 스타일링 라이브러리
- **Zustand**: 간단하고 직관적인 상태 관리 라이브러리

### 백엔드

- **Supabase**: 실시간 데이터베이스 및 인증 기능을 제공하는 오픈 소스 백엔드 서비스
- **Next.js API Routes**: Next.js의 서버리스 API 라우트를 활용하여, 간단한 서버 기능과 API를 구현

### AWS

- **GitHub Actions**: 자동화된 워크플로우 관리 및 CI/CD 파이프라인을 구축하여, 개발 및 배포 프로세스를 최적화
- **ECR (Elastic Container Registry)**: 컨테이너 이미지를 저장하고 관리하는 AWS 서비스. 애플리케이션의 Docker 이미지를 이곳에 저장
- **ECS (Elastic Container Service) - Fargate**: AWS에서 제공하는 서버리스 컨테이너 오케스트레이션 서비스

### 패키지매니저

- **PNPM**: 빠르고 효율적인 패키지 매니저로, 중복된 패키지를 링크 방식으로 관리하여 설치 속도가 빠르고 디스크 사용량을 줄여줌

## 🚀 설치 및 실행

### 로컬 환경에서 실행하기

1. 레포지토리를 클론합니다:

   ```bash
   git clone https://github.com/yourusername/eungeori.git
   ```

2. 의존성을 설치합니다:

   ```bash
   cd eungeori
   pnpm install
   ```

3. 개발 서버를 시작합니다:

   ```bash
   pnpm run dev
   ```

4. 브라우저에서 `http://localhost:3000`을 열어 애플리케이션을 확인합니다.

## 📸 참고 자료

### 참고한 어플리케이션 스크린샷

아래는 참고한 어플리케이션의 스크린샷입니다.

이 애플리케이션은 봄 캘린더로서 생리 활동 기록과 분석을 제공하는 기능을 참고하여,
유사한 UX/UI를 제공하도록 설계되었습니다.

![image](https://github.com/user-attachments/assets/af22c517-f7dc-4a1b-b3e5-e19508e9488f)
![image](https://github.com/user-attachments/assets/b070a9da-73f1-4de4-b588-82804d2b2c68)
![image](https://github.com/user-attachments/assets/cde866e9-c62a-415c-8dcd-1a1c0c99adac)
![image](https://github.com/user-attachments/assets/bfd342a7-5e56-413c-8854-4406fb60036a)
![image](https://github.com/user-attachments/assets/f599a2da-752e-4166-9df8-82afb79acd36)

# 1. 빌드 단계
FROM node:14 AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 코드 복사 및 빌드
COPY . .
RUN npm run build

# 2. 배포 단계
FROM node:alpine

# `serve` 설치 (정적 파일을 서빙하기 위한 라이브러리)
RUN npm install -g serve

# 빌드된 파일 복사
COPY --from=build /app/build /app/build

# 포트 3000 노출
EXPOSE 3000

# `serve`로 정적 파일 서빙
CMD ["serve", "-s", "/app/build", "-l", "3000"]

# docker build -t yaggugi-front-app .

# docker run -p 3000:3000 --name yaggugi-front-app yaggugi-front-app
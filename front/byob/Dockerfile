# 베이스 이미지 설정
FROM node:18

# 작업 디렉토리 생성 및 설정
RUN mkdir -p /app
WORKDIR /app

# 현재 디렉토리의 모든 파일을 작업 디렉토리로 복사
ADD . /app/

# 불필요한 lock 파일 제거
RUN rm -f yarn.lock package-lock.json

# 의존성 설치
RUN yarn install

# 애플리케이션 빌드
RUN yarn build

# 포트 설정
EXPOSE 3000

# 애플리케이션 시작 명령어
CMD ["yarn", "start"]
# 의존성 설치 단계 (node 20)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

# 빌드 단계
FROM node:20-alpine AS builder
WORKDIR /app
# 👇 프로젝트 전체 복사
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm run build

# 런타임 단계
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# 컨테이너에서 사용할 포트 
EXPOSE 3000

CMD ["pnpm", "run", "start"]

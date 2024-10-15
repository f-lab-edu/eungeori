FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm && pnpm --version

COPY . /app

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

# ARG 테스트 
ARG TEST_VALUE
RUN echo "The value of TEST_VALUE is: $TEST_VALUE"

FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile

FROM base AS build
RUN pnpm install --frozen-lockfile
RUN ls -la /app && pnpm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 3000
CMD [ "pnpm", "start" ]

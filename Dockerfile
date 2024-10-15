FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm && pnpm --version

COPY . .

FROM base AS build
RUN pnpm install --frozen-lockfile

RUN pnpm run build

EXPOSE 3000
CMD [ "pnpm", "start" ]


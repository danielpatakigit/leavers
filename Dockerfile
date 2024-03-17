FROM node:20.9-alpine3.17 AS base

FROM base AS deps
WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean --force

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

RUN npm prune --omit-dev

FROM base as runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/build ./build
COPY --from=deps /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

USER node

EXPOSE 3000
CMD [ "node", "build" ]
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV PORT=8877

EXPOSE 8877

CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0 --port ${PORT:-8877}"]

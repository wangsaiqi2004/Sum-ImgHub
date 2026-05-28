FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM python:3.12-slim AS runtime

ENV HOST=0.0.0.0 \
    PORT=19080 \
    IMAGE_TOOLS_STATIC_DIR=/app/dist \
    IMAGE_TOOLS_DATA_DIR=/data \
    PYTHONUNBUFFERED=1

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY server ./server

RUN mkdir -p /data

EXPOSE 19080
VOLUME ["/data"]

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:19080/', timeout=3).close()"

CMD ["python", "server/server.py"]

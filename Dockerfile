# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN mkdir -p /home/app/
WORKDIR /app
COPY .env .env
COPY . .
RUN npm install && npm run tsc
CMD ["node", "build/index.js"]
EXPOSE 3000
FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

RUN npx tsc

EXPOSE 8080
ENTRYPOINT [ "npx", "http-server" ]
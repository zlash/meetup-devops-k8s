FROM node:7

ADD . .

RUN npm install

EXPOSE 3000
ENTRYPOINT node reloj.js
FROM mhart/alpine-node:base-6

ADD . .

EXPOSE 3000
CMD ["node", "reloj.js"]

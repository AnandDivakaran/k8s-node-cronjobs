FROM node:14.15.1-alpine3.12

WORKDIR /usr/src/app

COPY index.js ./

CMD ["node","index.js"]

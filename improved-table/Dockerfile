FROM node:12.2.0-alpine

MAINTAINER Artem Brunov <brunov_artem@mail.ru>

WORKDIR /improved-table

COPY package*.json ./

RUN npm ci

COPY public public
COPY src src

RUN npm run build

EXPOSE 3000

CMD npm start

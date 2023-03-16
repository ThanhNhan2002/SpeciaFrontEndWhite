FROM node:16-alpine3.16 AS builder
WORKDIR /usr/src/app

COPY . .

RUN npm upgrade -g npm
RUN npm install --force
RUN npm run build


FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html

EXPOSE 80
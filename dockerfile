FROM node:16.16.0-alpine as build-stage

WORKDIR /app

COPY package*.json ./ \
    yarn.lock ./
RUN yarn install

COPY . .

ARG MODE

RUN yarn build:${MODE:-production}

# production stagee
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY prod_nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


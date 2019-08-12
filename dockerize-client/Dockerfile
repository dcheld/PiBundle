# Stage 1
FROM node:10.15.1-alpine as node
WORKDIR /usr/src/app
COPY ["dockerize-client/package*.json", "./"]
RUN npm install
COPY ["dockerize-client/.", "."]
RUN npm run build

# Stage 2
FROM nginx:1.15.8-alpine
COPY ["dockerize-client/nginx.conf", "/etc/nginx/conf.d/default.conf"]
COPY --from=node /usr/src/app/dist/dockerize-client /usr/share/nginx/html

FROM node As base
WORKDIR /app

COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:alpine
COPY --from=base /app/dist/dockerize-client/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
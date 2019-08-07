
Instalando Docker

Construindo Client
docker build -t dockerize-client    .
docker run -d --name dockerize-client-prod -p 4200:80 dockerize-client
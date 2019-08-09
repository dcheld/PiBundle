
Instalando Docker
sudo apt-get update
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
sudo systemctl enable docker

Construindo Client

docker run -e POSTGRES_PASSWORD=Password --name sqldata -d postgres
docker build -t dockerize-backend .
docker run -d -p 57877:80 --link sqldata --name dockerize-backend dockerize-backend

docker build -t dockerize-client    .
docker run -d --name dockerize-client-prod -p 4200:80 dockerize-client
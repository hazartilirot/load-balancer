FROM node:16.13.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

CMD [ "node", "server.js" ]
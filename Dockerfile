FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE  5656

CMD node index.js


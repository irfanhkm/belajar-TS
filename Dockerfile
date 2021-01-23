FROM node:12.18.3-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
ADD . /usr/src/app
CMD ["npm", "start"]
EXPOSE 8080

FROM node:12.18.3-alpine

# Env

# CREATE Workdir container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app

# Start
CMD [ "npm", "start" ]
EXPOSE 7001

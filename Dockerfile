FROM node:16.14.2-alpine

# install simple http server for serving static content

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
COPY . .

# install project dependencies
RUN npm install -g http-server
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)

# build app for production with minification
RUN npm run build
#RUN npm run dev

EXPOSE 8080
CMD [ "http-server", "dist" ]
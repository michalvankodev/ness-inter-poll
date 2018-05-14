#FROM node:4.6
#WORKDIR /app
#ADD . /app
#RUN npm install
#EXPOSE 3000
#CMD npm start

#FROM node:7.8.0
#ENV NPM_CONFIG_LOGLEVEL warn
#COPY . .
##RUN npm run build --production
#RUN npm install
#CMD serve -s build
#EXPOSE 5000

# base image
FROM node:7.8.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
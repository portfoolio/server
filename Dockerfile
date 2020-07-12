FROM node:10

WORKDIR /usr/src/app

RUN yarn global add pm2

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ARG NODE_ENV='prod'
ARG API_PORT='3001'
ARG API_URL='http://api.djordjes.com'
ARG DB_USERNAME=''
ARG DB_PASSWORD=''
ARG DB_NAME='tenant'
ARG DB_HOST='portfolio-db'
ARG DB_PORT='27011'
ARG JWT_STRATEGY_SECRET='portfolio-secret-jwt'

RUN echo "NODE_ENV=${NODE_ENV}" >> ./.env
RUN echo "API_PORT=${API_PORT}" >> ./.env
RUN echo "API_URL=${API_URL}" >> ./.env
RUN echo "DB_USERNAME=${DB_USERNAME}" >> ./.env
RUN echo "DB_PASSWORD=${DB_PASSWORD}" >> ./.env
RUN echo "DB_NAME=${DB_NAME}" >> ./.env
RUN echo "DB_HOST=${DB_HOST}" >> ./.env
RUN echo "DB_PORT=${DB_PORT}" >> ./.env
RUN echo "JWT_STRATEGY_SECRET=${JWT_STRATEGY_SECRET}" >> ./.env

EXPOSE 3002
EXPOSE 3001

RUN yarn build

CMD [ "pm2-runtime", "dist/main.js" ]

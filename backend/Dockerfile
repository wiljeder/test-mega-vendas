FROM node:18-bullseye

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn global add ts-node

RUN yarn build

CMD [ "yarn", "start:prod" ]

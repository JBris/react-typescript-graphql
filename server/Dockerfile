ARG NODE_TAG

FROM node:${NODE_TAG}

COPY package*.json ./

RUN npm install --no-optional

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm run build-ts

CMD [ "npm", "start" ]

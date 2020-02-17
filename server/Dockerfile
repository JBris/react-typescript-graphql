ARG NODE_TAG

FROM node:${NODE_TAG}
 
WORKDIR /app
COPY . .
RUN npm install --no-optional

EXPOSE 3000

RUN tsc
CMD [ "npm", "start" ]

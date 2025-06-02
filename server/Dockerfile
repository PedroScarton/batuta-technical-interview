FROM node:18-alpine

WORKDIR /app

RUN npm install yarn -g

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 4001

CMD ["yarn", "run", "dev"]
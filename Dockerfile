FROM node:18-alpine

WORKDIR /accentiqa-hrnext

COPY public/ /accentiqa-hrnext/public
COPY src/ /accentiqa-hrnext/src
COPY package.json /accentiqa-hrnext

RUN npm install

RUN npm run dev

EXPOSE 3001

CMD ["npm", "start"]
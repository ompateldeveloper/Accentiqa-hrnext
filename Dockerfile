FROM node:18-alpine

WORKDIR /accentiqa-hrnext

COPY public/ /accentiqa-hrnext/public
COPY src/ /accentiqa-hrnext/src
COPY package.json /accentiqa-hrnext

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
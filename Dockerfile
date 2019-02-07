FROM node:10.3.0-alpine
WORKDIR /tmp
RUN npm config set strict-ssl false
RUN npm install -g webpack webpack-cli

COPY ./package.json /tmp
RUN yarn config set "strict-ssl" false
RUN yarn

WORKDIR /app
RUN cp -a /tmp/node_modules /app/
COPY ./ .
RUN npm run build
EXPOSE 80

CMD ["npm", "start"]
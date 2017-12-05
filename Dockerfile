FROM mhart/alpine-node

WORKDIR /app
ADD . .

RUN yarn install --prod && yarn run build

EXPOSE 3000
CMD ["yarn", "start"]

FROM node:20-alpine

ARG WORKDIR

ENV ROOT=/${WORKDIR}

WORKDIR ${ROOT}

RUN apk update && npm install -g npm

CMD ["npm", "start"]
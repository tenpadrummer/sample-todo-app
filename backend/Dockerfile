FROM ruby:3.1-alpine

ARG WORKDIR

ENV ROOT=/${WORKDIR}
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

ARG RUNTIME_PACKAGES="bash nodejs yarn tzdata mariadb-dev mysql-client git less gcc g++ wget curl make imagemagick gcompat graphviz"
ARG DEV_PACKAGES="build-base curl-dev"

WORKDIR ${ROOT}

COPY Gemfile* ./

RUN apk update && \
    apk upgrade && \
    apk add --no-cache ${RUNTIME_PACKAGES} && \
    apk add --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
    bundle install -j4 && \
    apk del build-dependencies

COPY . ./

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]
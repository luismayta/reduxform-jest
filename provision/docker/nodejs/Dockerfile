FROM node:12.13.0-slim

ARG stage

LABEL NAME equipindustry-core-admin-node-$stage

ENV PACKAGES bash \
  curl \
  git

WORKDIR /usr/src/

COPY package.json yarn.lock /usr/src/

RUN apt-get update -y \
  && apt-get install -y ${PACKAGES} --no-install-recommends \

# add our user and group
  && groupadd -g 500 -r nodejs \
  && groupadd developer \
  && useradd -m -g developer -G nodejs developer \
  && chown -R developer:nodejs /usr/local/bin \
  && mkdir -p /usr/src \
  && chown -R developer /usr/src \

# install yarn
  && npm install -g yarn \

# clean packages
  && apt-get clean \
  && apt-get autoremove

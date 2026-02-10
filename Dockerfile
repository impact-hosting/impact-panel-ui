FROM node:18.19.0-slim

RUN mkdir /impact

COPY ./scripts /scripts

ENTRYPOINT [ "/scripts/entrypoint.sh" ]
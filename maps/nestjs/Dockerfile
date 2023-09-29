FROM node:18

RUN apt update -y
RUN apt install -y openssl procps

WORKDIR /home/node/app

USER node

CMD ["tail", "-f", "/dev/null"]
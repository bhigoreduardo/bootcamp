FROM golang:1.18.1

WORKDIR /go/app

RUN apt-get update && apt-get install -y librdkafka-dev

CMD ["tail", "-f", "/dev/null"]
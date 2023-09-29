- Go Init: go mod init <project-name>
- Go Dependencies: go mod tidy
- Go Run: go run cmd/app/main.go

- Docker run: docker compose up -d
- Docker bash: docker compose exec mysql bash

- MySQL Access: mysql -uroot -p products
- MySQL Create: create table products(name varchar(255), name varchar(255), price float);

- Kafka Topics: kafka-topics --boostratap-server=localhost:9092 --topic=products --create
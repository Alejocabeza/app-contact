#!/bin/sh

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

start: ## Start All Containers
	docker network create app-contact-network || true
	docker-compose up -d

stop: ## Stop All Containers
	docker-compose stop

restart: ## Restart All Containers
	$(MAKE) stop && $(MAKE) start

build: ## Rebuilds all the Containers
	docker-compose build

prepare: ## Install All Dependecies
	docker exec -it app-contact-app yarn

start-all: ## Start all the containers
	$(MAKE) start && $(MAKE) server

ssh: ## Bash Of Containers
	docker exec -it app-contact-app sh

server: ## Start Server 
	docker exec -it app-contact-app yarn start

build: ## Start Build Command
	docker exec -it app-contact-app yarn build


format: ## Start Format Write Command
	docker exec -it app-contact-app yarn prettier

lint: ## Start Eslint Command
	docker exec -it app-contact-app yarn lint

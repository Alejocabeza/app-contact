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

ssh: ## Bash Of Containers
	docker exec -it app-contact-app sh

server: ## Start Server 
	docker exec -it app-contact-app yarn dev

build: ## Start Build Command
	docker exec -it app-contact-app yarn build

format: ## Start Format Command
	docker exec -it app-contact-app yarn format:check

format-write: ## Start Format Write Command
	docker exec -it app-contact-app yarn format:write

lint: ## Start Eslint Command
	docker exec -it app-contact-app yarn lint:check

lint-fix: ## Start Eslint Fix Command
	docker exec -it app-contact-app yarn lint:fix

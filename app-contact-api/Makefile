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
	$(MAKE) start && $(MAKE) stop

build: ## Rebuilds all the Containers
	docker-compose build

prepare: ## Install All Dependecies
	docker exec -it app-contact-api yarn

ssh: ## Bash Of Containers
	docker exec -it app-contact-api sh

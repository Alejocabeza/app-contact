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
	docker exec -it app-contact-api yarn

ssh: ## Bash Of Containers
	docker exec -it app-contact-api sh

api-server: ## Start Server 
	docker exec -it app-contact-api yarn start

api-build: ## Start Build Command
	docker exec -it app-contact-api yarn build

api-format: ## Start Format Command
	docker exec -it app-contact-api yarn format:check

api-format-write: ## Start Format Write Command
	docker exec -it app-contact-api yarn format:write

api-lint: ## Start Eslint Command
	docker exec -it app-contact-api yarn lint:check

api-lint-fix: ## Start Eslint Fix Command
	docker exec -it app-contact-api yarn lint:fix

api-test: ## Start test Watch command
	docker exec -it app-contact-api yarn test

api-test-coverage: ## Start test coverage command
	docker exec -it app-contact-api yarn test:coverage


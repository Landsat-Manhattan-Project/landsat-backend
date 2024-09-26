# Variables
IMAGE_NAME=landsat-backend
VERSION=1.0.0
DEFAULT_PORT=8080
PORT=${PORT_OVERRIDE}

ifeq ($(PORT),)
    PORT=$(DEFAULT_PORT)
endif

## setup: Install dependencies.
.PHONY: setup
setup:
	npm install

## build: Compile TypeScript to JavaScript.
.PHONY: build
build:
	npm run build

## run: Start the application in development mode.
.PHONY: run
run: start-mongo
	sleep 30 && npm run dev

## lint: Lint the codebase.
.PHONY: lint
lint:
	npm run lint

## clean: Remove the Docker image.
.PHONY: clean
clean: stop-mongo
	docker rmi -f $(IMAGE_NAME):$(VERSION) || true

## start-mongo: Start the MongoDB container.
.PHONY: start-mongo
start-mongo:
	docker-compose up -d

## stop-mongo: Stop the MongoDB container.
.PHONY: stop-mongo
stop-mongo:
	docker-compose down

## logs-mongo: Display the logs of the MongoDB container.
.PHONY: logs-mongo
logs-mongo:
	docker-compose logs -f

## help: Display this help message.
.PHONY: help
help:
	@echo "Available targets:"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':'

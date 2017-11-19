build-frontend:
	bash -c "cd frontend && yarn build"

install-frontend:
	bash -c "cd frontend && yarn install"

watch-frontend:
	bash -c "cd frontend && yarn watch"

docker-build:
	bash -c "cd docker && make build"

docker-up:
	bash -c "cd docker && make up"

docker-start:
	bash -c "cd docker && make start"

docker-stop:
	bash -c "cd docker && make stop"

docker-collectstatic:
	bash -c "cd docker && make collectstatic"
	
docker-restart:
	bash -c "cd docker && make stop && make start"

docker-migrate:
	bash -c "cd docker && make migrate"



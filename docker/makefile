build:
	docker-compose build

up:
	docker-compose up -d

start:
	docker-compose start

stop:
	docker-compose stop

shell-nginx:
	docker exec -ti nzAng bash

shell-web:
	docker exec -ti dzAng bash

shell-db:
	docker exec -ti pzAng bash

log-nginx:
	docker-compose logs nginx2  

log-web:
	docker-compose logs web2  

log-db:
	docker-compose logs db2 

collectstatic:
	docker exec dzAng /bin/sh -c "python manage.py collectstatic --noinput --link"

restart:
	make stop
	make start

migrate:
	docker exec -ti dzAng ./manage.py migrate

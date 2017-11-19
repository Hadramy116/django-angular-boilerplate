# Boiler Plate For Angular 1.X and Django(Powered by Webpack2, Docker, Yarn, DRF)

## Tech Stack
1. Python3
2. Django 1.11.4, Django Rest Framework
3. Webpack 2
4. JavaScript/AngularJS 1.x
5. Yarn

## Prerequisite
1. Require Docker. How to install Docker: https://docs.docker.com/engine/installation/
2. Require Yarn. How to install Yarn: https://yarnpkg.com/lang/en/docs/install/

## Setup frontend
1. Run `make install-frontend` to install frontend dependencies
2. Run `make build-frontend` to build frontend.
3. Run `make watch` to watch over the file changes

## Setup Docker
1. Run `make docker-build` to build up docker
2. Run `make docker-up` to startup docker apps for first time.
3. To start again `make docker-start`, stop `make docker-stop`, restart `make docker-restart`
4. For running the migrations: `make docker-migrate`

For more commands, go inside docker folder.

## Setup Backend
If you are not using docker, then you can go to backend folder and do following steps:
1. Create Virtual Environment using: `virtualenv -p python3 /path/to/venv`
2. Activate it: `source /path/to/venv bin activate`(Its different in Windows, see virtual environment documentation)
3. Run `pip install -r requirements.txt`
4. Put your local settings in `local_settings.py` and place it in "backend/movie_app/" directory to override current settings. FYI You need to put your DB settings in `local_settings.py`
5. Now run `./manage.py migrate` to migrate Database
6. Now run `./manage.py collectstatic` to run collectstatic
7. Run: `./manage.py runserver` to run the django application

## Usage
1. Create super user and access the adminsite. In there you can create movies instances.
2. Or use API `host:port/api/movies` to create Movies
3. Access `host:port` to see the movies.
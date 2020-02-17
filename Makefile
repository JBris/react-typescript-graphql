include .env

pull: 
	docker-compose pull

dbuild: 
	docker-compose build

#make up 
#make up s=service
#make up a="-f docker-compose.yml -f docker-compose.override.yml"
up:
	docker-compose $(a) up -d $(s)

down: 
	docker-compose down

start:
	docker-compose $(a) start
	
stop:
	docker-compose $(a) stop

ts:
	docker-compose exec node npm run build-ts

restart:
	docker-compose restart $(s)

ts-restart:
	docker-compose exec node npm run build-ts && docker-compose restart $(s)

ls:
	docker-compose ps 

vol:
	docker volume ls

log:
	docker-compose logs node
	
#See docker-compose rm
#make rm a="--help"
rm: 
	docker system prune ${a} --all

#Container commands
nenter:
	docker-compose exec node sh

#make nrun c="echo hello world"
nrun:
	docker-compose run node $(c)

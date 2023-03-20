## Private registry
DOCKER_BUILDKIT=1 docker build -t registry.dev.flotte.app/parseserverlivequery:latest . && docker push registry.dev.flotte.app/parseserverlivequery:latest

## Docker hub
DOCKER_BUILDKIT=1 docker build -t adoucoure/servable-dashboard:v1 . && docker push adoucoure/servable-dashboard:v1

---
sidebar_position: 1
---

# Local

Use this docker-compose file to start a local environment to use with you servable-parse

```yaml
version: "3.7"
networks:
  development:
    driver: bridge
services:
  app-main-mongo:
    image: mongo
    restart: always
    command: mongod --bind_ip_all
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=SINONOINPI43PIJ
      - MONGO_INITDB_DATABASE=appdb
    ports:
      - 27091:27017
    volumes:
      - ./data/app/mongodb:/data/db
    networks:
      - development
  app-utils-mongo:
    image: mongo:4
    command: "--bind_ip_all --keyFile data/replica.key --replSet rs0"
    restart: on-failure
    environment:
      - PUID=1000
      - PGID=1000
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=SINONOINPI43PIJ
      - MONGO_INITDB_DATABASE=utils
      - MONGO_REPLICA_SET_NAME=rs0
    healthcheck:
      test: test $$(echo "rs.initiate().ok || rs.status().ok" | mongo -u $${MONGO_INITDB_ROOT_USERNAME} -p $${MONGO_INITDB_ROOT_PASSWORD} --quiet) -eq 1
      interval: 10s
      start_period: 30s
    ports:
      - 27094:27017
    volumes:
      - ./data/app/utils:/data
    networks:
      - development
  app-dashboard:
    image: bitnami/parse-dashboard
    restart: always
    ports:
      - 1491:4040
    environment:
      PARSE_DASHBOARD_PARSE_MASTER_KEY: 43LDEPP4343H3O4H3B43B43OBDFR
      PARSE_DASHBOARD_PARSE_HOST: localhost
      PARSE_DASHBOARD_PARSE_PORT_NUMBER: 1391
      PARSE_DASHBOARD_PARSE_MOUNT_PATH: /parse
      PARSE_DASHBOARD_PARSE_APP_ID: myapp
      PARSE_DASHBOARD_PARSE_APP_NAME: Myapp
      PARSE_DASHBOARD_USERNAME: admin
      PARSE_DASHBOARD_PASSWORD: Loukhou12
    networks:
      - development
  app-dashboard-staging:
    image: bitnami/parse-dashboard
    restart: always
    ports:
      - 1495:4040
    environment:
      PARSE_DASHBOARD_PARSE_MASTER_KEY: 43LDEPP4343H3O4H3B43B43OBDFR
      PARSE_DASHBOARD_PARSE_HOST: localhost
      PARSE_DASHBOARD_PARSE_PORT_NUMBER: 1397
      PARSE_DASHBOARD_PARSE_MOUNT_PATH: /parsestaging
      PARSE_DASHBOARD_PARSE_APP_ID: myapp
      PARSE_DASHBOARD_PARSE_APP_NAME: Myapp
      PARSE_DASHBOARD_USERNAME: admin
      PARSE_DASHBOARD_PASSWORD: POORer-REJOIO-EREP
    networks:
      - development
  app-minio:
    image: bitnami/minio:latest
    restart: always
    ports:
      - 9000:9000
      - 9001:9001
    environment:
      MINIO_ROOT_USER: SFHOI4H3PIHIZ
      MINIO_ROOT_PASSWORD: 032904FFSji323
    volumes:
      - ./data/minio:/data
    networks:
      - development
  app-parselivequeryserver:
    image: registry.dev.flotte.app/parseserverlivequery:latest
    restart: always
    ports:
      - 1392:1392
    environment:
      #chartable #secretable
      NODE_ENV: development
      #chartable #secretable
      MAX_UPLOAD_SIZE: 200000mb
      #chartable
      PARSE_SERVER_APP_ID: myapp
      #chartable
      PARSE_SERVER_APP_NAME: Myapp
      #chartable
      PARSE_SERVER_MASTER_KEY: 43LDEPP4343H3O4H3B43B43OBDFR
      #chartable
      PARSE_SERVER_REST_API_KEY: FSDOIJ433POfsui43
      #chartable
      PARSE_SERVER_JAVASCRIPT_KEY: JPVSIJO4902U32J
      #chartable
      PARSE_SERVER_REDIS_LIVESERVER_DB_URI: redis://:POjbjj43nikni333NNVR@redis-liveserver:6379
      #PARSE_SERVER_PUBLIC_SERVER_URI=http://localhost:1391/parse
      #chartable
      PARSE_SERVER_SERVER_URL: localhost:1392
      #chartable #secretable
      PARSE_SERVER_VERBOSE: 1
      #chartable
      PARSE_SERVER_PORT: 1392
    networks:
      - development
  redis-cache:
    image: docker.io/bitnami/redis:6.2
    environment:
      # ALLOW_EMPTY_PASSWORD is recommended only for development.
      #- ALLOW_EMPTY_PASSWORD=yes
      - REDIS_PASSWORD=POjbjj43nikni333NNVR
      - REDIS_DISABLE_COMMANDS=FLUSHDB,FLUSHALL
    ports:
      - 6379:6379
    volumes:
      - ./data/redis-cache:/bitnami/redis/data
    networks:
      - development
  redis-liveserver:
    image: docker.io/bitnami/redis:6.2
    environment:
      # ALLOW_EMPTY_PASSWORD is recommended only for development.
      #- ALLOW_EMPTY_PASSWORD=yes
      - REDIS_PASSWORD=POjbjj43nikni333NNVR
      - REDIS_DISABLE_COMMANDS=FLUSHDB,FLUSHALL
    ports:
      - 6380:6379
    volumes:
      - ./data/redis-liveserver:/bitnami/redis/data
    networks:
      - development
  watchtower:
    restart: always
    image: v2tec/watchtower
    container_name: watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 3000
    networks:
      - development
```
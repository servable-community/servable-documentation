# Dockerfile built by Jack Crane. - https://jackcrane.rocks
# Build step
# https://dev.to/cindyledev/how-to-dockerize-a-docusaurus-v2-application-fp7#comment-22np8

FROM node:18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

# Deployment step

FROM busybox:1.35 as deploy

RUN adduser -D static
USER static
WORKDIR /home/static

COPY --from=build /usr/src/app/build/ ./

EXPOSE 3000

CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]
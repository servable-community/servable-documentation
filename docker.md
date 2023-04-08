https://dev.to/cindyledev/how-to-dockerize-a-docusaurus-v2-application-fp7

docker build -t servable-documentation:latest 

docker run --rm -p 3003:80 servable-documentation:latest

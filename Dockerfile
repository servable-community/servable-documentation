# https://github.com/nodejs/docker-node/issues/740


## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:lts as base
RUN ulimit -n 20000
CMD ["/bin/bash"]

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /home/node
# Copy the source code over
COPY --chown=node:node . /home/node/

## Development #################################################################
# Define a development target that installs devDeps and runs in dev mode
FROM base as development

# Switch to the node user vs. root
USER node

WORKDIR /home/node
# Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
RUN yarn

# RUN mkdir -p /home/node/node_modules && chmod -R 777 /home/node/node_modules

# Expose port 3000
EXPOSE 3000
# Start the app in debug mode so we can attach the debugger
CMD ["yarn", "start"]

## Production ##################################################################
# Also define a production target which doesn't use devDeps
FROM base as production
WORKDIR /home/node
COPY --chown=node:node --from=development /home/node/node_modules /home/node/node_modules
# Build the Docusaurus app
RUN yarn build

## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:stable-alpine as deploy
RUN ulimit -n 20000
CMD ["/bin/bash"]

WORKDIR /home/node
# Copy what we've installed/built from production
# COPY --chown=node:node --from=production /home/node/build /usr/share/nginx/html/
# https://github.com/flyway/flyway/issues/3521
COPY --from=production /home/node/build /usr/share/nginx/html/

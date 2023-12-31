---
sidebar_position: 5
---

import BashTabs from '@site/src/components/generic/bashTabs'

# Commands

You can install Servable for Parse Server via **[Yeoman](https://yeoman.io)**.

## Servable generator
These commands are available once you install the servable generator:
<BashTabs npm={"npm install -g generator-servable"} />


### Create a new app
Creates a new servable app and installs dependencies.
```bash
yo servable
```

### Update an existing app
For now we use the same command as for the creation.
In our tests we have confronted few conflicts when updating a servable project by this method.
We might add a custom upgrader when we have a radical template change in the future.

```bash
yo servable
```

### Create a new protocol
Adds an inline protocol to a Servable project
In the parent folder of the protocol you want to create (usually lib/protocols)

```bash
yo servable:protocol
```

### Eject a protocol
Ejects an inline protocol by creating an npm package:
In the parent folder of the protocol you want to eject (usually lib/protocols)
```bash
yo servable:ejectprotocol
```

### Add a new class to a protocol
Scaffolds a new class inside a protocol
```bash
yo servable:class
```

### Generate a local infrastructure (docker compose)
Scaffolds a recommended local infrastructure using docker-compose.
It will generate:
- a Mongo database for the app
- a Mongo database for the servable utils
- a S3 like objects storage (Minio)
- a LiveQueryServer
- a Redis cache

```bash
yo servable:docker
```

### Generate a complete backend project
This command generates a fully fledged backend project along the local infrastructure needed to run it
```bash
yo servable:full
```

### Troubleshooting
#TODO
<BashTabs npm={"npm cache clean --force"} />

### 
```bash
yo servable -t app -n Love -i love -d "An app for lovers" -m RGUEONE
```
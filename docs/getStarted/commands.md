---
sidebar_position: 5
---

# Commands

You can install Servable for Parse Server via **[Yeoman](https://yeoman.io)**.

## Servable generator
These commands are available once you install the servable generator:
```bash
npm install -g generator-servable
```
https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub
```
npm i -g git+ssh://git@github.com:yelounak/generator-servable.git

npm i git+https://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@github.com/yelounak/generator-servable.git


```

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

```bash
cd lib/protocols
yo servable:protocol
```

### Eject a protocol
Ejects an inline protocol by creating an npm package

```bash
cd lib/protocols
yo servable:ejectprotocol
```

### Add a new class to a protocol

```bash
cd my-protocol
yo servable:class
```
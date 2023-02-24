---
sidebar_position: 1
---

# Quick installation

You can install Servable for Parse Server via **[Yeoman](https://yeoman.io)**.

## Getting Started

Get started by **creating a new application**.

### What you'll need

- **[Node.js](https://nodejs.org/en/download/)** version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- **[Yeoman](https://yeoman.io)** version 4.3.1 or above

- **[Docker](https://docker.io)** version 20.10.0 or above

## Launch the docker-compose 

Launch a complete local infrastructure to support the servable.

**[docker-compose](../static/docker-compose.yaml)**

## Generate a new server

Generate a new servable app by running the command:

```bash
yo servable-parse
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

You will be prompted to enter the basic informations needed to start a full fledged servable.

The command also installs all necessary dependencies you need to run servable.

## Start your server

Run the development server:

```bash
cd my-app
yarn start
```

The `cd` command changes the directory you're working with. In order to work with your newly created servable-parse app, you'll need to navigate the terminal there.

The `yarn start` command builds your app locally and serves it through a development server, ready for you to view at http://localhost:1391/.

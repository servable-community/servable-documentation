---
sidebar_position: 1
---

# High level architecture

Servable is a template that helps orchestrate protocols and their respective classes during the entire lifecycle of a server.
Servable is built on top of Parse Server with the intention to handle protocols along the features Parse Server already serves.

Servable at its core is a structure that works hand in hand with the servable-engine which handles all the heavy lifting of registering protocols, computing classes, handling migrations and more.

Servable can be launched using a configuration.

## Components
- An Express app
- A Parse Server instance

## Boot process

When the server is launched, the servable-engine performs the following tasks:

- Launches an Express app
- Computes the target database schema by aggregating the custom app tables and the protocols applied to those tables
- Checks if a schema migration is necessary. It migrates the schema or not accordingly
- Binds every protocol to the events triggered by the tables that use them
- Exposes every protocol custom function
- Registers jobs

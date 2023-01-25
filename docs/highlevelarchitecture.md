---
sidebar_position: 2
---

# High level architecture

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

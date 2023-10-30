---
sidebar_position: 7
---
import BashTabs from '@site/src/components/generic/bashTabs'

# Components & Tools

## Servable Engine

The servable engine is responsible for all the Servable related operations on a servable template project.

It is available as an npm dependency.

<BashTabs npm={`npm install -g servable-engine`} />

## Servable CLI (yeoman generator)

The servable CLI is responsible for scaffolding and manipulating servable and protocol projects.

It is available as an npm package. It uses under the hood:
- the Servable engine 
- the Servable Protocols Registry API

<BashTabs npm={`npm install -g yo generator-servable`} />


## Servable Registry

The servable protocols registry is a centralized  protocols repository.

It is available at registry.servablecommunity.com

It serves a public api at api.registry.servablecommunity.com

## Servable Dashboard

The servable dashboard is a fork of the Parse Dashboard aimed at providing the best Servable experience.

It is available with the CLI when launching a full fledged local app.
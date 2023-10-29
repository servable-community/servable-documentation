---
sidebar_position: 7
---
import BashTabs from '@site/src/components/generic/bashTabs'

# Servable Community Tools

## servable-engine

The servable engine is responsible for all the Servable related operations on a servable template project.

It is available as an npm dependency.

<BashTabs npm={`npm install -g servable-engine`} />

## servable-cli

The servable CLI is responsible for scaffolding and manipulating servable and protocol projects.

It is available as an npm package. It uses under the hood:
- the Servable engine 
- the Servable Protocols Registry API

<BashTabs npm={`npm install -g yo generator-servable`} />


## servable registry

The servable protocols registry is a centralized  protocols repository.

It is available at registry.servablecommunity.com

It serves a public api at api.registry.servablecommunity.com
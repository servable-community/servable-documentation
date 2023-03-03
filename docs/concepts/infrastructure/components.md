---
sidebar_position: 1
---
import SVGComponent from '@site/src/components/generic/svg'

# Components

A servable deployment will use a few other components to run alongside a main servable app.

<SVGComponent 
Svg={require('./components.svg').default} 
className={`w-full`} 
role="img" />

## Servable app
The actual servable app
*Mandatory*

## Parse dashboard
A Parse dashboard
*Optional*

## App database
The mongodb or PostGreSQL database
*Mandatory*

## Minio
An S3 like bucket server for storing files
*Mandatory*

## Utils database
An utilitary database used by the arbiter to store migration status and current instances
*Mandatory*

## Redis cache 
Optional

## Live Query Server
Optional


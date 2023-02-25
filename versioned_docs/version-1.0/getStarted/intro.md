---
sidebar_position: 1
---

# Overview



![logo](/img/polar-bear-2.png)
<!-- ![logo](/img/grasshopper.png) -->
<!-- <img src="/img/2452897.png" alt="servable" style={{ width:'200px' }}/>
<img src="/img/plus2.png" alt="plus" style={{ width:'50px', paddingBottom: 70, marginLeft: 30, marginRight: 30 }}/>
<img src="/img/grasshopper.png" alt="protocols" style={{ width:'200px' }}/> -->


:::warning
Servable is still experimental and its api may change in the future.
:::

**Servable for [Parse Server](https://docs.parseplatform.org)** is a Node JS framework built on top of Express JS and Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of Parse Server and protocols.

Servable at its core is a server template that uses the servable-engine to orchestrate the different protocols in the application. Servable streamlines the server development by separating every "groupable" behaviour to be a protocol, so that it is naturally extracted from the base code and possibly migrated into its own package. By doing so, Servable enforces the best SOLID and Domain Driven Design principles right away.

Main features:
- Quick start and Plug & Play Node JS framework
- Run protocols
- Schema based classes and auto-migration 
- Templates for classes 
- Templates for custom protocols

## Why Servable?
At @anak we created the protocols in our Node JS + Parse server project. What was an experience to ease the backend development quickly became a good practice that helped us keep a clean codebase. They worked so well we decided to streamline their integration with the code base for future projects. We were inspired by the powerful ways NextJs improved the React experience by providing an efficient template on top of it. Yet we did not want to hide the Parse Server framework behind ours as we truly love Parse. Servable allows to tap into all the existing and upcoming Parse features and yet it dramatically simplifies the development process. A well designed Servable project will comprise almost nothing more than the actual classes and business logic of the platform, other repetitive functions and behaviours will use existing protocols implemented by the community or entreprise-private protocols.

## Should you use Servable?
Servable is likely a good fit for you if
- You want to group the development of your server by capacity
- You want to reuse a capacity (protocol) over different models without copying it over and over
- You want to make that capacity available throughout your organization or publish it on the web
- You are building a new platform from scratch but you don't want reinvent the wheel for the usual suspects: social interactions, versionning, data consistency over deletion 

## Examples of protocols
### Followable
- Gives an object (followed) the capacity to be followed by another object (follower) 
- keeps the number of followers up to date on the followed object
- creates and maintains join tables with the status of the follow relationship

### Emailable
- Gives a ServableApp the capacity to use transactional emails via a simple API that is registered via the Servable.Mailing object
- Keeps a list of email templates
- Can be used with Sendgrid as of now

```mermaid
erDiagram
    ARTICLE ||--o{ COMMENTABLEENTRY : entries
    ARTICLE {
        string objectId
        string name
        string custNumber
        string sector
    }
    COMMENTABLEENTRY ||--|{ LINE-ITEM : contains
    COMMENTABLEENTRY {
        string objectId
        string value
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }

```
**...you love Parse Server**
There is no reason not to use Servable if you have previously used a Parse Server. 

**...you care about productivity and developer experience**
Servable provides a predetermined template that sets a clear developer's guideline 

## Servable in your stack
Servable comes bundled with Parse Server that sets up a working set of tables that handle users, sessions and installation. You can use it to bootstrap your platform or as a microservice that you can access through REST or GraphQL without using the _User, Session and installation tables.

## Architecture


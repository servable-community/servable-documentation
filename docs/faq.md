---
sidebar_position: 8
---

# FAQ 💡

![logo](/img/icon.svg)

<!-- ## Servable -->

### How is Servable different from other Node JS protocols?
Servable is tailored for protocols which are a unique and opinionated way to model and develop a server. Other Node JS frameworks are either less structured or use other opinionated templates like controllers. 

### Should I learn Parse Server before I start using Servable?
Yes! We highly recommend being familiar with Parse Server concepts before you use Servable. We know this overhead is not perfect. We are working to integrate Parse Server's incredible features straight into Servable and use a unified API in the future. We have made a quick guide to help you grasp the most important Parse Server concepts you need. Check it out if you're a Parse newbie ;)

<!-- ## Protocols -->

### Are protocols independant from each other?
We believe it is a healthy pattern to divide the development effort into capacities that overlap the least. During our developments we managed to refactor or create from scratch dozens of protocols and only in rare occasions did a protocol need the capacity of another protocol. For those use cases we thought about integrating an abstract API or a hook straight into the Servable namespace, for example, the *followable* protocol needs to send an email that is provided to the application by the *emailable* protocol. The *emailable* protocol will register its capacity to send emails to the Servable object, and the *followable* protocol will consume it without knowing the source protocol.

### Can protocols collide?
Protocols can collide when they don't follow guidelines for naming. We recommend protocols to prefix the fields added 
Protocols can collide when they don't follow guidelines for naming. We recommend protocols to prefix the fields they add to object by a unique key, usually its the protocol id itself or its slug if the id is too long. Servable also enforces functions name separation by uppending the protocol id or its slug to the functions declared by the protocol.

### Can I use third party protocols?
We encourage developers to package their protocols and share them with the community, since protocols themselves are designed to be self sufficient and separated from the app code base and other protocols, it's super easy to make an npm package and publish it publicly or on an enterprise repository. 

### Why can't I modify the schema with the Servable Dashboard?
The Servable Dashboard allows us to change the app schema by default. Although this behaviour is handy for local projects and its quick of use, we chose to use a strictly JSON based schema storage and update for these reasons:
- Schema computation
- Schema migration
- Make the security more visible and mistakes more obvious
- Versioning

### Can I modify a protocol
Servable's api allows you to give parameters to a protocol.
If these parameters are not enough for your use case, let's say you want to increase the security level of a protocol's class, you can fork an existing protocol onto the app's /protocols folder

```bash
yo servable:forkprotocol
```

### How do I add an express middleware to my app?
The *afterInit* method allows you manipulate the underlying express middleware when it has been initialized and ready. You can hook any middleware at this point.


### Play with gitlab
Blabala

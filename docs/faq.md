---
sidebar_position: 6
---

# FAQ

![logo](/img/polar-bear-4.png)

### How is Servable different from other Node JS protocols?
Servable is tailored for protocols which are a unique and opinionated way to model and develop a server. Other Node JS frameworks are either less structured or use other opinionated templates like controllers. We believe it is a healthy pattern to divide the development effort into capacities that overlap the least. During our developments we managed to refactor or create from scratch dozens of protocols and only in rare occasions did a protocol need the capacity of another protocol. For those use cases we thought about integrating an abstract API or a hook straight into the Servable namespace, for example, the *followable* protocol needs to send an email that is provided to the application by the *emailable* protocol. The *emailable* protocol will register its capacity to send emails to the Servable object, and the *followable* protocol will consume it without knowing the source protocol.

### Should I learn Parse Server before I start using Servable?
Yes! We highly recommend being familiar with Parse Server concepts before you use Servable. We know this overhead is not perfect. We are working to integrate Parse Server's incredible features straight into Servable and use a unified API in the future. We have made a quick [guide](../concepts/parseServer.mdx) to help you grasp the most important Parse Server concepts you need. Check it out if you're a Parse newbie ;)


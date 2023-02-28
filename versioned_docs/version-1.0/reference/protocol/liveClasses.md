---
sidebar_position: 2
---

# liveClasses.js

:::info Path
**/liveClasses.js**
:::
This is the Servable way of implementing Parse Server LiveQuery https://parseplatform.org/Parse-SDK-JS/api/master/Parse.LiveQuery.html

Allows the provided classes to be accessible via liveQuery.

## API

### Function
- Arguments:
    - none
- Returns:
    - an array of classes

## Examples

### App protocol live classes
In **App protocol**, allow these classes to be accessible via Socket.

```js
export default async () => {
    return process.env.PARSE_SERVER_LIVESERVER_CLASSES ? JSON.parse(process.env.PARSE_SERVER_LIVESERVER_CLASSES) : []
}
```
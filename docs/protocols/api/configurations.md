---
sidebar_position: 3
---

# Config

## Concept
Servable config adds the ability to change the behaviour and appearance of your Servable app without  redeploying your server or requiring users to update their app. 
Parse Server Config is a simple way to set key values and to retrieve them from a client app. It's nevertheless not as complete as Firebase Remote Config for example. Thus Servable Config adds protocol based config with conditions and groups.

Servable Config was built from the ground up to respect the protocol lifecycle and separation of concerns. Every protocol can define config entries that drive its behaviour at run time, including the app protocol. The config entries are defined along their conditions and groups in dedicated json files thus guaranteeing an environment agnostic deployment.

Servable's unique manualable mechanism used for seeds (manualable protocol) allows an hybrid config. You can define initial config entries in json files and manually add new configs or update existing live. Both the updated and new entries will keep their values while new entries in the json files will be taken into account.

### Entries

Servable Config entries are 
- Data types

### Conditions

Servable Config conditions are a set of rules that determine the actual config entry value a particular user will receive.

#### Types
- Installation


### Groups
Servable Config groups are a way to organise a set of entries.


### Implementation path

1. Add config entries in you protocol/config dedicated files: entries
2. Run / Deploy your Servable app
3. 

### Policies and limits

Note the following policies:

- Don't use Servable Config to make app updates that should require a user's authorization. This could cause your app to be perceived as untrustworthy.
- Don't store confidential data in Remote Config parameter keys or parameter values. It is possible to decode any parameter keys or values stored in the Remote Config settings for your project.
- Don't attempt to circumvent the requirements of your app's target platform using Remote Config.

Note the following limits:



### Roadmap

Servable Dashboard will include a dedicated UI for config entries, conditions and groups manipulation.



Generator tasks
- Generate client side defaults

## Folder structure

```bash
├── classes
│   ├── classA
│   │   │   ├── class
│   │   │   │   ├── index.js
│   │   │   │   ├── protocols.js
│   │   │   ├── functions
│   │   │   │   ├── index.js
│   │   │   ├── triggers
│   │   │   │   ├── index.js
```

- The **class** folder contains 
    - the es6 classes handled by the protocol.
    - the protocols declaration.
- The **functions** folder contains cloud functions specific to the class
- The **triggers** folder contains triggers functions

## Usage
### Declare a class

```js
export default class ClassA extends Servable.App.Object {
    constructor() {
        super('ClassA')
    }
}
```
### Use protocols
```js
export default [
    //protocolslist (see declaring protocols)
]
```

### Use functions
### Use triggers

## Example
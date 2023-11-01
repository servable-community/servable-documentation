---
sidebar_position: 3
---

# Functions
Servable Automatic Seed is an easy way to seed Servable classes.

Servable Automatic Seed was built from the ground up to respect the protocol lifecycle and separation of concerns. Every protocol can define config entries that drive its behaviour at runtime, including the app protocol. The config entries are defined along their conditions and groups in dedicated json files thus guaranteeing an environment agnostic deployment.

Servable's unique manualable mechanism used for seeds (manualable protocol) allows an hybrid config. You can define initial config entries in json files and manually add new configs or update existing live. Both the updated and new entries will keep their values while new entries in the json files will be taken into account.

## Entries

Servable Config entries are 
### Data types

## Conditions

Servable Config conditions are a set of rules that determine the actual config entry value a particular user will receive.

### Types
#### Installation
#### Installation

## Groups
Servable Config groups are a way to organise a set of entries.


## Implementation path

1. Add config entries in you protocol/config dedicated files: entries
2. Run / Deploy your Servable app
3. 

## Policies and limits

Note the following policies:

- Don't use Servable Config to make app updates that should require a user's authorization. This could cause your app to be perceived as untrustworthy.
- Don't store confidential data in Remote Config parameter keys or parameter values. It is possible to decode any parameter keys or values stored in the Remote Config settings for your project.
- Don't attempt to circumvent the requirements of your app's target platform using Remote Config.

Note the following limits:



## Roadmap

Servable Dashboard will include a dedicated UI for config entries, conditions and groups manipulation.



Generator tasks
- Generate client side defaults
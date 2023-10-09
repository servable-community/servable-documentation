---
sidebar_position: 2
---

# Declaring a protocol
A protocol applies to a class.
You can add a protocol to the static protocols array.

## Simple declaration
Use the protocol's id in the array of protocols:

```js
export default class Blog extends Servable.App.Object {

    static protocols = [
        'localable',
        'countryable',
        'taggable',
        'slugable',
        'usersinable',
        'reviewable',
        'versionable',
        'printable',
        'commentable',
        'reactable',
        'rolehostable',
        'searchable',
        'currencyable',
        'bankaccountable',
        'walletable',
        'publishable',
        'disposableorphansable',
        'disposablechildrenable',
        'notificationtargetable',
        'savable',
        'sharable',
        'pageable',
        'followable'
    ]
...
}
```

## Use a specific protocol or version
Let's say we want to use the apptunnelable protocol to our ServableApp class.
apptunnelable makes it possible to tunnel all the api calls to the current server via NGROK.
It is possible to give a struct with the id of the protocol and the module added to the project (npm).
You can also give configuration options to the protocol via the params object.

```js
export default class ServableApp extends Servable.App.Object {
    static protocols = [
        {
            id: 'apptunnelable',
            module: {
                '@servable-community/apptunnelable-parse-server': '*'
            },
            params: {
                tunnelUrl: process.env.SERVABLE_EXTERNAL_TUNNEL,
                serverPort: process.env.SERVER_PORT,
                ngrokAuthToken: process.env.NGROK_AUTH_TOKEN
            }
        },
        'appagentable',
        'localable',
        'countryable',
        'taggable',
        'slugable',
        'usersinable',
        'reviewable',
        'versionable',
        'printable',
        'commentable',
        'reactable',
        'rolehostable',
        'searchable',
        'currencyable',
        'disposableorphansable',
        'disposablechildrenable',
        'notificationtargetable',
        'savable',
        'sharable',
        {
            id: 'publishable',
            name: 'publishable',
            slug: 'ps',
            module: {
                '@servable-community/publishable-parse-server': '*'
            },
            version: '*',
            params: {
                liveClasses: ['publishable'],
                schema: {
                    restrictSecurity: true
                }
            }
        },
        {
            id: 'pageable',
            name: 'pageable',
            slug: 'pg',
            params: {}
        },
        'followable',
        {
            id: 'emailable',
            name: 'emailable',
            slug: 'em',
            params: {
                apiKey: process.env.EMAIL_API_KEY,
                frontWebUrl: process.env.FRONT_WEB_URI,
                env: process.env.NODE_ENV,
                appName: process.env.PARSE_SERVER_APP_NAME,
                restrictSend: process.env.EMAIL_RESTRICT_SEND,
                restrictTo: process.env.EMAIL_RESTRICT_SEND_TO,
                restrictToRegex: process.env.EMAIL_RESTRICT_SEND_TO_REGEX,
                schema: {
                    exclude: false
                }
            }
        },        
        {
            id: 'videobunnyable',
            name: 'videobunnyable',
            slug: 'vb',
            params: {
                apiKey: process.env.VIDEO_BUNNY_API_KEY,
                appName: process.env.PARSE_SERVER_APP_NAME
            }
        },
        'faqable',        
        'userproxyable',
        'addressable',
        'addresssocialable',
        'userrequestable',
    ]
```

## API

- id: the unique id for the protocol
- name: the name of the protocol
- slug: experimental: the slug that will be used by the protocol instead of the full name
- params: an object containing configuration parameters that will be passed to the protocol during execution
- module: an object containing the dependency used for this protocol, along with a specific version if needed
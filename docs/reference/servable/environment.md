---
sidebar_position: 1
---

# Environment variables


# Servable environment variable
```bash
NODE_ENV=development
SERVABLE_APP_ID=<%= appId %>
SERVABLE_APP_NAME=<%= appName %>
SERVABLE_DATABASE_URI=<%- databaseURI %>
SERVER_PORT=<%= appPort %>
SERVABLE_VERBOSE=1
SERVABLE_ENABLE_ANONYMOUS_USERS=0
SERVABLE_ALLOW_CLIENT_CLASS_CREATION=0
SERVABLE_LOG_LEVEL=verbose
SERVABLE_MASTER_KEY=<%= masterKey %>
SERVABLE_REST_API_KEY=<%= restApiKey %>
SERVABLE_JAVASCRIPT_KEY=<%= javascriptKey %>
SERVABLE_MOUNT=/<%= appEndpoint %>
SERVABLE_MOUNT_STAGING=/parsestaging
SERVABLE_PREVENT_LOGIN_WITH_UNVERIFIED_EMAIL=0
SERVABLE_REDIS_CACHE_URI=
SERVABLE_REDIS_LIVESERVER_DB_URI=
SERVABLE_LIVESERVER_CLASSES = []
SERVABLE_OBJECTSTORAGE_ROOT_USER=<%= minioUser %>
SERVABLE_OBJECTSTORAGE_ROOT_PASSWORD=<%= minioPassword %>
SERVABLE_OBJECTSTORAGE_ENDPOINT=<%- minioEndpoint %>
SERVABLE_OBJECTSTORAGE_BUCKET_NAME=<%= minioBucket %>
SERVABLE_PUSH_IOS_KEYID=
SERVABLE_PUSH_IOS_TEAMID=
SERVABLE_APP_BUNDLE_ID=
SERVABLE_ANDROID_FCM_SERVER_KEY=

SERVABLE_UTILS_DATABASE_URI=<%- utilsDatabaseURI %>
PUBLIC_SERVER_URL=http://localhost:<%= appPort %>
SERVABLE_PUBLIC_SERVER_URL=http://localhost:<%= appPort %>
SERVABLE_SERVER_URL=http://localhost:<%= appPort %>


# Custom variables

```



|  Variable | Description | Type | Default value |  |
|:--|:--|:--|:--|:--|
| NODE_ENV | The node environment | string | development |  |
| SERVABLE_APP_ID | Application id | string |  |  |
| SERVABLE_APP_NAME | Application name | string |  |  |
| SERVABLE_DATABASE_URI |  |  |  |  |
| SERVER_PORT | Server port | number | 1374 |  |
| #TODO |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
| SERVABLE_UTILS_DATABASE_URI |  |  |  |  |
| PUBLIC_SERVER_URL |  |  |  |  |
| SERVABLE_PUBLIC_SERVER_URL |  |  |  |  |
| SERVABLE_SERVER_URL |  |  |  |  | 
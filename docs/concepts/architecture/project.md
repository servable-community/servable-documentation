---
sidebar_position: 6
---

# Project structure

```
my-app
├── lib
│   ├── index.js
│   ├── appprotocol
│   │   │   ├── beforeInit
│   │   │   ├── afterInit
│   │   │   ├── functions
│   │   │   ├── schema
│   │   │   ├── class
│   │   │   ├── classes
│   │   │   ├── seed
│   │   │   ├── lib
│   │   │   ├── triggers
│   │   │   ├── liveClasses.js
│   ├── config
│   │   └── index.js
│   ├── protocols
│   │   ├── customProtocolA
│   │   │   ├── beforeInit
│   │   │   ├── afterInit
│   │   │   ├── functions
│   │   │   ├── schema
│   │   │   ├── class
│   │   │   ├── classes
│   │   │   ├── seed
│   │   │   ├── lib
│   │   │   ├── triggers
│   │   │   ├── liveClasses.js
│   │   ├── customProtocolB
│   │   │   ├── ...
├── servable.config.js
├── .env
├── package.json
├── README.md
└── yarn.lock
```
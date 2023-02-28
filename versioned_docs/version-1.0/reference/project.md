---
sidebar_position: 2
---

# Project structure

```bash
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
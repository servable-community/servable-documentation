---
sidebar_position: 2
---

# Project structure

```bash
├── lib
│   ├── index.js
│   ├── app
│   │   │   ├── beforeInit
│   │   │   ├── afterInit
│   │   │   ├── functions
│   │   │   ├── schema
│   │   │   ├── config
│   │   │   ├── class
│   │   │   ├── classes
│   │   │   ├── seed
│   │   │   ├── jobs
│   │   │   ├── lib
│   │   │   ├── assets
│   │   │   ├── triggers
│   │   │   ├── liveClasses.js
│   ├── protocols
│   │   ├── customProtocolA
│   │   │   ├── beforeInit
│   │   │   ├── afterInit
│   │   │   ├── functions
│   │   │   ├── schema
│   │   │   ├── config
│   │   │   ├── class
│   │   │   ├── classes
│   │   │   ├── seed
│   │   │   ├── jobs
│   │   │   ├── lib
│   │   │   ├── assets
│   │   │   ├── triggers
│   │   │   ├── liveClasses.js
│   │   ├── customProtocolB
│   │   │   ├── ...
├── servable.config.js
├── .env
└── package.json
```
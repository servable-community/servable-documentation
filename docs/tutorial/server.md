---
sidebar_position: 2
---

# Server configuration

## Bootstrap
Let's create our Servable app

### 1. Install dependencies
```bash
npm install -g generator-servable
npm install -g yo
```

### 2. Create a parent folder for the whole project
```bash
mkdir opus
cd opus
```

### 3. Launch docker server
The docker file can be found here: **[docker-compose](../static/docker-compose.yaml)**
```bash
mkdir infrastructure
cd infrastructure
docker compose --project-name opus -f docker-compose.app.yml
```

### 4. Create the app
```bash
cd ..
```

```bash
yo servable --appName Opus --appId opus --appId --masterKey MyMasterKeyToHide --javascriptKey MyJavascriptKeyToHide
```

```bash
cd opus
```

## Data model
At this point the application has 4 tables already:
- A **_User** table 
- A **_Session** table 
- An **_Installation** table 
- A **ServableApp** table that serves as a Servable anchor towards which protocols that are geared towards the whole app will apply to

The _User, _Session and _Installation tables are automatically generated and handled by Parse Server. We will add fields to _User later.

We will need:
- A **Book** table to store the books users have read or want to read
- A **Selection** table to store our editorial picks of the day 




```mermaid
erDiagram
    BOOK ||--o{ COMMENT : places
    BOOK {
        string name
        string custNumber
        string sector
    }
    COMMENT ||--|{ LINE-ITEM : contains
    COMMENT {
        int COMMENTNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }

```
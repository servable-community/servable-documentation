---
sidebar_position: 4
---

# Lifecycle

```mermaid
stateDiagram
    [*] --> beforeInit
    beforeInit --> seed
    seed --> afterInit
    afterInit --> [*]
```
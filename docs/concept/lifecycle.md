---
sidebar_position: 3
---

# Lifecycle

```mermaid
stateDiagram
    [*] --> beforeInit
    beforeInit --> seed
    seed --> afterInit
    afterInit --> [*]
```
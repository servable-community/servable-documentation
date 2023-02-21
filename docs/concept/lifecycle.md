---
sidebar_position: 2
---

# Lifecycle

```mermaid
stateDiagram
    [*] --> beforeInit
    beforeInit --> seed
    seed --> afterInit
    afterInit --> [*]
```
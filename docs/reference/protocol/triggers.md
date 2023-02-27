---
sidebar_position: 2
---

# triggers

Defines triggers on classes that conform to this protocol

```js
import setup from '../lib/setup'
import tearDown from '../lib/tearDown'
import completeSetup from '../lib/completeSetup'

export const afterDelete = async ({ request }) => {
    const { object } = request
    await tearDown({ object })
}

export const beforeSave = async ({ request }) => {
    const { object } = request
    await setup({ object })
}

export const afterSave = async ({ request }) => {
    const { object } = request
    await completeSetup({ object })
}
```

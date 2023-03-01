---
sidebar_position: 2
---

# class

Allows to define a subclass for this protocol to use other protocols, as to conform to other object classes.

## Example
We want our protocol **walletable** to use disposableOrphans and disposableChildren to manage data consistency over deletion:

```js

export default ({ ParentClass }) => class TargetClass extends ParentClass {
    static protocols = [
        ...super.protocols,
        ...ownProtocols,
    ]

    disposableOrphans() {
        const items = super.disposableOrphans ? super.disposableOrphans() : []
        return [
            ...items,
            'wallet'
        ]
    }

    disposableChildren() {
        const items = super.disposableChildren ? super.disposableChildren() : []
        return [
            ...items,
            'wallet'
        ]
    }
}

export const ownProtocols = [
    "disposableorphansable",
    "disposablechildrenable"
]
``` 

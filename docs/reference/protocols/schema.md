---
sidebar_position: 2
---

# schema

Lists the classes (tables) this protocol defines at a high level (different from schema classes defined in schema).

## classes/myclass/class/
```js

export default class Wallet extends Servable.App.Object {
    constructor() {
        super('Wallet')
    }

    static protocols = [
        'roleguestable',
        'currencyable'
    ]

    transactionsQuery = () => {
        const _wallet = this
        const relation = _wallet.relation('transactions')
        return relation.query()
    }

    updateComputedAmount = async () => {

    }

    /* #region Wallet */
    addTransaction = async (walletTransaction) => {
        const walletTransactionCurrency = walletTransaction.get('currency')
        if (!walletTransactionCurrency) {
            console.error(new Error('addTransaction > cannot add walletTransaction because it has no currency code'))
            return null
        }
        const _wallet = this
        const walletCurrency = _wallet.get('currency')
        if (!walletCurrency) {
            console.error(new Error('addTransaction > cannot add walletTransaction because to wallet because wallet has no currency code'))
            return null
        }

        walletTransaction.set('wallet', _wallet)
        await walletTransaction.save(null, { useMasterKey: true })

        const relation = _wallet.relation('transactions')
        relation.add(walletTransaction)
        var amount = _wallet.get('amount')



        amount = !amount ? 0 : amount
        var transactionAmount = walletTransaction.get('amount')
        var convertedTransactionAmount
        convertedTransactionAmount = transactionAmount
        //TODO:
        //if (walletCurrency.toUpperCase() === walletTransactionCurrency.toUpperCase()) {
        // convertedTransactionAmount = transactionAmount
        // } else {
        //     let currencyConverter = new CC({
        //         from: walletTransactionCurrency.toUpperCase(),
        //         to: walletCurrency.toUpperCase(),
        //         amount: transactionAmount,
        //         //isDecimalComma: true
        //     })
        //     const response = await currencyConverter.convert()
        //     if (!response) {
        //         console.error(new Error('addTransaction > cannot convert'))
        //         return null
        //     }
        //     convertedTransactionAmount = response
        // }

        convertedTransactionAmount = !convertedTransactionAmount ? 0 : convertedTransactionAmount
        amount += convertedTransactionAmount
        _wallet.set('amount', amount)
        return _wallet.save(null, { useMasterKey: true })
    }

    removeTransaction = async (walletTransaction) => {
        const _wallet = this
        const relation = _wallet.relation('transactions')
        relation.remove(walletTransaction)
        return _wallet.save(null, { useMasterKey: true })
    }

    /* #endregion */
}
``` 

## classes/myclass/triggers/

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


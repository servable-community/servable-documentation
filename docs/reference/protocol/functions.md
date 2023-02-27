---
sidebar_position: 2
---

# functions

:::info Path
**/functions**
:::
This is the Servable way of implementing Parse Server Cloud functions https://docs.parseplatform.org/cloudcode/guide/

A function is an exposed API function that is accessible at
https://myserver.com/parse/myFunction

You can define here all the functions for a protocol.
Servable will register all exported functions in all the files contained in functions recursively.

## API

### Function
- Arguments:
    - **request**: a Parse request
- Returns:
    - void

### Options
#### Prefix
By default Servable prefixes all protocol functions with the protocol id or slug if provided with a camel case.
For example, if you define a function **versionItem** for the protocol *Versionable*. The final function will be **versionableVersionItem** and will be accessible at https://myserver.com/parse/versionableVersionItem

## Examples

### Request password reset
In **App protocol**, allow a user to reset his password.

```js
import requestOperation from '../lib/userRequest/resetPassword/request'
import redeemIfApplicable from '../lib/userRequest/resetPassword/redeem'
import requestsPerRate from '../lib/userRequest/resetPassword/rate'

import validator from "email-validator"
export const userRequestPasswordReset = async (request) => {
    const { email } = request.params
    if (!email || !validator.validate(email)) {
        throw (new Error('Please provide an email.'))
    }

    const requests = await requestsPerRate({ email })
    if (requests > process.env.EMAIL_RESET_REQUESTS_MAX_RATE) {
        throw (new Error('You have requested an email reset too many times. Please wait until tomorrow.'))
    }

    return requestOperation({ email })
}
``` 

### Version an object
In **Versionable** protocol, force the versioning of an object.

```js
import addVersionWithId from '../lib/addVersionWithId'

export const versionItem = async (request) => {
    const user = await Servable.App.Utils.prepareRequestWithUser(request)
    const { className, id } = request.params
    return addVersionWithId({ className, id, user })
}
``` 

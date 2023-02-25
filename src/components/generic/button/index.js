import * as React from 'react'
import Button from '@mui/material/Button'

export default (props) => {
    return <Button {...props}>{props.children}</Button>
}
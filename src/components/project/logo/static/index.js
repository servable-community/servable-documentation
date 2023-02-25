import React from "react"

export default (props) => {
    const { size } = props
    return <img src={sourceForSize({ size })} className={`object-none`} />
}

const sourceForSize = ({ size }) => {
    switch (size) {
        default:
            {
                return 'img/polar-bear.png'
            }
    }
}
import React from "react"

export default (props) => {
    const { size } = props
    return <img src={sourceForSize({ size })}
        className={`object-none`} />
}

const sourceForSize = ({ size }) => {
    switch (size) {
        default: {
            return 'img/polar-bear.png'
        }
        case 's': {
            return 'img/polar-bear-3.png'
        }
        case 'm': {
            return 'img/polar-bear-2.png'
        }
        case 'l': {
            return 'img/polar-bear-1.png'
        }

    }
}
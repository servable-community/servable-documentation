import React from "react"
import { useLottie } from "lottie-react"
import animationData from "@site/static/img/polar-bear.json"

export default () => {
    const options = {
        animationData,
        loop: true
    }

    const { View } = useLottie(options)

    return <>{View}</>
}
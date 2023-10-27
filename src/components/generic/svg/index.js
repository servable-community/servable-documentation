import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, file, title, description, className = '', role = "img" }) => {
  const { isDarkTheme } = useColorMode()
  const _Svg = Svg ? Svg : require(file).default
  return <_Svg
    fill={`${isDarkTheme ? 'white' : 'black'}`}
    className={` 
            ${className}         
          w-full`}
    role={role} />
}


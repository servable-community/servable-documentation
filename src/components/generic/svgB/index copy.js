import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, title, description, className = '' }) => {
  const { isDarkTheme } = useColorMode()

  return <Svg
    fill={`${isDarkTheme ? 'white' : 'black'}`}
    className={` 
            ${className}         
          w-full`}
    role="img" />
}


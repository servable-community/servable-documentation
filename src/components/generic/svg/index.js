import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, file, title, description, className = '', role = "img" }) => {
  const { isDarkTheme } = useColorMode()

  return <Svg
    fill={`${isDarkTheme ? 'white' : 'black'}`}
    className={` 
            ${className}         
          w-full`}
    role={role} />
}


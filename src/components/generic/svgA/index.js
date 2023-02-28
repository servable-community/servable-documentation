import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import ThemedImage from '@theme/ThemedImage'


export default ({ Svg, title, description, className = '' }) => {
  const { isDarkTheme } = useColorMode()

  return <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/img/docusaurus_light.svg'),
      dark: useBaseUrl('/img/docusaurus_dark.svg'),
    }} />
  return <Svg
    fill={`${isDarkTheme ? 'white' : 'black'}`}
    className={` 
            ${className}         
          w-full`}
    role="img" />
}


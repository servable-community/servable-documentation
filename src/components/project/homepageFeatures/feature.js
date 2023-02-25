import React from 'react'
import clsx from 'clsx'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, title, description }) => {
  const { isDarkTheme } = useColorMode()

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`          
          w-[200px]
          h-[200px]`}
          role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}


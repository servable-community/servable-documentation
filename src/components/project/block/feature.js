import React from 'react'
import clsx from 'clsx'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, title, description }) => {
  const { isDarkTheme } = useColorMode()

  return (
    <div className={clsx('col col--4 mb-16 md:mb-0')}>
      <div className="text--center">
        <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`                         
          px-10
          w-[180px]
          h-[180px]`}
          role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}


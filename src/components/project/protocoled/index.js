import React from 'react'
import SVGComponent from '@site/src/components/generic/svg'

export default () => {

  return <div class={`        
        bg-gradient-to-r
        from-[#FAF3DD]
        dark:from-[#121212]
        via-[#FAF3DD]
        dark:via-[#141414]
        to-[#ffffff]
        dark:to-[#242424]        
        px-6
        md:px-6      
        py-8
        flex 
        justify-center`}>
    <SVGComponent
      Svg={require('/img/protocoled.svg').default}
      className={`h-[300px]`}
      role="img" />
  </div>
}
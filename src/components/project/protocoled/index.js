import React from 'react'
import SVGComponent from '@site/src/components/generic/svg'

export default () => {

  return <div class={`        
        bg-gradient-to-r 
        from-[#FAF3DD]
        dark:from-[#434343]
        via-[#FAF3DD]
        dark:via-[#323232]
        to-[#ffffff]
        dark:to-[#434343]        
        px-6
        md:px-6      
        py-4
        flex 
        justify-center`}>
    <SVGComponent
      Svg={require('/img/protocoled.svg').default}
      className={`h-[300px]`}
      role="img" />
  </div>
}
import React from 'react'
import SVGComponent from '@site/src/components/generic/svg'

export default () => {

  return <div class={`                       
        px-6
        md:px-6      
        py-28
        flex 
        justify-center`}>
    <SVGComponent
      Svg={require('/img/protocoled.svg').default}
      className={`h-[300px]`}
      role="img" />
  </div>
}
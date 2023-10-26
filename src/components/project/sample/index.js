import React from 'react'

import BashTabs from '@site/src/components/generic/bashTabs'

export default () => {

  return <div class={`                     
        px-6                
        flex 
        justify-center`}>
    <div class={`          
          justify-center      
          align-middle                
          max-w-md
        `}>
      <h2>{`Quick start`}</h2>
      <p className={``}>
        <BashTabs npm={`npm install -g yo generator-servable  \nyo servable -q -t app -n MyApp \nyarn start`} />
      </p>
    </div>
  </div>
}
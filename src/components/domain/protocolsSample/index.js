import React from "react"
import Widget from '@site/src/components/domain/widget'

export default props => {
    const {  } = props

    return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        pt-6
        `}>
      <div class={`
          text-right
          flex
          justify-center
          align-middle
          h-full
        `}>
        {/* <LogoAnimated /> */}
        {/* <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`          
          w-[180px]
          h-[180px]`}
          role="img" /> */}
      </div>
      <div class={`                
          flex
          justify-center                 
        `}>
        <div class={`
          justify-center
          text-center
          pt-8     
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`Community protocols 🐝 🍯`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Servable was built from the ground up to use protocols in all ways possible. The <b>Servable app</b> itself is a protocol (app protocol). The Servable engine uses core protocols like <i>manualable</i>, <i>disposableorphans</i> and more.
          </p>
          <div className="
    mb-6 
    flex
    space-x-4 
    px-4
    
    justify-center
          ">        
        <Widget protocolId={'@servable-community/cassable'} />
        <Widget protocolId={'@servable-community/cassable'} />        
    </div>
        </div>
      </div>
    </div>
  </div>
}
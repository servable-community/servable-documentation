import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import LogoAnimated from '../logo/animated'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        my-6
        mb-12`}>
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
            {`Everything is a 🐻 protocol 🐻`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Servable was built from the ground up to use protocols in all ways possible. The <b>Servable app</b> itself is a protocol (app protocol). The Servable engine uses core protocols like manualable.
          </p>
          {/* <div className={``}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getstarted/overview">
              Documentation
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
}
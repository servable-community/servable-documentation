import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        pt-6`}>
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
            {`Introducing framework pollination 🐝 🍯`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Servable is not a traditional Node JS framework as it does not expose any api or route by itself, nor does it contain any server capacity. Instead it pollinates database tables (classes) with protocols (independent and agnostic feature oriented extensions) so that a traditional Node JS framework (adapted by a framework bridge) can use them.
          </p>
          <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/guides/servable/pollination">
              Learn more about pollination framework
            </Link>
          </p>
          {/* <div className={``}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/guides/gettingstarted/overview">
              Documentation
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
}
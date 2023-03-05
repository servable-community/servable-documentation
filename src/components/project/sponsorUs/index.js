import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
// import LogoAnimated from '../logo/animated'
import LogoStatic from '../logo/static'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`        
       
        `}>
    <div class={`       
        px-6
        md:px-6      
        py-4`}>
      <div class={`
          
          flex
          justify-center      
          align-middle                          
        `}>
        {/* <LogoAnimated /> */}
        <LogoStatic size={'s'} />
      </div>
      <div class={`                
          flex
          justify-center       
          pt-2
        `}>
        <div class={`
          justify-center
          text-center           
          max-w-lg                 
        `}>
          <h2 className=''>{`Sponsor us`}</h2>
          <p className={``}>
            {`A Node JS framework built on top of Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of protocols.\n Get ready to change the way you code your server!`}
          </p>
          <div className={``}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/sponsorship">
              Be a sponsor
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}
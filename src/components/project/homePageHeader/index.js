import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
// import LogoAnimated from '../logo/animated'
import LogoStatic from '../logo/static'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header>
      <div className={`
        bg-gradient-to-r         
        from-indigo-600 
        via-purple-500 
        to-pink-300 
        bg-opacity-20
        min-h-[500px]`}>
        <div class={`
        grid
        grid-cols-1
        md:grid-cols-2
        px-6
        md:px-6      
        py-4`}>
          <div class={`
          text-right  
          flex
          justify-center      
          align-middle                
          h-full
        `}>
            {/* <LogoAnimated /> */}
            <LogoStatic />
          </div>
          <div class={`                
          flex
          justify-center       
          p-8
        `}>
            <div class={`
          justify-center
          text-left
          pt-12              
        `}>
              <h1 className='text-7xl'>{siteConfig.title}</h1>
              <p className={`font-bold text-lg`}>
                {`A Node JS framework built on top of Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of protocols.\n Get ready to change the way you code your server!`}
              </p>
              <div className={``}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/getstarted/intro">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
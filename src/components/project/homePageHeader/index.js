import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className=''>
      <div class={`
        min-h-[500px]
        bg-gradient-to-r 
        from-indigo-600 
        via-purple-500 
        to-pink-500 
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
          <img src={`img/polar-bear.png`} className={`object-none`} />
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
            <h1 className='text-6xl'>{siteConfig.title}</h1>
            <p className={``}>
              {`A Node JS framework built on top of Express JS and Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of Parse Server and protocols.`}
            </p>
            <div className={``}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/getStarted/intro">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
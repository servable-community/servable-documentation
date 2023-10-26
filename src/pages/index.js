import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/project/homepageFeatures'
import HomePageHeader from '../components/project/homePageHeader'
import Sample from '../components/project/sample'
import Protocoled from '../components/project/protocoled'
import SponsorUs from '../components/project/sponsorUs'
import ExtremeRefactoring from '../components/project/extremeRefactoring'
import HomepageFeatures2 from '../components/project/homepageFeatures2'
import HomepageFeatures3 from '../components/project/homepageFeatures3'
// import HomepageFeatures4 from '../components/project/homepageFeatures4'
import EverythingIsAProtocol from '../components/project/everythingIsAProtocol'
export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Node JS framework built on top of Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of protocols.\n Get ready to change the way you code your server!">
      <HomePageHeader />
      {/* <div className='bg-slate-200 dark:bg-slate-800 h-[1px] w-full'></div> */}
      <main className='pb-16 pt-8'>
        <HomepageFeatures />
        <HomepageFeatures2 />
        <EverythingIsAProtocol />
        <HomepageFeatures3 />
        <ExtremeRefactoring />
        {/* <HomepageFeatures4 /> */}
        <Protocoled />
        <Sample />
        <SponsorUs />
      </main>
    </Layout>
  )
}

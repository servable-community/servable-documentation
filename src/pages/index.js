import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/project/homepageFeatures'
import HomePageHeader from '../components/project/homePageHeader'
import Sample from '../components/project/sample'
import Protocoled from '../components/project/protocoled'
import SponsorUs from '../components/project/sponsorUs'
export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomePageHeader />
      <main className='pb-16'>
        <Protocoled />
        <HomepageFeatures />
        <Sample />
        <SponsorUs />
      </main>
    </Layout>
  )
}

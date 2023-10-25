import React from 'react'
import styles from './styles.module.css'
import FeatureList from './featureList'
import Feature from './feature'

export default () => {
  return <section className={styles.features}>
    <div className="container">
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
}
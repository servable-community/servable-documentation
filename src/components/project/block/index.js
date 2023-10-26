import React from 'react'
import styles from './styles.module.css'
import Feature from './feature'

export default ({ featureList }) => {
  return <section className={styles.features}>
    <div className="container">
      <div className="row">
        {featureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
}
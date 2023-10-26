import React from 'react';

export default [
  {
    title: 'Automatic schema computation',
    Svg: require('@site/static/img/noun-brackets-1087150.svg').default,
    description: (
      <>
        Servable automatically merges the user defined app schema with the protocols' schema.
      </>
    ),
  },
  {
    title: 'Automatic schema migration per protocol',
    Svg: require('@site/static/img/noun-steps-5903715.svg').default,
    description: (
      <>
        Schemas are automatically migrated based on a desired version. No need for custom scripts or complex data management. Dedicated <i>up</i> and <i>down</i> allow for granular entry manipulation.
      </>
    ),
  },

  {
    title: 'Advanced schema staging for verification',
    Svg: require('@site/static/img/noun-release-5004142.svg').default,
    description: (
      <>
        Servable proposes a rolling deployment using an arbiter so that you don't mistakenly put undesired schema in production. When using this mode, both a /servable and a /servablestaging endpoints are exposed with separate databases for testing.
      </>
    ),
  },

]

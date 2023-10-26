import React from 'react';

export default [
  {
    title: 'Automatic class and protocol seed',
    Svg: require('@site/static/img/seed.svg').default,
    description: (
      <>
        Servable Automatic Seed is an easy way to seed Servable classes. It was built from the ground up to respect the protocol lifecycle and separation of concerns. Every protocol can define config entries that drive its behaviour at run time, including the app protocol.
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
    title: 'Advanced config per protocol',
    Svg: require('@site/static/img/noun-configuration-5508509.svg').default,
    description: (
      <>
        Servable config adds the ability to change the behaviour and appearance of your Servable app without  redeploying your server or requiring users to update their app.
        Every protocol can manage its own configuration.
      </>
    ),
  },
]

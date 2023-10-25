import React from 'react';

export default [
  {
    title: 'Automatic class and protocol seed',
    Svg: require('@site/static/img/seed.svg').default,
    description: (
      <>
        Servable is a Node JS framework built on top of Express JS and Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of Parse Server and protocols.
      </>
    ),
  },
  {
    title: 'Automatic schema migration per protocol',
    Svg: require('@site/static/img/noun-steps-5903715.svg').default,
    description: (
      <>
        Servable streamlines the server development by separating every "groupable" logic to be a protocol, so that it is naturally extracted from the base code and possibly migrated into its own package
      </>
    ),
  },
  {
    title: 'Advanced config per protocol',
    Svg: require('@site/static/img/noun-ant-teamwork-2773996.svg').default,
    description: (
      <>
        Extend your server by using protoocols made by the community. Add emailing, versionning, or video capacity with one simple declaration. Handle schema migrations and rollbacks automatically.
      </>
    ),
  },
]

import React from 'react';

export default [
  {
    title: 'Tailored for protocols',
    Svg: require('@site/static/img/ant.svg').default,
    description: (
      <>
        Servable is a Node JS framework built on top of Express JS and Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of Parse Server and protocols.
      </>
    ),
  },
  {
    title: 'Streamline your server development',
    Svg: require('@site/static/img/anthill2.svg').default,
    description: (
      <>
        Servable streamlines the server development by separating every "groupable" behaviour to be a protocol, so that it is naturally extracted from the base code and possibly migrated into its own package
      </>
    ),
  },
  {
    title: 'Use community protocols',
    Svg: require('@site/static/img/swarm.svg').default,
    description: (
      <>
        Extend your server by using protoocols made by the community. Add emailing, versionning, or video capacity with one simple declaration. Handle schema migrations and rollbacks automatically.
      </>
    ),
  },
]

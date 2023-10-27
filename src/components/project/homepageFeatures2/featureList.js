import React from 'react';

export default [
  {
    title: 'Built on top of Parse Server and Express JS',
    Svg: require('@site/static/img/parse-black-padded.svg').default,
    description: (
      <>
        Servable uses the open source Parse Server behind the scenes. The Servable.Object contains the same APIs as the Parse.Object. You can use everything Parse Server already offers.
      </>
    ),
  },
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
    title: 'Advanced config per protocol',
    Svg: require('@site/static/img/noun-settings-1269041.svg').default,
    description: (
      <>
        Servable config adds the ability to change the behaviour and appearance of your Servable app without  redeploying your server or requiring users to update their app.
        Every protocol can manage its own configuration.
      </>
    ),
  },
]

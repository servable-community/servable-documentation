import React from 'react';

export default [
  {
    title: 'Standardized api',
    Svg: require('@site/static/img/noun-api-6001992.svg').default,
    description: (
      <>
        Every protocol is totally independent from other protocols, yet it can call Servable's standardized api for sending emails or push notifications. A dedicated protocol can register to Servable for delivering those messages.
      </>
    ),
  },
  {
    title: 'Ready to run with docker dependencies per protocol',
    Svg: require('@site/static/img/noun-container-1800943.svg').default,
    description: (
      <>
        A dedicated system entry in every protocol allows for a custom docker-compose based infrastructure needed by the protocol. The Servable engine will automatically assign free ports and run ii.
      </>
    ),
  },
  {
    title: 'Full stack protocols with frontend extensions',
    Svg: require('@site/static/img/noun-stack-4935131.svg').default,
    description: (
      <>
        Beyond the core server component, a protocol can have an accompanying frontend library that provides UI components and logic. For example the followable protocol offers a React extension that displays a state managed <i>Follow</i> button.
      </>
    ),
  },

]

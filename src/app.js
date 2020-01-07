import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from '../universal/contextFactory'
import providerFactory from '../universal/providerFactory'

contextFactory(createClientContextFactoryParams()).then(context => {
  match(
    {routes, history: browserHistory},
    (err, redirectLocation, renderProps) => {
      if (err) console.log(err)

      const App = providerFactory(context)(Router)
      ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
    }
  )
})

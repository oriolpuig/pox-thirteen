import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from '../universal/contextFactory'
import providerFactory from '../universal/providerFactory'

import( // eslint-disable-line
  /* webpackChunkName: "AppStyles" */
  /* webpackMode: "eager" */
  './scss/index.scss'
)

contextFactory(createClientContextFactoryParams()).then(context => {
  match(
    {history: browserHistory, routes},
    (err, redirectLocation, renderProps = {}) => {
      if (err) console.log(err)

      if (redirectLocation && redirectLocation.pathname) {
        window.location = redirectLocation.pathname
        return
      }

      const App = providerFactory(context)(Router)
      ReactDOM.hydrate(
        <App {...renderProps} history={browserHistory} />,
        window.document.getElementById('app')
      )
    }
  )
})

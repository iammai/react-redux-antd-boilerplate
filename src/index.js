import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configureStore'
import App from './containers/App/App'

const target = document.querySelector('#root');

render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
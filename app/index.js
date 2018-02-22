import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from 'store/configure-store';
import Root from 'containers/root';

// required for tap events. you can remove this if you don't need tap events.
require('react-tap-event-plugin')();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('containers/root', () => {
    // the NewRoot is required for rerendering.
    const NewRoot = require('containers/root').default;
    render(NewRoot);
  });
}
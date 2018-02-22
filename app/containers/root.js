import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevTools from 'utils/dev-tools';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from 'routes';

export default class Root extends Component {
  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes}/>
          {process.env.NODE_ENV === 'development' ? <DevTools/> : ''}
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

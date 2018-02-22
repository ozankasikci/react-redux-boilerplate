import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from 'reducers';
import DevTools from 'containers/dev-tools';
import { persistState } from 'redux-devtools';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);


export default function configureStore(initialState) {
  const store = createStore(
    allReducers,
    initialState,
    enhancer
  );

  return store;
};


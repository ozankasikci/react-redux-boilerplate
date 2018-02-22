import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import currentUserReducer from 'reducers/home-reducer';


const allReducers = combineReducers({
  routing,
  currentUser: currentUserReducer,
});

export default allReducers;

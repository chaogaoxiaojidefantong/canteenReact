import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as home from './home/reducer';
import * as user from './user/reducer'
let store = createStore(
    combineReducers({...home,...user}),
    applyMiddleware(thunk)
  );
  export default store;
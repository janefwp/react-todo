import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {infoReducer} from './reducer';
import thunk from 'redux-thunk'

const middleware=[thunk]

const infoApp = combineReducers({
    infos:infoReducer
  });

const store = createStore(infoApp, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

export default store
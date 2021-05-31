import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {infoReducer} from './reducer';
import thunk from 'redux-thunk'

const middleware=[thunk]
const initialState={ };
const todoReducer = combineReducers({
    infos:infoReducer
  });

const store = createStore(todoReducer,initialState, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

export default store
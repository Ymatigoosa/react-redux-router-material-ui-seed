import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import multi from 'redux-multi'

const enhancer = applyMiddleware(thunk, multi);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

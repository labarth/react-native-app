import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './src/redux/rootReducer';

const enhancer = applyMiddleware(thunk, logger);

export const store = createStore(
  reducer,
  composeWithDevTools(enhancer),
);

window.store = store;
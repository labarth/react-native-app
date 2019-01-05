import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './xyu/redux/rootReducer';

const enhancer = applyMiddleware(thunk, logger);

export const store = createStore(
  reducer,
  composeWithDevTools(enhancer),
);
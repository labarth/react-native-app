import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './src/redux/rootReducer';

const enhancer = applyMiddleware(thunk);

export const store = createStore(
  reducer,
  composeWithDevTools(enhancer),
);
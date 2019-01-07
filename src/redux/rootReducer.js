import { combineReducers } from 'redux';
import notes from './notes/reducers';
import auth from './auth/reducers';


export default combineReducers({
  notes,
  auth,
});

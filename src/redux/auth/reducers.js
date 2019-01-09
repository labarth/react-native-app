import { handleActions } from 'redux-actions';
import { authActions, getUserActions } from './actions';
import { Record } from 'immutable';

const initialState = new Record({
  loading: true,
  userInfo: null,
  error: null,
});


const signRequest = (state) => state
.set('loading', true)
.set('userInfo', null)
.set('error', null);

const signInSuccess = (state, { payload }) => state
.set('loading', false)
.set('userInfo', payload.userInfo)
.set('error', null);

const signError = (state, { payload }) => state
.set('loading', false)
.set('userInfo', null)
.set('error', payload.error);


export default handleActions({
  [authActions.SING_REQUEST]: signRequest,
  [authActions.SING_IN_SUCCESS]: signInSuccess,
  [authActions.SING_ERROR]: signError,
  [getUserActions.GET_USER]: signRequest,
  [getUserActions.GET_USER_SUCCESS]: signInSuccess,
  [getUserActions.GET_USER_ERROR]: signError,
}, initialState());
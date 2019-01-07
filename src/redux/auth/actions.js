import { createAction } from 'redux-actions';
import { GoogleSignin } from 'react-native-google-signin';
import { NavigationActions } from 'react-navigation';
import { getCurrentUserNotes } from '../notes/actions';

export const authActions = {
  SING_REQUEST: createAction('SIGN_REQUEST'),
  SING_ERROR: createAction('SING_ERROR'),
  SING_IN_SUCCESS: createAction('SING_IN_SUCCESS'),
  SING_OUT_SUCCESS: createAction('SING_OUT_SUCCESS'),
};

export const getUserActions = {
  GET_USER: createAction('GET_USER'),
  GET_USER_SUCCESS: createAction('GET_USER_SUCCESS'),
  GET_USER_ERROR: createAction('GET_USER_ERROR'),
}

export const signInGoogle = (navigation) => async (dispatch) => {
  try {
    await dispatch(authActions.SING_REQUEST());
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    await dispatch(authActions.SING_IN_SUCCESS({ userInfo }));
    await dispatch(getCurrentUserNotes(userInfo.user))
    await navigation.dispatch(NavigationActions.navigate({ routeName: 'NotesList' }));
  } catch (error) {
    await dispatch(authActions.SING_ERROR({ error }));
  }
}

export const getCurrentUser = (navigation) => async (dispatch) => {
  try {
    await dispatch(getUserActions.GET_USER());
    const userInfo = await GoogleSignin.signInSilently();
    await dispatch(getUserActions.GET_USER_SUCCESS({ userInfo }));
    await dispatch(getCurrentUserNotes(userInfo.user));
    await navigation.dispatch(NavigationActions.navigate({ routeName: 'NotesList' }));
  } catch(error) {
    await dispatch(getUserActions.GET_USER_ERROR({ error }));
    await navigation.dispatch(NavigationActions.navigate({ routeName: 'SignIn' }));
  }
}
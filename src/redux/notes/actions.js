import { createAction } from 'redux-actions';
import { List, Map } from 'immutable';
import { ADD_NOTE, DELETE_NOTE } from '../../constants/actionTypes';
import { database } from '../../../configFirebase'

export const addNote = createAction(ADD_NOTE);

export const deleteNote = createAction(DELETE_NOTE);

export const getNotesActions = {
  GET_NOTES: createAction('GET_NOTES'),
  GET_NOTES_SUCCESS: createAction('GET_NOTES_SUCCESS'),
}


getNotes = async (user) => {
  const notesByUserRef = database.ref(`notes/${user.id}`);
  const notesSnapshot = await notesByUserRef.once('value');
  return List(Object.values(Object.entries(notesSnapshot.val()).map((item) => Map({ ...item[1], id: item[0] }))));
}

export const getCurrentUserNotes = (user) => async (dispatch) => {
  try {
    await dispatch(getNotesActions.GET_NOTES());
    const notes = await getNotes(user);
    await dispatch(getNotesActions.GET_NOTES_SUCCESS({ notes }))
  } catch(error) {

  }
}

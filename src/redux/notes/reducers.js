import { v4 } from 'uuid';
import { List, Record } from 'immutable';
import { handleActions } from 'redux-actions';
import { addNote, deleteNote, getNotesActions } from './actions';

const initialState = Record({
  loading: true,
  list: List(),
});

const addNodeReducer = (state, { payload }) => state.push(payload.note);

const deleteNoteReducer = (state, { payload }) => state.filter((note) => note.get('id') !== payload.id);

const getNotes = (state) => state.set({ loading: true, list: List() });

const getNotesSuccess = (state, { payload }) => {
  return state
  .set('loading', false)
  .set('list', payload.notes)
}


export default handleActions({
  [addNote]: addNodeReducer,
  [deleteNote]: deleteNoteReducer,
  [getNotesActions.GET_NOTES]: getNotes,
  [getNotesActions.GET_NOTES_SUCCESS]: getNotesSuccess,
}, initialState());
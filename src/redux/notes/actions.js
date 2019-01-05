import { createAction } from 'redux-actions';
import { ADD_NOTE, DELETE_NOTE } from 'contstants/actionTypes';

export const actions = {
  addNote: createAction(ADD_NOTE),
  deleteNote: createAction(DELETE_NOTE),
};

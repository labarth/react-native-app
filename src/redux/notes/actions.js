import { createAction } from 'redux-actions';
import { ADD_NOTE, DELETE_NOTE } from '../../constants/actionTypes';

export const addNote = createAction(ADD_NOTE);
export const deleteNote = createAction(DELETE_NOTE);

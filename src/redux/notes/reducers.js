import { v4 } from 'uuid';
import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addNote, deleteNote } from './actions';

const initialState = List([
  Map({
    id: v4(),
    category: 'Здоровье',
    description: 'таблетки',
    currency: 'BYN',
    isInc: false,
    date: new Date(),
    amount: 2.59,
  }),
  Map({
    id: v4(),
    category: 'Авто',
    description: 'бензин',
    currency: 'BYN',
    isInc: false,
    date: new Date(),
    amount: 60,
  }),
  Map({
    id: v4(),
    category: 'Зарплата',
    description: 'зарплата зарплата зарплата зарплата зарплата зарплата',
    currency: 'BYN',
    isInc: true,
    date: new Date(),
    amount: 3500,
  }),
])

const addNodeReducer = (state, { payload }) => state.push(payload.note);

const deleteNoteReducer = (state, { payload }) => state.filter((note) => note.get('id') !== payload.id);


export default handleActions({
  [addNote]: addNodeReducer,
  [deleteNote]: deleteNoteReducer,
}, initialState);
import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { actions } from './actions';

const initialState = List([
  Map({
    category: 'Здоровье',
    description: 'стоп диар',
    currency: 'BYN',
    isInc: false,
    date: new Date().toLocaleDateString(),
    amount: 2.46,
  }),
  Map({
    category: 'Авто',
    description: 'бензин',
    currency: 'BYN',
    isInc: false,
    date: new Date().toLocaleDateString(),
    amount: 60,
  }),
  Map({
    category: 'Зарплата',
    description: 'зарплата',
    currency: 'BYN',
    isInc: false,
    date: new Date().toLocaleDateString(),
    amount: 3500,
  }),
])

const addNode = (state, { payload }) => state.push(payload.note);

const deleteNote = (state, { payload }) => state.filter((note) => note.get('id') !== payload.id);


export default handleActions({
  [actions.addNote]: addNode,
  [actions.deleteNote]: deleteNote,
}, initialState);
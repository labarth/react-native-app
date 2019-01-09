import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NotesListComponent } from './NotesListComponent';
import { deleteNote } from '../../redux/notes/actions';


const mapStateToProps = (state) => ({
  notes: state.notes,
  userId: state.auth.userInfo.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
})

export const NotesList = connect(mapStateToProps, mapDispatchToProps)(NotesListComponent);

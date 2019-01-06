import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddNoteComponent } from './AddNoteComponent';
import { addNote } from '../../redux/notes/actions';

const mapDispatchToProps = (dispatch) => ({
  addNote: (data) => dispatch(addNote(data)),
})

export const AddNote = connect(null, mapDispatchToProps)(AddNoteComponent);
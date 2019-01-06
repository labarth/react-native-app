import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NotesList } from './containers/NotesList/NotesList';
import { AddNote } from './containers/AddNote/AddNote';

const AppNavigator = createStackNavigator({
  NotesList: { screen: NotesList },
  AddNote: { screen: AddNote },
},{
  defaultNavigationOptions: {
    header: null,
  }
}, {
  initialRouteName: 'NotesList',
});

export default createAppContainer(AppNavigator);
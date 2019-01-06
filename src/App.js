import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NotesList } from './containers/NotesList/NotesList';
import { AddNote } from './containers/AddNote/AddNote';
import { SignIn } from './containers/SignIn/SignIn';

const AppNavigator = createStackNavigator({
  NotesList: { screen: NotesList },
  AddNote: { screen: AddNote },
  SignIn: { screen: SignIn },
},{
  defaultNavigationOptions: {
    header: null,
  }
}, {
  initialRouteName: 'SignIn',
});

export default createAppContainer(AppNavigator);
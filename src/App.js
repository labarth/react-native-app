import React  from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NotesList } from './containers/NotesList/NotesList';
import { AddNote } from './containers/AddNote/AddNote';
import { SignIn } from './containers/SignIn/SignIn';

const AppNavigator = createStackNavigator({
  SignIn: { screen: SignIn },
  NotesList: { screen: NotesList },
  AddNote: { screen: AddNote },
}, {
  initialRouteName: 'SignIn',
  defaultNavigationOptions: {
    header: null,
  }
});

export default createAppContainer(AppNavigator);
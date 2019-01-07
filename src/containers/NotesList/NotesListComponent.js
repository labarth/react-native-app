import React, { PureComponent } from 'react';
import { List, Map } from 'immutable';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, Text } from 'react-native';
import { NotesListItem } from './NotesListItem';
import { StyledIconAdd } from './Styled/Styled';
import { database } from '../../../configFirebase';
import { GoogleSignin } from 'react-native-google-signin'


class NotesListComponent extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  handlePress = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'AddNote' }));
  }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'SignIn' }));
    } catch (error) {
      console.error(error);
    }
  };

  componentWillMount() {
    database.ref('users/001').set({
      name: 'Alexander Matiugin',
      age: 25,
    })
  }

  render() {
    const { notes, deleteNote } = this.props;
    console.log(notes.get(0).get('id'));

    return (
      <View style={{ flex: 1, backgroundColor: '#e0f3fd', paddingTop: 10, paddingBottom: 10, }}>
        <ScrollView>
          {notes.map((item) => (
            <NotesListItem item={item} key={item.get('id')} deleteNote={deleteNote} />
          ))}
        </ScrollView>
        <StyledIconAdd
          name="plus"
          size={30}
          color="#fff"
          onPress={this.handlePress}
        />
        <Text onPress={this.signOut}>log out</Text>
      </View>
    );
  }
}



export { NotesListComponent };

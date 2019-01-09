import React, { PureComponent } from 'react';
import { List, Map } from 'immutable';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { NotesListItem } from './NotesListItem';
import { StyledIconAdd } from './Styled/Styled';
import { database } from '../../../configFirebase';
import { GoogleSignin } from 'react-native-google-signin';


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

  renderlist = () => {
    const { notes: { list }, deleteNote } = this.props;

    return (
      list.size ? (
        list.map((item) => (
          <NotesListItem item={item} key={item.get('id')} deleteNote={deleteNote} userId={this.props.userId} />
        ))
      ) : (
        <Text>Empty List</Text>
      )
    );
  }

  render() {
    const { notes: { loading } } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: '#e0f3fd', paddingTop: 10, paddingBottom: 10, }}>
        <ScrollView>
          {loading ? <ActivityIndicator size="large" color="#0000ff" /> : this.renderlist()}
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

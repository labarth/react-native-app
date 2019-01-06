import React, { PureComponent } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View } from 'react-native';
import { NotesListItem } from './NotesListItem';
import { StyledIconAdd } from './Styled/Styled';
import firebase from 'firebase';
import { database } from '../../../configFirebase';

class NotesListComponent extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  handlePress = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'AddNote' }));
  }

  render() {
    const { notes, deleteNote } = this.props;

    console.log(database, 'firebase');

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
      </View>
    );
  }
}



export { NotesListComponent };

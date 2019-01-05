import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NotesList } from './containers/Notes/NotesList';

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <NotesList />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
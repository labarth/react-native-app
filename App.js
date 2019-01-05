/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    const { test, notes } = this.props;

    console.log(notes);

    return (
      <View style={styles.container}>
        привет
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  test: state.test,
  notes: state.notes,
});

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

{/*{test.map((item) => (<Text key={item}>{item}</Text>))}*/}
{/*{notes.map((item) => (<Text key={item}>{item.get('amount')}</Text>))}*/}
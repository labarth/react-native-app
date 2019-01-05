import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

class NotesListComponent extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { notes } = this.props;

    return (
      notes.map((item) => (
        <View key={item.get('id')} style={[styles.item, item.get('isInc') && styles.isInc]}>
          <Text style={styles.text}>{item.get('amount')}</Text>
          <Text>{item.get('currency')}</Text>
          <Text>{item.get('description')}</Text>
          <Text>{item.get('category')}</Text>
          <Text>{new Date(item.get('date')).toLocaleDateString()}</Text>
          <Text>{item.get('isInc') ? 'true' : 'false'}</Text>
        </View>
      ))
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    color: 'red',
    marginBottom: 10,
    position: 'relative',
  },
  text: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Verdana',
  },
  isInc: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 3,
    height: '100%',
    backgroundColor: 'green',
  }
});

export { NotesListComponent };

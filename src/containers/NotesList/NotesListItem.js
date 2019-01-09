import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { StyledIconTrash } from './Styled/Styled';
import { database } from '../../../configFirebase';

class NotesListItem extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  handleDeleteNote = () => {
    this.props.deleteNote({id: this.props.item.get('id') });
    const deleteNoteByUserRef = database.ref(`notes/${this.props.userId}/${this.props.item.get('id')}`);
    deleteNoteByUserRef.remove();
  }

  render() {
    const { item } = this.props;
    const isInc = item.get('isInc');

    return (
      <View style={[styles.item, !isInc && styles.reverse]}>
        <View style={[styles.indicator, isInc && styles.indicatorGreen]} />
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>{new Date(item.get('date')).toLocaleDateString()}</Text>
            <View style={{...styles.row, marginBottom: 6, justifyContent: 'flex-end' }}>
              <Text style={{...styles.textBig, marginRight: 6 }}>{!item.get('isInc') && '-'}{item.get('amount')}</Text>
              <Text style={styles.textBig}>{item.get('currency')}</Text>
            </View>
          </View>
          <Text style={styles.text}>{item.get('description')}</Text>
          <StyledIconTrash name="trash" size={25} color="red" onPress={this.handleDeleteNote} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginRight: 50,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  indicator: {
    width: 5,
    backgroundColor: '#d0011b',
  },
  indicatorGreen: {
    backgroundColor: '#7ed321',
  },
  content: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    color: '#000',
  },
  textBig: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { NotesListItem };

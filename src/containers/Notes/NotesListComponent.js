import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  nn: state.notes
})

@connect(mapStateToProps)
class NotesListComponent extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { notes } = this.props;

    console.log(this.props.nn, 'zalupaika');

    return (
      notes.map((item) => (
        <View key={item.get('id')}>
          <Text>{item.get('amount')}</Text>
          <Text>{item.get('currency')}</Text>
          <Text>{item.get('description')}</Text>
          <Text>{item.get('category')}</Text>
          <Text>{item.get('date')}</Text>
          <Text>{item.get('isInc') ? 'true' : 'false'}</Text>
        </View>
      ))
    );
  }
}

export { NotesListComponent };

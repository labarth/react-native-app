import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Row } from '../../components/Row/Row';
import { CustomText } from '../../components/CustomText/CustomText';
import { StyledContent, StyledItem, StyledAmountText, StyledData } from './Styled/Styled';

class NotesListItem extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { item } = this.props;

    return (
      <StyledItem key={item.get('id')} isInc={item.get('isInc')}>
        <StyledContent>
          <Row indent={5} align="center">
            <CustomText>{new Date(item.get('date')).toLocaleDateString()}</CustomText>
            <Row direction="flex-end">
              <StyledAmountText indent>{!item.get('isInc') && '-'}{item.get('amount')}</StyledAmountText>
              <StyledAmountText>{item.get('currency')}</StyledAmountText>
            </Row>
          </Row>
          <CustomText>{item.get('description')}</CustomText>
        </StyledContent>
        <View style={[item.get('isInc') ? styles.isInc : styles.isDec]} />
      </StyledItem>
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
    flex: 1,
    maxWidth: 5,
    backgroundColor: 'green',
  },
  isDec: {
    flex: 1,
    maxWidth: 5,
    backgroundColor: 'red',
  }
});

export { NotesListItem };

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledText = styled.Text`
  font-size: 15;
  color: #000;
  line-height: 20;
`;

class CustomText extends PureComponent {
  render() {
    return (
      <StyledText>{this.props.children}</StyledText>
    );
  }
}

export { CustomText };

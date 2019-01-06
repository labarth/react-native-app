import React, { PureComponent } from 'react';
import styled from 'styled-components';


const StyledRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: ${(props) => props.direction ? props.direction : 'flex-start'};
  align-items: ${(props) => props.align ? props.align : 'flex-start'};
  margin-bottom: ${(props) => props.indent ? props.indent : 0};
`;



class Row extends PureComponent {
  render() {
    const { children, direction, align, indent } = this.props;

    return (
      <StyledRow
        direction={direction}
        align={align}
        indent={indent}
      >
        {children}
      </StyledRow>
    );
  }
}

export { Row };

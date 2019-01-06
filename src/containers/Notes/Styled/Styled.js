import styled from 'styled-components'

export const StyledItem = styled.View`
  background-color: #fff;
  margin: 0px 0 20px 50px;
  border-radius: 4;
  position: relative;
  flex-direction: ${(props) => props.isInc ? `row-reverse` : 'row'};
`;

export const StyledContent = styled.View`
  padding: 5px 10px;
  flex: 1;
`;

export const StyledAmountText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-right: ${(props) => props.indent ? '6px' : '0'};
`;

export const StyledData = styled.Text`
  font-size: 15;
  color: #000;
`;
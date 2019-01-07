import styled from 'styled-components'
import Icon from 'react-native-vector-icons/AntDesign';
import IconTrash from 'react-native-vector-icons/EvilIcons';

export const StyledIconAdd = styled(Icon)`
  width: 50px;
  height: 50px;
  flex: 1;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: green;
  line-height: 50px;
  border-radius: 50px;
  z-index: 100;
`;

export const StyledIconTrash = styled(IconTrash)`
  position: absolute;
  right: 5;
  bottom: 5;
  z-index: 1;
`
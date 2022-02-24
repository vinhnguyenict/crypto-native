import styled from 'styled-components/native';
import {View} from 'react-native';

const Card = styled(View)`
  position: relative;
  background: ${props => props.theme.colors.highlight};
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default Card;

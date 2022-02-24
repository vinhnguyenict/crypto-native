import styled from 'styled-components/native';
import {Text} from 'react-native';

type PropsType = {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'white';
  bold?: boolean;
  size?: 'small' | 'medium' | 'large' | 'x-large';
  fontWeight?: number;
};
const SText = styled(Text)<PropsType>`
  font-family: ${props =>
    props.bold ? 'Montserrat-Bold' : 'Montserrat-Regular'};
  font-weight: ${props =>
    props.fontWeight
      ? props.theme.fontWeights[props.fontWeight]
      : props.bold
      ? props.theme.fontWeights[2]
      : props.theme.fontWeights[0]};
  color: ${props => props.theme.colors[props.type || 'text']};
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return `${props.theme.fontSizes[0]}px`;
      case 'large':
        return `${props.theme.fontSizes[2]}px`;
      case 'x-large':
        return `${props.theme.fontSizes[3]}px`;
      default:
        return `${props.theme.fontSizes[1]}px`;
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case 'small':
        return `${props.theme.fontSizes[0] + 5}px`;
      case 'large':
        return `${props.theme.fontSizes[2] + 5}px`;
      case 'x-large':
        return `${props.theme.fontSizes[3] + 5}px`;
      default:
        return `${props.theme.fontSizes[1] + 5}px`;
    }
  }};
`;

export default SText;

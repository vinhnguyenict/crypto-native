import styled from 'styled-components/native';
import {Text} from 'react-native';

type PropsType = {
  level?: number;
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
};
const Title = styled(Text)<PropsType>`
  font-family: 'Montserrat-Regular';
  font-weight: 600;
  color: ${props => props.theme.colors[props.type || 'text']};
  font-size: ${props => `${props.theme.fontSizes[props.level || 3]}px`};
  line-height: ${props => `${props.theme.fontSizes[props.level || 3] + 1.5}px`};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default Title;

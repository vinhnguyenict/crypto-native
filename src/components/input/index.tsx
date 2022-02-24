import styled from 'styled-components/native';
import {TextInput} from 'react-native';

type PropsType = {
  bordered?: boolean;
  inValid?: boolean;
};

const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: props.theme.colors.text,
  fontFamily: props.value ? 'Montserrat-Regular' : 'Montserrat-Thin',
  fontSize: 12,
}))<PropsType>`
  color: ${props => props.theme.colors.input};
  padding-left: ${props =>
    props.hasOwnProperty('bordered') && props.bordered
      ? `${props.theme.styles.input.padding}px`
      : 0};
  padding-right: ${props =>
    props.hasOwnProperty('bordered') && props.bordered
      ? `${props.theme.styles.input.padding}px`
      : 0};
  min-height: ${props => props.theme.styles.input.height}px;
  border-color: ${props =>
    props.inValid ? props.theme.colors.danger : props.theme.colors.muted};
  border-radius: ${props =>
    props.hasOwnProperty('bordered') && props.bordered
      ? `${props.theme.styles.input.borderRadius}px`
      : 0};

  border-top-width: ${props =>
    props.hasOwnProperty('bordered') && props.bordered
      ? `${props.theme.styles.input.borderWidth}px`
      : 0};
  border-bottom-width: ${props =>
    props.hasOwnProperty('bordered') && !props.bordered
      ? 0
      : `${props.theme.styles.input.borderWidth}px`};
  border-left-width: ${props =>
    props.hasOwnProperty('bordered') && props.bordered
      ? `${props.theme.styles.input.borderWidth}px`
      : 0};
  border-right-width: ${props =>
    props.hasOwnProperty('bordered') && props.bordered
      ? `${props.theme.styles.input.borderWidth}px`
      : 0};
`;

export default Input;

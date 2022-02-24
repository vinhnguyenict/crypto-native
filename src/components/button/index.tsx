import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

type PropsType = {
  type?: 'primary' | 'link' | 'text' | 'default';
  size?: 'large' | 'middle' | 'small';
  shape?: 'default' | 'circle' | 'round';
};
const Button = styled(TouchableOpacity).attrs(() => ({
  elevation: 8,
  paddingVertical: 10,
  paddingHorizontal: 12,
  activeOpacity: 0,
}))<PropsType>`
  font-family: 'Montserrat-SemiBold';
  font-weight: 600;
  padding: ${props => {
    if (props?.size === 'small') {
      return '4px 12px';
    }

    if (props?.size === 'large') {
      return '14px 20px';
    }

    return '8px 12px';
  }};
  border: ${props => {
    if (props?.type === 'link' || props?.type === 'text') {
      return 0;
    }

    if (props?.type === 'primary') {
      return `${props.theme.styles.button.borderWidth}px solid ${props.theme.colors.highlight}`;
    }
    return `${props.theme.styles.button.borderWidth}px solid ${props.theme.colors.muted}`;
  }};

  border-radius: ${props => {
    if (props?.type === 'link' || props?.type === 'text') {
      return 0;
    }
    return `${props.theme.styles.button.borderRadius}px`;
  }};
  background-color: ${props => {
    if (props?.type === 'link' || props?.type === 'text') {
      return 'transparent';
    }

    if (props?.type === 'primary') {
      return `${props.theme.colors.primary}`;
    }

    return `${props.theme.colors.highlight}`;
  }};
  flex-direction: row;
  justify-content: center;
`;

export default Button;

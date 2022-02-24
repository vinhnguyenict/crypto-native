import styled from 'styled-components/native';
import {View} from 'react-native';

const CardHeader = styled(View).attrs(props => ({
  borderBottomColor: props.theme.colors.muted,
  borderBottomWidth: 1,
}))`
  position: relative;
  padding: 10px 10px;
`;

export default CardHeader;

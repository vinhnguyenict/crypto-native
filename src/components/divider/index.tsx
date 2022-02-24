import styled from 'styled-components/native';
import {View} from 'react-native';

const Divider = styled(View)`
  margin-top: 5px;
  margin-bottom: 5px;
  border: 0.5px solid ${props => props.theme.colors.muted};
`;

export default Divider;

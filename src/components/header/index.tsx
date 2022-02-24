import styled from 'styled-components/native';
import {View} from 'react-native';

type TypeProps = {
  border?: number;
};
const Header = styled(View)<TypeProps>`
  flex-direction: row;
`;

export default Header;

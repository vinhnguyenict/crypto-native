import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

const Layout = styled(SafeAreaView)`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export default Layout;

import React from 'react';
import {Layout, Container, Divider} from '../../components';
import {Header, Accounts, Settings} from './components';

const ProfileScreen = () => {
  return (
    <Layout>
      <Header />

      <Container>
        <Accounts />
        <Divider />
        <Settings />
        <Divider />
      </Container>
    </Layout>
  );
};

export default ProfileScreen;

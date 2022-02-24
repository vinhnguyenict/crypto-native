import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {useTheme} from 'styled-components';
import {Layout, Typography, Container, Divider, Button} from '../../components';

import {ChevronRightIcon, ChevronLeftIcon} from '../../styles/icons';

const {Text, Title} = Typography;

const SettingScreen = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Layout>
      <Container>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <View>
              <Image
                source={ChevronLeftIcon}
                style={{tintColor: colors.text}}
              />
            </View>
          </TouchableOpacity>

          <View>
            <Title level={2}>Scan</Title>
          </View>
        </View>
      </Container>
      <Divider />
      <Container />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    left: 0,
  },
});

export default SettingScreen;

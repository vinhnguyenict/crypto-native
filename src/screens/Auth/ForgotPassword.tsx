import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {useForm, Controller} from 'react-hook-form';
import {
  Layout,
  Modal,
  Typography,
  Container,
  Input,
  Button,
} from '../../components';

import {NAVIGATES} from '../../config';
import {CloseIcon} from '../../styles/icons';

const {Text, Title} = Typography;

const Login = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Layout>
      <Modal visible={true} transparent={true}>
        <Container>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate(NAVIGATES.PROFILE)}
            >
              <Image
                source={CloseIcon}
                style={{tintColor: colors.text, height: 18, width: 18}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.title}>
            <Title level={4}>Forgot password</Title>
          </View>
          <View style={styles.form}>
            <View style={styles.control}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Please enter your email address/mobile number"
                  />
                )}
                name="firstName"
              />
              {errors.firstName && <Text>This is required.</Text>}
            </View>

            <View style={[styles.control, styles.flex]}>
              <Text style={{marginRight: 5}}>verification mode</Text>
              <Text>NETEASE YIDUN</Text>
            </View>
            <View style={[styles.control]}>
              <Button
                disabled={true}
                type="primary"
                onPress={handleSubmit(onSubmit)}
              >
                <Title
                  level={1}
                  style={{
                    color: colors.while,
                  }}
                >
                  Next
                </Title>
              </Button>
            </View>
          </View>

          <View
            style={[
              styles.control,
              styles.flex,
              {justifyContent: 'space-between'},
            ]}
          >
            <Button
              type="link"
              onPress={() => {
                navigation.navigate(NAVIGATES.REGISTER);
              }}
            >
              <Text style={{textAlignVertical: 'center'}}>Register now</Text>
            </Button>
            <Button
              type="link"
              onPress={() => {
                navigation.navigate(NAVIGATES.LOGIN);
              }}
            >
              <Text type="primary" style={{textAlignVertical: 'center'}}>
                Login
              </Text>
            </Button>
          </View>
        </Container>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
  },
  form: {},
  control: {
    marginBottom: 15,
  },
  input: {},
  flex: {
    flexDirection: 'row',
  },
});

export default Login;

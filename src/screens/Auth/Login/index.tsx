import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Layout,
  // Modal,
  Typography,
  Container,
  Input,
  Button,
} from '../../../components';
import {NAVIGATES} from '../../../config';

import {CloseIcon} from '../../../styles/icons';
import {ILogo} from '../../../styles/images';

import Recaptcha from '../../../components/recaptcha';
import {useLogin} from '../hooks';
import {getPhrasePassword, validateEmail} from '../constants';

const {Text, Title} = Typography;

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const mutate = useLogin({
    onSuccess: (data: any) => {
      console.log('🚀 ~ file: index.tsx ~ line 38 ~ Login ~ data', data);
    },
  });
  const navigation = useNavigation();
  const {colors} = useTheme();
  const recaptChaRef = useRef<any>(null);

  const {
    control,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onMessageRecaptcha = (event: any) => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        recaptChaRef.current.hide();
      } else {
        recaptChaRef.current.hide();
        const token = event.nativeEvent.data;
        const {password, username} = getValues();
        const payload: any = {
          token,
          password: getPhrasePassword(password),
        };

        if (validateEmail(username)) {
          payload.email = username;
        } else {
          payload.phoneNumber = username;
        }
        mutate.mutate(payload);
      }
    }
  };

  const onSubmit = () => {
    if (recaptChaRef?.current) {
      recaptChaRef.current.open();
    }
  };

  return (
    <Layout>
      {/* <Modal visible={true} transparent={true}> */}
      <Container>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={CloseIcon}
              style={{tintColor: colors.text, height: 18, width: 18}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Image source={ILogo} />
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
                  inValid={!!errors.username}
                />
              )}
              name="username"
            />
            {errors.username && <Text type="danger">This is required.</Text>}
          </View>
          <View style={styles.control}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input}
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Please enter password"
                  inValid={!!errors.password}
                />
              )}
              name="password"
            />
            {errors.password && <Text type="danger">This is required.</Text>}
          </View>
          <View style={[styles.control, styles.flex]}>
            <Text style={{marginRight: 5}}>verification mode</Text>
            <Text>reCAPTCHA</Text>
          </View>
          <View style={[styles.control]}>
            <Button
              disabled={false}
              type="primary"
              onPress={handleSubmit(onSubmit)}
            >
              <Title
                level={1}
                style={{
                  color: colors.white,
                }}
              >
                Log in
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
          <Button type="link">
            <Text
              style={{textAlignVertical: 'center'}}
              onPress={() => {
                navigation.navigate(NAVIGATES.REGISTER);
              }}
            >
              Register now
            </Text>
          </Button>
          <Button
            type="link"
            onPress={() => {
              navigation.navigate(NAVIGATES.FORGOT_PASSWORD);
            }}
          >
            <Text type="primary" style={{textAlignVertical: 'center'}}>
              Forgot password
            </Text>
          </Button>
        </View>

        <Recaptcha
          ref={recaptChaRef}
          languageCode="en"
          onMessage={onMessageRecaptcha}
        />
      </Container>
      {/* </Modal> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
  },
  logo: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
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

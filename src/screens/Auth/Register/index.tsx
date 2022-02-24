import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import * as CryptoJS from 'crypto-js';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Recaptcha from '../../../components/recaptcha';
import {AUTH_PHRASE_PASS} from '../../../config';

import {
  Layout,
  Typography,
  Container,
  Input,
  Button,
} from '../../../components';

import {NAVIGATES} from '../../../config';
import {useRegister} from '../hooks';

import {CloseIcon} from '../../../styles/icons';

const {Text, Title} = Typography;

const schemaEmail = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();

const schemaPhone = yup
  .object({
    phoneNumber: yup.number().positive().integer().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();

const Register = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const recaptChaRef = useRef<any>(null);

  const [mode, setMode] = useState<'email' | 'phone'>('email');
  const [payload, setPayload] = useState<any>();
  const mutate = useRegister({
    onError: (error: Error) => {
      console.log('Error: ', error);
    },
    onSuccess: () => {
      console.log('Success!');
    },
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(mode === 'email' ? schemaEmail : schemaPhone),
    defaultValues: {
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (mutate.isSuccess) {
      navigation.navigate(NAVIGATES.CONFIRM_CODE as never, payload as never);
    }
  }, [mutate.isSuccess, navigation, payload]);

  const changeMode = () => {
    setMode(mode === 'email' ? 'phone' : 'email');
  };

  const onMessageRecaptcha = (event: any) => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        recaptChaRef.current.hide();
      } else {
        recaptChaRef.current.hide();
        const values = getValues();
        const _payload = Object.assign(
          {
            token: event.nativeEvent.data,
            password: CryptoJS.AES.encrypt(
              values.password,
              AUTH_PHRASE_PASS
            ).toString(),
          },
          mode === 'email'
            ? {
                email: values.email,
              }
            : {phoneNumber: values.phoneNumber}
        );
        setPayload({..._payload, mode});
        mutate.mutate(_payload);
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
          <Title level={4}>
            {mode === 'email' ? 'Register by email' : 'Register by phone'}
          </Title>
        </View>
        <View style={styles.form}>
          {mode === 'email' && (
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
                    placeholder="Please enter email address"
                    inValid={!!errors.email}
                    textContentType="emailAddress"
                  />
                )}
                name="email"
              />
              {errors.email && <Text type="danger">This is required.</Text>}
            </View>
          )}

          {mode === 'phone' && (
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
                    placeholder="Please enter phone number"
                    textContentType="telephoneNumber"
                  />
                )}
                name="phoneNumber"
              />
              {errors.phoneNumber?.message && (
                <Text>{errors.phoneNumber?.message}</Text>
              )}
            </View>
          )}

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
                  secureTextEntry={true}
                  onChangeText={onChange}
                  value={value}
                  placeholder="8-32 characters. more than two combinations of letters/numbers/symbols"
                />
              )}
              name="password"
            />
            {errors.password?.message && (
              <Text>{errors.password?.message}</Text>
            )}
          </View>

          <View style={styles.control}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input}
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Confirm password"
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword?.message && (
              <Text>{errors.confirmPassword?.message}</Text>
            )}
          </View>

          <View style={[styles.control, styles.flex]}>
            <Text style={{marginRight: 5}}>verification mode</Text>
            <Text>reCAPTCHA</Text>
          </View>
          <Recaptcha
            ref={recaptChaRef}
            languageCode="en"
            onMessage={onMessageRecaptcha}
          />
          <View style={[styles.control]}>
            <Button type="primary" onPress={handleSubmit(onSubmit)}>
              <Title
                level={1}
                style={{
                  color: colors.white,
                }}
              >
                Register now
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
          <Button type="link" onPress={changeMode}>
            <Text style={{textAlignVertical: 'center'}}>
              {mode === 'email' ? 'Register by phone' : 'Register by email'}
            </Text>
          </Button>
          <Button
            type="link"
            onPress={() => {
              navigation.navigate(NAVIGATES.FORGOT_PASSWORD);
            }}
          >
            <Text style={{textAlignVertical: 'center'}}>Login</Text>
          </Button>
        </View>
      </Container>
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

export default Register;

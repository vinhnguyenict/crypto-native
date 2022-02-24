import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Layout,
  Typography,
  Container,
  Input,
  Button,
} from '../../../components';

import {NAVIGATES} from '../../../config';
import {useConfirmCodeRegister, useResendCodeRegister} from '../hooks';

import {CloseIcon} from '../../../styles/icons';

const {Text, Title} = Typography;

const schema = yup
  .object({
    code: yup.string().required(),
  })
  .required();

const VerifyCode = ({route}: any) => {
  const confirmMutate = useConfirmCodeRegister();
  const resendMutate = useResendCodeRegister();

  const {mode, email, phoneNumber} = route.params;
  const navigation = useNavigation();

  const {colors} = useTheme();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      code: '',
    },
  });

  useEffect(() => {
    if (confirmMutate.isSuccess) {
      navigation.navigate(NAVIGATES.PROFILE);
    }
  }, [confirmMutate.isSuccess, navigation]);

  const onSubmit = (values: any) => {
    const {code} = values;
    confirmMutate.mutate({
      email,
      phoneNumber,
      code: Number(code),
    });
  };

  const handleResend = () => {
    resendMutate.mutate({
      type: mode === 'email' ? 'register-email' : 'register-phone',
      email,
      phoneNumber,
    });
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
            {mode === 'email' ? 'Sign up with email' : 'Sign up with phone'}
          </Title>
          <Text>Verification code sent to {email || phoneNumber}</Text>
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
                  placeholder={`${
                    mode === 'email' ? 'Email' : 'SMS'
                  } verification code`}
                  inValid={!!errors.code}
                />
              )}
              name="code"
            />
            {errors.code && <Text type="danger">This is required.</Text>}
            <Button style={styles.resend} type="text" onPress={handleResend}>
              <Text style={{color: colors.primary}} bold={true}>
                Resend
              </Text>
            </Button>
          </View>

          <View style={[styles.control]}>
            <Button type="primary" onPress={handleSubmit(onSubmit)}>
              <Title
                level={1}
                style={{
                  color: colors.white,
                }}
              >
                Sign up
              </Title>
            </Button>
          </View>
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
    position: 'relative',
    marginBottom: 15,
  },
  input: {},
  flex: {
    flexDirection: 'row',
  },
  resend: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default VerifyCode;

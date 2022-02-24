import {useMutation} from 'react-query';
import * as AuthService from '../../core/services/auth';

export const useRegister = (options?: any) => {
  const mutationFn = async (payload: any): Promise<any> => {
    try {
      return await AuthService.register(payload);
    } catch (error: any) {
      console.log('Error: ', error?.message || error);
      throw new Error(error);
    }
  };

  return useMutation((payload: any) => mutationFn(payload), options || {});
};

export const useResendCodeRegister = (options?: any) => {
  const mutationFn = async (payload: any): Promise<any> => {
    try {
      return await AuthService.sendVerifyCodeUnAuthorize(payload);
    } catch (error: any) {
      console.log('Error: ', error?.message || error);
      throw new Error(error);
    }
  };

  return useMutation((payload: any) => mutationFn(payload), options || {});
};

export const useConfirmCodeRegister = (options?: any) => {
  const mutationFn = async (payload: any): Promise<any> => {
    try {
      return await AuthService.registerConfirm(payload);
    } catch (error: any) {
      console.log('Error: ', error?.message || error);
      throw new Error(error);
    }
  };

  return useMutation((payload: any) => mutationFn(payload), options || {});
};

export const useLogin = (options?: any) => {
  const mutationFn = async (payload: any): Promise<any> => {
    try {
      return await AuthService.login(payload);
    } catch (error: any) {
      console.log('Error: ', error?.message || error);
      throw new Error(error);
    }
  };

  return useMutation((payload: any) => mutationFn(payload), options || {});
};

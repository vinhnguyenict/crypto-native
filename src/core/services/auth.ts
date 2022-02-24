/**
 * Auth services
 */

import HttpClient from '../../utils/Http';
import {API_URL} from '../../config';

const API = new HttpClient(API_URL);

/**
 * Auth
 */
export const register = async (payload: any): Promise<any> => {
  return await API.post('/register', payload);
};

export const registerConfirm = async (payload: any): Promise<any> => {
  return await API.post('/register/confirm-code', payload);
};

export const sendVerifyCode = async (payload: any): Promise<any> => {
  return await API.post('/send-verify-code', payload);
};

/**
 * Resend verify code when time expired register
 */
export const sendVerifyCodeUnAuthorize = async (payload: any): Promise<any> => {
  return await API.post('/send-verify-code-unauthorize', payload);
};

export const login = async (payload: any): Promise<any> => {
  return await API.post('/token', payload);
};

export const me = async (params: any): Promise<any> => {
  return await API.get('/me', params);
};

export const logout = async (payload: any): Promise<any> => {
  return await API.post('/logout', payload);
};

export const refreshToken = async (payload: any): Promise<any> => {
  return await API.post('/refreshtoken', payload);
};

/**
 * Account setting
 */

export const changePassword = async (payload: any): Promise<any> => {
  return await API.post('/change-password', payload);
};

export const confirmChangePassword = async (payload: any): Promise<any> => {
  return await API.post('/confirm-change-password', payload);
};

export const resetPassword = async (payload: any): Promise<any> => {
  return await API.post('/reset-password', payload);
};

export const confirmForgotPassword = async (payload: any): Promise<any> => {
  return await API.post('/confirm-forget-password', payload);
};

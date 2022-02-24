/**
 * Security service
 */
/**
 * Auth services
 */

import HttpClient from '../../utils/Http';
import {API_URL} from '../../config';

const API = new HttpClient(`${API_URL}/security`);

export const loginHistory = async (payload: any): Promise<any> => {
  return await API.get('/login-history', payload);
};

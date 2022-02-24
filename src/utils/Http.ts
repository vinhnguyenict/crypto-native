import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import qs from 'qs';

const responseBody = (response: AxiosResponse) => response.data;

export default class ApiService {
  axios: AxiosInstance;

  constructor(url: string | undefined) {
    axios.defaults.headers.common.Accept = '*/*';
    const baseURL = url || '';
    this.axios = axios.create({
      baseURL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axios.interceptors.request.use(
      async config => {
        // let token = authUtils.getToken();

        // if (token && token.length) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        return Promise.reject(error.response?.data);
      }
    );
  }

  public async get(url: string, params?: {}) {
    const query = qs.stringify(params);
    const path = query ? `${url}?${query}` : url;

    const response = await this.axios.get(path);
    return responseBody(response);
  }

  async post(url: string, body: {}) {
    const response = await this.axios.post(url, body);
    return responseBody(response);
  }

  async put(url: string, body: {}) {
    const response = await this.axios.put(url, body);
    return responseBody(response);
  }

  async delete(url: string) {
    const response = await this.axios.delete(url);
    return responseBody(response);
  }
}

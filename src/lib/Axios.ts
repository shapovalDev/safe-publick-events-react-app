import axios, { AxiosResponse } from 'axios';
import { getLocalStorage, setLocalStorage } from './LocalStorage';

const onFulfilled = async (response: AxiosResponse) => {
  return response;
};

const onRejected = async (error: any) => {
  const originalRequest = error.config;

  if (error?.response?.status === 403 && !originalRequest.retry) {
    originalRequest.retry = true;
    const res = await axios.post('http://localhost:5000/auth/refresh', {
      refreshToken: getLocalStorage('refreshToken'),
    });

    if (res.status === 200) {
      // put tokens to LocalStorage
      setLocalStorage('refreshToken', res.data.refreshToken);
      setLocalStorage('accessToken', res.data.accessToken);

      // Change Authorization header
      originalRequest.headers.Authorization = `Bearer ${getLocalStorage(
        'accessToken'
      )}`;

      // return originalRequest object with Axios.
      return axios(originalRequest);
    }
  }
  // return Error object with Promise
  return Promise.reject(error);
};

axios.interceptors.response.use(onFulfilled, onRejected);

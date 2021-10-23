import axios from 'axios';
import { UrlRequest } from '../model/Axios';
import { IUser } from '../features/Auth';
import { setLocalStorage } from './LocalStorage';

export const registration = async (userData: IUser): Promise<any> => {
  const response = await axios.post(UrlRequest.RegistrationURL, userData);
  setLocalStorage('accessToken', response.data.token);
};

export const login = async (credentials: IUser): Promise<any> => {
  const response = await axios.post(UrlRequest.LoginURL, credentials);
  setLocalStorage('accessToken', response.data.token);
};

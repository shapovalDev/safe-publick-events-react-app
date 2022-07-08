import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { UrlRequest } from '../model/Axios';
import { IUser } from '../features/Auth';
import { getLocalStorage, setLocalStorage } from './LocalStorage';
import { authStore } from '../store/Auth.store';

const token = getLocalStorage('accessToken');

const headers = {
  headers: { Authorization: token },
};

export const registration = async (userData: IUser): Promise<any> => {
  const response = await axios.post(UrlRequest.RegistrationURL, userData);
  setLocalStorage('accessToken', response.data.token);
  authStore.setUserData(response.data.user);
  setLocalStorage('currentUserRole', response.data.user.role);
  return response;
};

export const login = async (credentials: IUser): Promise<any> => {
  const response = await axios.post(UrlRequest.LoginURL, credentials);
  setLocalStorage('accessToken', response.data.token);
  authStore.setUserData(response.data.user);
  setLocalStorage('currentUserRole', response.data.user.role);
  return response;
};

export const createEventRequest = async (payload: any): Promise<any> => {
  const response = await axios.post(UrlRequest.CreateEvent, payload, headers);
  return response;
};

export const deleteEvent = async (id: string): Promise<any> => {
  await axios.delete(UrlRequest.DeleteEvent + id, headers);
};

export const getAllEventsByUser = async (): Promise<any> => {
  const response = await axios.get(UrlRequest.GetAllEventsByUser, headers);
  return response;
};

export const getUserProfile = async (): Promise<any> => {
  const response = await axios.get(UrlRequest.GetUserProfile, headers);
  return response;
};

export const editProfile = async (newData: { name: string; surname: string }): Promise<any> => {
  const response = await axios.patch(UrlRequest.EditUserProfile, newData, headers);
  return response;
};

export const getEventsForSecurity = async (): Promise<any> => {
  const response = await axios.get(UrlRequest.GetAllEventForSecurity, headers);
  return response;
};

export const sendEventRequest = async (id: string): Promise<any> => {
  const response = await axios.patch(UrlRequest.SendRequest + id, null, headers);
  return response;
};

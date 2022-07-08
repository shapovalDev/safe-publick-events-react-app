import { ChangeEventHandler } from 'react';
import { authStore } from '../../../store/Auth.store';
import { getLocalStorage } from '../../../lib/LocalStorage';

export interface IUser {
  [key: string]: string;
}

export interface IAuthInput {
  label: string;
  type: string;
  value: string;
  changeFunction: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface IMenuItem {
  value: string;
  label: string;
}

export enum Role {
  EventOrganizer = 'user',
  SecurityRepresentative = 'security',
}

export const isEventOrganizer = getLocalStorage('currentUserRole') === Role.EventOrganizer;

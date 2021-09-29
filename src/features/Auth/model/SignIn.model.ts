import { ChangeEventHandler } from 'react';

export interface IUser {
  [key: string]: string;
}

export interface IInput {
  label: string;
  type: string;
  value: string;
  changeFunction: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

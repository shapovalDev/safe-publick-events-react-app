import { ChangeEventHandler } from 'react';

export interface IUser {
  [key: string]: string;
}

export interface IAuthInput {
  label: string;
  type: string;
  value: string;
  changeFunction: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export enum Role {
  EventOrganizer = 'Event organizer',
  SecurityRepresentative = 'Security representative',
}

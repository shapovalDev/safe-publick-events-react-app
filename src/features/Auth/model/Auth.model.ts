import { ChangeEventHandler } from 'react';

export interface IUser {
  [key: string]: string;
}

export interface IAuthInput {
  label: string;
  type: string;
  value: string;
  name: string;
  changeFunction: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface IMenuItem {
  value: string;
  label: string;
}

export enum Role {
  EventOrganizer = 'Event',
  SecurityRepresentative = 'Security',
}

export enum RoleLabel {
  EventOrganizer = 'Event organizer',
  SecurityRepresentative = 'Security representative',
}

import { makeAutoObservable } from 'mobx';
import { IUser } from '../features/Auth';

class AuthStore {
  userData: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(user: IUser | any) {
    this.userData = user;
  }
}

export const authStore = new AuthStore();

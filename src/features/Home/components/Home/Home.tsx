import React, { useEffect, useState } from 'react';
import { isEventOrganizer } from '../../../Auth';
import { UserHome } from '../UserHome/UserHome';
import { SecurityHome } from '../SecurityHome/SecurityHome';
import { getLocalStorage } from '../../../../lib/LocalStorage';

export const Home = () => {
  const [isDefaultUser, setIsDefaultUser] = useState<boolean>(false);

  useEffect(() => {
    const role = getLocalStorage('currentUserRole');
    setIsDefaultUser(role === 'user');
  }, []);

  return <>{isDefaultUser ? <UserHome /> : <SecurityHome />}</>;
};

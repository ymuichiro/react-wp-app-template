import React from 'react';
import { auth } from '../../index';

/**
 * Firebaseへログイン状況を確認する
 * @param setLogined
 */
export const IsLogin = (setLogined: (value: React.SetStateAction<boolean>) => void) => {
  React.useEffect(() => {
    let mounted = true;
    auth().onAuthStateChanged(user => {
      setLogined(user !== null && mounted ? true : false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return <div />;
};

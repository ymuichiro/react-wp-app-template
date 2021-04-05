import { database } from '../../index';

/**
 * ユーザー情報を取得する
 */
export const getUserData = async (userId: string) => {
  return await database()
    .ref('users/' + userId)
    .get();
};

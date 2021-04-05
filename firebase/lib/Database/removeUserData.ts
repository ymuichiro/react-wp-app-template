import { database } from '../../index';

/**
 * ユーザー情報を消去する
 */
 export const removeUserData = async (userId: string) => {
  return await database()
    .ref('users/' + userId)
    .remove();
};
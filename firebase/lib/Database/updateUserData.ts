import { database } from '../../index';

/**
 * ユーザー情報を更新する
 */
export const updateUserData = async (userId: string, data: any) => {
  database()
    .ref('users/' + userId)
    .update(data);
};

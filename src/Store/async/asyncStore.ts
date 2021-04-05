import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// define state type & initial state value
export type LoadStatus = 'idle' | 'pending' | 'succeeded' | 'failed';
export type State = { entities: any[]; loading: LoadStatus };
const initialState: State = { entities: [], loading: 'idle' };

export const fetchUserById = createAsyncThunk('users/fetchById', async (userId: number) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  return JSON.stringify(await response.json());
});

// define reducer & action
const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      console.log('pending');
      console.log(state, action);
    }),
      builder.addCase(fetchUserById.fulfilled, (state, action) => {
        console.log('fullfilled');
        console.log(state, action);
        state.entities = [action.payload];
      }),
      builder.addCase(fetchUserById.rejected, (state, action) => {
        console.log('rejected');
        console.log(state, action);
      });
  },
});

export default slice.reducer;

/*
使い方サンプル

  const click = useCallback(() => {
    dispatch(Store.User.fetchUserById(1)).then(() => {});
  }, [dispatch]);
*/

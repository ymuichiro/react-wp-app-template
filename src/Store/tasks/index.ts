import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Todo } from './type';
import { Tools } from 'ts-utilities';

// define state type & initial state value
const initialState: TodoState = { entities: [] };

// define reducer & action
const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    // Todoを追加する
    add: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };
    },
    update: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        // 注：stateメモリを直接編集してはならない
        entities: state.entities.map<Todo>(e => {
          if (e.id === action.payload.id) {
            return { id: action.payload.id, name: action.payload.name, status: action.payload.status };
          } else {
            return { id: e.id, name: e.name, status: e.status };
          }
        }),
      };
    },
    // Todoを１つ上の値と入れ替える
    swapUp: (state, action: PayloadAction<{ id: string }>) => {
      // IDに一致する配列の位置を取得
      const position = state.entities.findIndex(e => e.id === action.payload.id);
      console.log(position);
      // １つ前の値と入れ替える
      return {
        ...state,
        entities: Tools.swapUp([...state.entities], position).concat(),
      };
    },
    // Todoを１つ下の値と入れ替える
    swapDown: (state, action: PayloadAction<{ id: string }>) => {
      // IDに一致する配列の位置を取得
      const position = state.entities.findIndex(e => e.id === action.payload.id);
      // １つ前の値と入れ替える
      return {
        ...state,
        entities: Tools.swapDown([...state.entities], position).concat(),
      };
    },
    // Todoを完了にする

    // Todoを削除する
  },
});

export type State = typeof initialState;
export const { add, update, swapDown, swapUp } = slice.actions;
export default slice.reducer;

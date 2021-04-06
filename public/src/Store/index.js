import reducer, * as Tasks from './tasks';
import userReducer, * as User from './async/asyncStore';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
export var store = configureStore({
    reducer: {
        tasks: reducer,
        user: userReducer,
    },
});
// functions
export { Tasks, User };
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export var useAppDispatch = function () { return useDispatch(); };
export var useAppSelector = useSelector;

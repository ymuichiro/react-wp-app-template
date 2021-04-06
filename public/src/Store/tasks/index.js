var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _a;
import { createSlice } from '@reduxjs/toolkit';
import { Tools } from 'ts-utilities';
// define state type & initial state value
var initialState = { entities: [] };
// define reducer & action
var slice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {
        // Todoを追加する
        add: function (state, action) {
            return __assign(__assign({}, state), { entities: __spreadArray(__spreadArray([], state.entities), [action.payload]) });
        },
        update: function (state, action) {
            return __assign(__assign({}, state), { 
                // 注：stateメモリを直接編集してはならない
                entities: state.entities.map(function (e) {
                    if (e.id === action.payload.id) {
                        return { id: action.payload.id, name: action.payload.name, status: action.payload.status };
                    }
                    else {
                        return { id: e.id, name: e.name, status: e.status };
                    }
                }) });
        },
        // Todoを１つ上の値と入れ替える
        swapUp: function (state, action) {
            // IDに一致する配列の位置を取得
            var position = state.entities.findIndex(function (e) { return e.id === action.payload.id; });
            console.log(position);
            // １つ前の値と入れ替える
            return __assign(__assign({}, state), { entities: Tools.swapUp(__spreadArray([], state.entities), position).concat() });
        },
        // Todoを１つ下の値と入れ替える
        swapDown: function (state, action) {
            // IDに一致する配列の位置を取得
            var position = state.entities.findIndex(function (e) { return e.id === action.payload.id; });
            // １つ前の値と入れ替える
            return __assign(__assign({}, state), { entities: Tools.swapDown(__spreadArray([], state.entities), position).concat() });
        },
        // Todoを完了にする
        // Todoを削除する
    },
});
export var add = (_a = slice.actions, _a.add), update = _a.update, swapDown = _a.swapDown, swapUp = _a.swapUp;
export default slice.reducer;

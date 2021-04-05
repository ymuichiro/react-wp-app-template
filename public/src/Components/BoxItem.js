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
// 小物を定義する
import React from 'react';
import Paper from '@material-ui/core/Paper';
import useTheme from '@material-ui/core/styles/useTheme';
/** 円筒型の箱を定義 */
export var CylinderBox = function (props) {
    var theme = useTheme();
    var css = {
        display: 'inline-block',
        padding: '0.3em 1em 0.3em 1em',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        margin: '0em 0.5em 1em 0.5em',
        borderRadius: '1em / 50%',
    };
    return React.createElement(Paper, { style: __assign(__assign({}, css), props.style) }, props.children);
};

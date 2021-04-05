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
import React from 'react';
/**
 * コンポーネント内の全面収まるイメージを定義（Google Photoを利用予定）
 * @param props
 */
export var InComponentFitImage = function (props) {
    return (React.createElement("img", { className: props.className, src: props.url, style: {
            objectFit: 'contain',
            maxHeight: '100%',
            maxWidth: '100%',
        } }));
};
/**
 * Div element to apply abackground（Google Photoを利用予定）
 * @param props.url
 */
export var BackGroundImageDiv = function (props) {
    var css = {
        backgroundImage: "url(" + props.url + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    return (React.createElement("div", { style: !props.style ? css : __assign(__assign({}, css), props.style), className: props.className }, !props.children ? React.createElement("div", null) : props.children));
};

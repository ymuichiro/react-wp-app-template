import React from 'react';
import { auth } from '../../index';
/**
 * Firebaseへログイン状況を確認する
 * @param setLogined
 */
export var IsLogin = function (setLogined) {
    React.useEffect(function () {
        var mounted = true;
        auth().onAuthStateChanged(function (user) {
            setLogined(user !== null && mounted ? true : false);
        });
        return function () {
            mounted = false;
        };
    }, []);
    return React.createElement("div", null);
};

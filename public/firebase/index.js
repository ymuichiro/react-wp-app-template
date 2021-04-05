import * as firebase from 'firebase/app';
import { auth as uiAuth } from 'firebaseui-ja';
import 'firebaseui-ja/dist/firebaseui.css';
import * as Lib from './lib';
// 利用するサービスを読み込む
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
// 初期化処理
firebase.default.initializeApp({
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
});
var analitics = firebase.default.analytics();
var auth = firebase.default.auth;
auth().useDeviceLanguage();
var ui = new uiAuth.AuthUI(auth());
var database = firebase.default.database;
export { firebase, analitics, auth, ui, database, Lib };

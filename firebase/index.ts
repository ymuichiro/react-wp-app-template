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

const analitics = firebase.default.analytics();
const auth = firebase.default.auth;
auth().useDeviceLanguage();
const ui = new uiAuth.AuthUI(auth());
const database = firebase.default.database;

export { firebase, analitics, auth, ui, database, Lib };

# Web Application Template

React と Material-UI による Web 開発を行う際のテンプレート。

# 利用ライブラリ

    - React,React-router
    - Material-UI
    - Typescript

# フォルダ構成

- src
  - components 最小単位の Component を定義。サイトイメージを変更する際には修正する。
  - organisms 現開発サイトで利用する Components を組み合わせた複合 Component を定義。Web サイト単位で再開発する。
  - page 各ページのフレームを定義。フレームと Organisms を組み合わせて定義する。
- firebase
  - firebase を利用しない場合は削除する。また pagege.json の firebase 関連のライブラリも同様

# update

    - 2020/04/16：html-webpack-inline-source-pluginにて undefind tapAsync エラーが発生。以下の点を修正
    - 2020/04/16：process.envによるpackage.json scriptsの効率化を実施
    - 2020/04/25：React Routerに対応、かつCDNのバージョン固定を実施
    - 2020/07/09：google.script.runをTSファイル上で操作可能に修正（アンビエント宣言追加）
    - 2020/07/14：V8 Runtimeに対応（tsconfig変更）
    - 2020/08/03：Form作成ライブラリとしてReact-Hook-Formを追加
    - 2020/08/04：Transitionのサンプルを追加
    - 2020/08/04：よく使うComponentをサンプルとして追加
    - 2020/08/05：Rechartsライブラリを追加
    - 2020/08/05：GAS Editerの重さ対策にGulpによる改行を追加,スクロール量によるTransition効果サンプル追加
    	- 2020/10/26：Webpack5に対応。一時的にサンプル削除
    - 2021/02/24：WebpackよりESBuildに変更
    - 2021/03/28：一部関数をパッケージ"ts-utility","react-toolkit"として外だし

## バンドル構成

### 開発中

ESBuild、TSC、Reloader を利用する

### ビルド時

Webpack を利用する

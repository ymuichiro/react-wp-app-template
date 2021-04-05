# Web Application Template

React と Material-UI による Web 開発を行う際のテンプレート。

# フォルダ構成

- src
  - components 最小単位の Component を定義。サイトイメージを変更する際には修正する。
  - organisms 現開発サイトで利用する Components を組み合わせた複合 Component を定義。Web サイト単位で再開発する。
  - page 各ページのフレームを定義。フレームと Organisms を組み合わせて定義する。
- firebase
  - firebase を利用しない場合は削除する。また pagege.json の firebase 関連のライブラリも同様

# update

    - 2020/04/16：html-webpack-inline-source-pluginにて undefind tapAsync エラーへの対応実施。
    - 2020/08/03：Form作成ライブラリとしてReact-Hook-Formを追加
    - 2020/10/26：Webpack5に対応
    - 2021/02/24：WebpackよりESBuildに変更
    - 2021/03/28：一部関数をパッケージ"ts-utility","react-toolkit"として外だし
    - 2021/04/05：esbuild単体では不具合が生じる場合がある為、開発時ESBuild,本番時Webpackの構成に修正

## バンドル構成

### 開発中

ESBuild、TSC、Reloader を利用する

### ビルド時

Webpack を利用する

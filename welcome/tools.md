# Aureliaで利用するツールについて

## ビルド周り

### Gulp

### Npm

### Jspm

- 概要
   - bower + requirejs + gulp のようなもの
      - gulp は言い過ぎだが、js のビルド部分だけ担ってくれる
   - クライアントサイドで利用するライブラリの依存解決
      - github, npm などのライブラリを指定可能！
   - クライアントサイド js の読み込み依存の解決
   - ビルド

- ライブラリのインストール方法
   ex) jqueryとlodashをインストールしてみる
   ```bash
    jspm install github:components/jquery npm:lodash
   ```

- 参考
   - [jspm で快適 javascript 生活（クライアントサイド JS の依存管理決定版](http://qiita.com/hrsh7th@github/items/0a225c46ba17196b9a55)

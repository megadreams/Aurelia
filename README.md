# Aurelia 触ってみようプロジェクト

## 各種リンク

- (利用ツールの理解促進)[welcome/tools.md]


# Aurelia の実行


## このプロジェクトを落としてきたら

```bash
# 必要なモジュールのインストール
# (前提としてnode.jsのインストールは必須です）
npm install -g gulp
npm install -g jspm
jspm endpoint config github

# 実行 localhost:9000/でアクセス
gulp watch
```

## 新規環境構築時に行うこと
### 事前準備

```bash
# ローカル環境整備に必要なもの
npm install -g gulp
npm install -g jspm
jspm endpoint config github
npm install -g yo generator-aurelia

# ジェネレーターを利用した開発環境整備
yo aurelia

# 必要なモジュールのインストール
npm install
jspm install -y
jspm endpoint config github

# 実行 localhost:9000/でアクセス
gulp watch

```

## はまった点

- Gulpのパスが通らない問題

npmでインストールするパスが異なる場所だったため、
[gulp: command not found]エラーがずっと出ていた

下記コマンドにて統一

```
npm config set prefix /usr/local/
```


- GitHub API Limitにひっかかった問題

Githubのsettingからgist, repo, public_repo, userへのアクセス権がついたTokenを発行すれば良い

```
export HOMEBREW_GITHUB_API_TOKEN="さっきゲットしたtoken文字列"
```

## 参考
- [Aurelia チュートリアル](https://github.com/aurelia/documentation/blob/master/Japanese/get-started.md)
- [Aurelia.jsという新しいJavaScriptフレームワーク](http://albatrosary.hateblo.jp/entry/2015/03/03/170143)
- [Aureliaのsample環境構築](http://qiita.com/nakanowax/items/416be6ba4dee6a2fbc74)
- [homebrew にて GitHubの API rate limit にかかって怒られた場合の対処方法](http://tanacasino.hatenablog.com/entry/2014/11/03/205508)



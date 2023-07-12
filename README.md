### タイピングアプリ (仮)

**方向性**
- styled-componentではなくcss moduleを使う
- storybookには価値のあるコンポーネントだけ載せる
- 無駄なコンポーネントは作らないようにする
- memo.mdに色々書く，後々Qiitaにあげる
- cssのクラス名はハイフンではなくアンダーバーで区切る


**nextプロジェクトの作成**
```
    npx create-next-app@latest --ts <プロジェクト名>
```

**ルーティング**
```
    function Sample() {
        return <span>サンプルのページです</span>
    }

    // ページコンポーネントはexport defaultする
    export default Sample
```

**Storybook**

- storybookの導入
```
    npx sb@latest init
```

- storybookの起動
    - 現状docker composeでnextの開発サーバーとstorybookを同時に起動出来てない (バックグラウンドでどっちかを起動出来てない)
```
    npm run storybook
```

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

**Jest**

- Jestの導入
```
    npm install --save-dev jest @testing-library/react @testing-library/jest-dom
    npm install --save-dev jest-environment-jsdom
```

- スクリプトの登録 (`package.json`)
```
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "test": "jest --watchAll",
        "lint": "next lint",
        "storybook": "storybook dev -p 6006",
        "build-storybook": "storybook build"
    },
```

- `jest.config.js`ファイルの作成

- https://zenn.dev/miruoon_892/articles/e42e64fbb55137
- https://zenn.dev/keita_hino/articles/488d31e8c4a240
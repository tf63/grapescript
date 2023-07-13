### 開発中に得られた知見など

**Nextのビルドツール**
- なんか現状遅い
- viteは使える?
- webpackの後継のturbopackというのがあるみたい
- storybookも遅い

**atomic design**
- `Atoms`: Use a descriptive name for the atom component, such as "Button.tsx" or "Icon.tsx".
- `Molecules`: Combine two or more atoms, and name the file accordingly, like "LoginForm.tsx" or "ProductCard.tsx".
- `Organisms`: Combine multiple molecules or atoms to create more complex components. Name the file to describe the organism's purpose, such as "Header.tsx" or "ProductList.tsx".
- `Templates`: These are higher-level components that provide layout structures for specific pages or sections. You can name them based on their purpose, like "HomePage.tsx" or "BlogPostTemplate.tsx".
- `Pages`: These components represent actual pages in your application and are responsible for fetching data and passing it down to the templates and organisms. Name them based on the page they represent, such as "Index.tsx" or "About.tsx".

**global style**
- グローバルスタイル(`styles/global.css`)は`pages/_app.tsx`を置くと反映される
- ~~変更を加えた場合，サーバーを再起動しないと反映されない~~ リロードすれば反映される
```
    import { AppProps } from 'next/app'
    import '../styles/global.css'

    export default function App({ Component, pageProps }: AppProps) {
        return <Component {...pageProps} />
    }

```

- GlobalStyles.tsxを_app.tsxで読み込む方法もある
```
    import { createGlobalStyle } from 'styled-components'

    const GlobalStyles = createGlobalStyle`
        /* Add your global CSS styles here */
        body {
            font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
            background-color: #efefef;
            color: #888888;
        }

        h1 {
            font-weight: lighter;
            letter-spacing: .2rem;
        }
    `

    export default GlobalStyles
```
```
    import { AppProps } from 'next/app'
    import '../styles/global.css'

    export default function App({ Component, pageProps }: AppProps) {
        return (
            <>
            <GlobalStyles />
            <Component {...pageProps} />
            </>
        )
    }
```

**コンポーネント名**
- 先頭を大文字にしないとエラーをはく



**React Node**
- childrenを使いたい
```
    type LinkProps = {
        href: string
        children: ReactNode
    }

    const NLink: React.FC<LinkProps> = (props) => {
        return (
            <Link href={props.href} className={styles.link}>
                {props.children}
            </Link>
        )
    }

    export default NLink
```

- childrenはpropsに含めなくとも使える
```
    <NLink href="/sample">
        <Card text="Card" />
    </NLink>
```

**stylesを@stylesのようにimportしたい**
- tsconfig.jsonを次のようにする
```
    "paths": {
      "@/*": ["./*"],
      "@styles/*": ["./styles/*"]
    }
```

**_document.tsx**
- mainにページ共通のcomponentを配置するのはよくなさそう
- 代わりに`_app.tsx`に配置するべき

**github actions**
```
    name: CI

    on:
    push:
        branches: [ "dev" ]
    pull_request:
        branches: [ "master" ]


    jobs:
    build:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout repository
            uses: actions/checkout@v2

        - name: Set up Node.js
            uses: actions/setup-node@v2
            with:
            node-version: 19
            cache: npm

        - name: cache-node-modules
            uses: actions/cache@v3
            id: node_modules_cache_id
            env:
            cache-name: cache-node-modules
            with:
            path: '**/node_modules'
            key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}

        - name: Install dependencies
            if: ${{ steps.node_modules_cache_id.outputs.cache-hit != 'true' }}
            run: npm install

        - name: Build
            run: npm run build

        - name: Test
            run: npm run test

```

### 参考
- styled-components
https://tekrog.com/styled-components
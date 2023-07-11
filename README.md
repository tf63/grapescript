### Next.jsのテスト用

- ビルドツールは?
    - なんか現状遅い
    - viteは使える?
    - webpackの後継のturbopackというのがあるみたい

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

**React Node**
- childrenを使いたい
```
    type LinkProps = {
        href: string
        children: ReactNode
    }

    const nLink: React.FC<LinkProps> = ({ href, children }) => {
        return (
            <Link href={href} className={styles.link}>
                {children}
            </Link>
        )
    }
```

### メモ

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

### 参考
- styled-components
https://tekrog.com/styled-components
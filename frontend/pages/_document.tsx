import Document, { Html, Head, Main, NextScript } from 'next/document'

// headタグをここでかけば全てのpageで適用されるみたい
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <link rel="icon" type="image/svg+xml" href="/next.svg" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>GrapeScript</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

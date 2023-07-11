import { AppProps } from 'next/app'
import '../styles/Global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

import { AppProps } from 'next/app'
import '@styles/Global.css'
import styles from '@styles/Theme.module.css'
import { LinkedButton } from '@/components/LinkedButton'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className={styles.page_container}>
                <LinkedButton href="/" text="Grape Script" color="none" />
                <Component {...pageProps} />
            </div>
        </>
    )
}

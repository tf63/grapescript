import { ReactNode } from 'react'
import styles from '../styles/Theme.module.css'
import Link from 'next/link'

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

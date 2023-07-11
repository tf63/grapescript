import React from 'react'
import styles from '../styles/Button.module.css'
import Link from 'next/link'

type ButtonProps = {
    text: string
    color: 'green' | 'blue'
}

export const Button: React.FC<ButtonProps> = ({ text, color }) => {
    switch (color) {
        case 'blue':
            return <div className={`${styles.button} ${styles.blue}`}>{text}</div>
        case 'green':
            return <div className={`${styles.button} ${styles.green}`}>{text}</div>
    }
}

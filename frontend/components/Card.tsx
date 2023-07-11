import styles from '../styles/Card.module.css'

type CardProps = {
    text: string
}

const Card: React.FC<CardProps> = ({ text }) => {
    return <div className={styles.card}>{text}</div>
}

export default Card

import type { NextPage } from 'next'
import Card from '@/components/Card'
import { LinkedButton } from '@/components/LinkedButton'

const Home: NextPage = () => {
    return (
        <main>
            <Card>This is Home Page</Card>
            <Card>{`${process.env.NEXT_PUBLIC_AAAA}`}</Card>
            <LinkedButton href="/select" text="Select" color="blue" />
            <LinkedButton href="/profile" text="Profile" color="blue" />
        </main>
    )
}

export default Home

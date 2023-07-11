import type { NextPage } from 'next'
import Link from 'next/link'
import Card from '@/components/Card'
import NLink from '@/components/nLink'

const Home: NextPage = () => {
    return (
        <main>
            <NLink href="/sample">
                <Card text="Card" />
            </NLink>
        </main>
    )
}

export default Home

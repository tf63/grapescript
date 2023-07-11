import React from 'react'
import { GetStaticProps } from 'next'

interface Post {
    id: number
    title: string
}

interface HomeProps {
    posts: Post[]
}

const Home: React.FC<HomeProps> = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts: Post[] = await res.json()

    return {
        props: {
            posts
        }
    }
}

export default Home

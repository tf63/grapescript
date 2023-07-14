import { useEffect, useState } from 'react'
import supabase from '@/utils/supabase'
import { PrismaClient } from '@prisma/client'
import { Todo } from '@prisma/client'
import { GetStaticProps } from 'next'
// import { prisma } from '@/lib/Prisma'

export const useAddTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        const datas: any = await supabase.from('Todo').select('*')
        // const datas = await prisma.todo.findMany()
        setTodos(datas)
        console.log(datas)
    }

    return { todos, fetchTodos }
}

// export const getStaticProps: GetStaticProps<Todo[]> = async () => {
// const datas: Todo[] = await prisma.todo.findMany()
// const res = await fetch('http://localhost:3000/api/posts')
// const posts: Post[] = await res.json()

//     return {
//         props: datas
//     }
// }

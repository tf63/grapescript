import React from 'react'
import { useState, useEffect } from 'react'
import { useAddTodo } from '@/hooks/useAddTodo'
import { Todo } from '@prisma/client'
import { GetServerSideProps, NextPage } from 'next'
import Card from './Card'

interface TodoProps {
    todos: Todo[]
}

export const TodoListAPI: NextPage<TodoProps> = ({ todos }) => {
    if (!todos) {
        return <Card>Loading</Card>
    }

    return (
        <>
            <div>todoリスト</div>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </>
    )
}

// export const getServerSideProps: GetServerSideProps<TodoProps> = async () => {
//     // const todos: Todo[] = await prisma.todo.findMany()
//     const res = await fetch('http://localhost:3000/api/todo/')
//     const todos: Todo[] = await res.json()
//     console.log(`res: ${res}`)
//     return {
//         props: {
//             todos
//         }
//     }
// }

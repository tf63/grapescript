import React from 'react'
import { InputTodoForm } from '@/components/InputTodoForm'
import { TodoListAPI } from '@/components/TodoListAPI'
import { GetServerSideProps, NextPage } from 'next'
import { Todo } from '@prisma/client'
import { prisma } from '@/lib/Prisma'

const Todo: NextPage<{ todos: Todo[] }> = ({ todos }) => {
    return (
        <>
            <InputTodoForm />
            <TodoListAPI todos={todos} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{ todos: Todo[] }> = async () => {
    // APIから取得する
    // const res = await fetch('http://localhost:3000/api/todo/')
    // const todos: Todo[] = await res.json()

    // Prismaから取得する
    const datas: Todo[] = await prisma.todo.findMany()
    const todos = JSON.parse(JSON.stringify(datas))

    return {
        props: {
            todos: todos
        }
    }
    // }
}

export default Todo

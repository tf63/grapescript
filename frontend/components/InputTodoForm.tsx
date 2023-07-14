import React, { useState } from 'react'
import { useAddTodo } from '@/hooks/useAddTodo'
import supabase from '../utils/supabase'

export const InputTodoForm: React.FC = () => {
    const [title, setTitle] = useState('')
    // const { fetchTodos } = useAddTodo()
    const data = { title: 'aaaa', completed: false }

    const pushTodo = async (e: any) => {
        e.preventDefault()
        await supabase.from('Todo').insert({ title })
        // fetchTodos()
        setTitle('')
    }

    return (
        <form onSubmit={pushTodo}>
            <input value={title} onChange={(event) => setTitle(event.target.value)} />
            <button>追加</button>
        </form>
    )
}

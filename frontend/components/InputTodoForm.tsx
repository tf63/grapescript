import React, { useState } from 'react'
import { useAddTodo } from '@/hooks/useAddTodo'
import supabase from '../utils/supabase'

export const InputTodoForm: React.FC = () => {
    const [title, setTitle] = useState('')
    const { fetchTodos } = useAddTodo()
    const data = { id: 2, title: 'aaaa', completed: false, created_at: '2023-07-13T07:05:12.731701+00:00' }

    const pushTodo = async (e: any) => {
        e.preventDefault()
        await supabase.from('todo').insert({ title })
        fetchTodos()
        setTitle('')
    }

    return (
        <form onSubmit={pushTodo}>
            <input value={title} onChange={(event) => setTitle(event.target.value)} />
            <button>追加</button>
        </form>
    )
}

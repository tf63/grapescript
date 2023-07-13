import { useEffect, useState } from 'react'
import supabase from '@/utils/supabase'

export const useAddTodo = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        const datas: any = await supabase.from('todo').select('*')
        setTodos(datas.data)
        console.log(datas)
    }

    return { todos, fetchTodos }
}

import React from 'react'
import { Button } from './Button'
import { Color } from '@/types/types'
import NLink from './NLink'

type LinkedButtonProps = {
    href: string
    text: string
    color: Color
}

export const LinkedButton: React.FC<LinkedButtonProps> = (props) => {
    return (
        <NLink href={props.href}>
            <Button text={props.text} color={props.color} />
        </NLink>
    )
}

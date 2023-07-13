import React from 'react'
import { Button } from './Button'
import { Color } from '@/types/types'
import { RLink } from './RLink'

type LinkedButtonProps = {
    href: string
    text: string
    color: Color
}

export const LinkedButton: React.FC<LinkedButtonProps> = (props) => {
    return (
        <RLink href={props.href}>
            <Button text={props.text} color={props.color} />
        </RLink>
    )
}

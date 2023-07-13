import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
    title: 'Atom/Button',
    component: Button,
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        color: 'green',
        text: 'Primary'
    }
}

export const Blue: Story = {
    args: {
        color: 'blue',
        text: 'Blue'
    }
}

export const White: Story = {
    args: {
        color: 'white',
        text: 'White'
    }
}

export const None: Story = {
    args: {
        color: 'none',
        text: 'None'
    }
}
// export const Secondary: Story = {
//     args: {
//         label: 'Button'
//     }
// }

// export const Large: Story = {
//     args: {
//         size: 'large',
//         label: 'Button'
//     }
// }

// export const Small: Story = {
//     args: {
//         size: 'small',
//         label: 'Button'
//     }
// }

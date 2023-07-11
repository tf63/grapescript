import Card from '../components/Card'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
    title: 'Atom/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
}

export default meta

type Story = StoryObj<typeof Card>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Primary Card'
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

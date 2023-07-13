import type { Meta, StoryObj } from '@storybook/react'

import { Caret } from '@components/Caret'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Caret> = {
    title: 'Atom/Button',
    component: Caret,
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Caret>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}

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

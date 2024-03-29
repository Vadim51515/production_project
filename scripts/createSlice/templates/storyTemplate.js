module.exports = (layer, componentName) => `import React from 'react';
import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ${componentName} } from './${componentName}'

const meta = {
    title: 'example_test/${componentName}',
    component: ${componentName},
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ${componentName}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
    }
}

};`

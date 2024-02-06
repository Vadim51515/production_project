import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator';
import { mockStore } from '../../../../shared/constants/mockStore';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

Default.decorators = storeDecorator(mockStore);

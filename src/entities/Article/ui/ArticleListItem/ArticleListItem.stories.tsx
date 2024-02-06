import type { Meta, StoryObj } from '@storybook/react';
import { mockArticle } from '../../model/constants';
import { ArticleListItem } from './ArticleListItem';

const meta = {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListFormatComponent: Story = {
    args: {
        view: 'list',
        article: mockArticle,
    },
};

export const TileFormatComponent: Story = {
    args: {
        view: 'tile',
        article: mockArticle,
    },
};

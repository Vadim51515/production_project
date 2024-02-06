import type { Meta, StoryObj } from '@storybook/react';
import { mockArticle } from '../../model/constants';
import { ArticleList } from './ArticleList';
const meta = {
    title: 'entities/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListArticleItems: Story = {
    args: {
        view: 'list',
        articles: [mockArticle, mockArticle, mockArticle],
    },
};

export const ListArticleItemsLoading: Story = {
    args: {
        view: 'list',
        isLoading: true,
        articles: [mockArticle, mockArticle, mockArticle],
    },
};

export const TileArticleItems: Story = {
    args: {
        view: 'tile',
        articles: [mockArticle, mockArticle, mockArticle],
    },
};

export const TileArticleItemsLoading: Story = {
    args: {
        view: 'tile',
        isLoading: true,
        articles: [mockArticle, mockArticle, mockArticle],
    },
};

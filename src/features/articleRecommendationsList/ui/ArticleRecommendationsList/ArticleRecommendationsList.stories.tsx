import type { Meta, StoryObj } from '@storybook/react';
import { mockArticle } from '../../../../entities/Article';
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator';
import { mockStore } from '../../../../shared/constants/mockStore';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        layout: 'centered',
        mockData: [
            {
                url: __API__ + '/articles?_limit=3',
                method: 'GET',
                status: 200,
                response: {
                    data: [{ mockArticle }, { ...mockArticle, id: '2' }, { ...mockArticle, id: '3' }],
                },
            },
        ],
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
Default.decorators = storeDecorator(mockStore);

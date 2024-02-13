import { type IRating } from '../../../entities/Rating';
import { rtkApi } from '../../../shared/api';

interface IGetArticleArg {
    userId: string;
    profileId?: string;
    articleId?: string;
}

interface IRateArticleArg {
    userId: string;
    rate: number;
    feedback?: string;
    articleId: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<IRating[], IGetArticleArg>({
            query: ({ userId, profileId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),

        rateArticle: build.mutation<IRating[], IRateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetArticleRatingQuery } = articleRatingApi;
export const { useRateArticleMutation } = articleRatingApi;

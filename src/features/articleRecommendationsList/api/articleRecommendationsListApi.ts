import { rtkApi } from '../../../shared/api';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useGetArticleRecommendationListQuery = recommendationsApi.useGetArticleRecommendationListQuery;

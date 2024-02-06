import { lazy, Suspense } from 'react';
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton';
import { type IArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'));

export const ArticleRatingAsync = (props: IArticleRatingProps) => {
    return (
        <Suspense
            fallback={
                <Skeleton
                    width="100%"
                    height={92}
                />
            }
        >
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};

import React, { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Rating } from '../../../../entities/Rating';
import { userAuthDataSelector } from '../../../../entities/User';
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton';

import { useGetProfileRatingQuery, useRateProfileMutation } from '../../api/profileRatingApi';

export interface IProfileRatingProps {
    className?: string;
    id: string;
}

const ProfileRating: FC<IProfileRatingProps> = ({ id: profileId }) => {
    const authData = useSelector(userAuthDataSelector);
    const { t } = useTranslation();

    const { data, isLoading } = useGetProfileRatingQuery({
        userId: authData?.id ?? '',
        profileId,
    });
    const [rateArticle] = useRateProfileMutation();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticle({
                    userId: authData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [profileId, authData?.id],
    );

    const onConfirm = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    const rating = data?.[0];

    if (profileId === authData?.id) return null;

    if (isLoading) {
        return (
            <Skeleton
                width={'100%'}
                height={'92px'}
            />
        );
    }

    return (
        <Rating
            hasFeedback
            onConfirm={onConfirm}
            onCancel={onCancel}
            rate={rating?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставте обратную связь')}
        />
    );
};

export default ProfileRating;

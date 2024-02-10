import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Rating } from '../../../entities/Rating';
import { getFeatureFlag } from '../../../shared/lib/features';
import { Page } from '../../../widgets/Page';
import { Text } from '../../../shared/ui/Text';

const MainPage = () => {
    const { t } = useTranslation('main');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    console.log('isCounterEnabled', isCounterEnabled);

    return (
        <Page dataTestId={'MainPage'}>
            <Text tag="h1">{t('Главная страница')}</Text>

            {isCounterEnabled && <Counter />}

            {isArticleRatingEnabled && (
                <Rating
                    title={'Пожалуйста оцените'}
                    feedbackTitle={'Напишите ощущение'}
                    onCancel={() => {}}
                    onConfirm={() => {}}
                    hasFeedback
                />
            )}
        </Page>
    );
};
export default MainPage;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Rating } from '../../../entities/Rating';
import { getFeatureFlag, ToggleFeatures } from '../../../shared/lib/features';
import { Card } from '../../../shared/ui/Card';
import { Page } from '../../../widgets/Page';
import { Text } from '../../../shared/ui/Text';

const MainPage = () => {
    const { t } = useTranslation('main');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    return (
        <Page dataTestId={'MainPage'}>
            <Text
                tag="h1"
                withMarginBottom
            >
                {t('Главная страница')}
            </Text>

            {isCounterEnabled && <Counter />}

            <ToggleFeatures
                feature={'isArticleRatingEnabled'}
                on={
                    <Rating
                        title={t('Пожалуйста оцените новый дизайн')}
                        feedbackTitle={'Напишите ощущение'}
                        onCancel={() => {}}
                        onConfirm={() => {}}
                        hasFeedback
                    />
                }
                off={
                    <Card>
                        <Text tag={'h3'}>{t('Скоро на этом месте будет оценка')}</Text>
                    </Card>
                }
            />
        </Page>
    );
};
export default MainPage;

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from '../../../entities/Counter'
import { Rating } from '../../../entities/Rating'
import { Page } from '../../../widgets/Page'
import { Text } from '../../../shared/ui/Text'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <Page>
            <Text tag='h1'>{t('Главная страница')}</Text>

            <Counter />

            <Rating
                title={'Пожалуйста оцените'}
                feedbackTitle={'Напишите ощущение'}
                onCancel={() => {}}
                onConfirm={() => {}}
                hasFeedback
            />
        </Page>
    )
}
export default MainPage

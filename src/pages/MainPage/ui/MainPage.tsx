import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from '../../../entities/Counter'
import { Page } from '../../../shared/ui/Page'
import { Text } from '../../../shared/ui/Text'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <Page>
            <Text tag='h1'>{t('Главная страница')}</Text>

            <Counter />
        </Page>
    )
}
export default MainPage

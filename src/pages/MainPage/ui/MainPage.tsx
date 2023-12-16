import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from '../../../entities/Counter'
import { Text } from '../../../shared/ui/Text'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <div>
            <Text tag='h1'>{t('Главная страница')}</Text>

            <Counter />
        </div>
    )
}
export default MainPage

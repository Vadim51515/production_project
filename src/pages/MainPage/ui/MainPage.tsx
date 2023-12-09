import React from 'react'
import { Counter } from '../../../entities/Counter'

const MainPage = () => {
    // const { t } = useTranslation('main')

    return (
        <div>
            {/* <h1>{t('Главная страница')}</h1> */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1>Главная страница</h1>
            <Counter />
            {/* <h1>{t('Главная тестовая страница1')}</h1> */}
            {/* /!* eslint-disable-next-line i18next/no-literal-string *!/ */}
            {/* <Button pattern='outline'>Outline btn</Button> */}
            {/* /!* eslint-disable-next-line i18next/no-literal-string *!/ */}
            {/* <Button pattern='clear'>Clear btn</Button> */}
        </div>
    )
}
export default MainPage

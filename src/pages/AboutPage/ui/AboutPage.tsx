import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '../../../widgets/Page'
import { Text } from '../../../shared/ui/Text'

const AboutPage = () => {
    const { t } = useTranslation('about')

    return (
        <Page dataTestId={'AboutPage'}>
            <Text tag={'h1'}>{t('О сайте')}</Text>
        </Page>
    )
}

export default AboutPage

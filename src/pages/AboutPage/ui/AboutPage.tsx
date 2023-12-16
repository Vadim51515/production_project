import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '../../../shared/ui/Text'

const AboutPage = () => {
    const { t } = useTranslation('about')

    return (
        <div>
            <Text tag={'h1'}>{t('О сайте')}</Text>
        </div>
    )
}

export default AboutPage

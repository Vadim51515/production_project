import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { profileReducer } from '../../../entities/Profile'
import {
    type TReducersList,
    useAsyncReducer
} from '../../../shared/hooks/useAsyncReducer'
import { Text } from '../../../shared/ui/Text'

interface IProfilePageProps {
    className?: string
}

const reducers: TReducersList = { profile: profileReducer }

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    useAsyncReducer(reducers, true)
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            <Text tag='h1'>{t('Профиль')}</Text>
        </div>
    )
}

export default ProfilePage

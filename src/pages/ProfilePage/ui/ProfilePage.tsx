import React, {
    type FC
} from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import {
    ProfileCard,
    ProfileErrorModal,
    ProfileHeader,
    ProfileLogoutBtn,
    profileReducer
} from '../../../entities/Profile'
import {
    type TReducersList,
    useAsyncReducer
} from '../../../shared/hooks/useAsyncReducer'
import { classNames } from '../../../shared/lib/classNames/classNames'
import { Text } from '../../../shared/ui/Text'
import { Page } from '../../../widgets/Page'
interface IProfilePageProps {
    className?: string
}

const reducers: TReducersList = { profile: profileReducer }

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    useAsyncReducer(reducers, true)

    const { id } = useParams<{ id: string }>()

    const { t } = useTranslation()

    if (!id && __PROJECT__ === 'frontend') return <Text tag={'h1'}>{t('Профиль не найден')}</Text>

    return (
        <Page className={classNames('', {}, [className])}>
            <ProfileHeader />

            <ProfileCard id={id ?? ''} />

            <ProfileLogoutBtn />

            <ProfileErrorModal />
        </Page>
    )
}

export default ProfilePage

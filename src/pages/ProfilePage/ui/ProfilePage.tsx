import React, {
    type FC
} from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

import {
    ProfileActionControls,
    ProfileCard,
    ProfileErrorModal,
    profileReducer
} from '../../../entities/Profile'
import { profileActions } from '../../../entities/Profile/model/actions'
import { userActions } from '../../../entities/User'
import { useActions } from '../../../shared/hooks/useActions'
import {
    type TReducersList,
    useAsyncReducer
} from '../../../shared/hooks/useAsyncReducer'
import { useInitialEffect } from '../../../shared/hooks/useInitialEffect'
import { Button } from '../../../shared/ui/Button'
import { Page } from '../../../widgets/Page'
import { Text } from '../../../shared/ui/Text'
import styles from './ProfilePage.module.scss'
interface IProfilePageProps {
    className?: string
}

const reducers: TReducersList = { profile: profileReducer }

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    useAsyncReducer(reducers, true)

    const { logout } = useActions(userActions)
    const { fetchProfileData } = useActions(profileActions)

    const { id } = useParams<{ id: string }>()

    const { t } = useTranslation()
    useInitialEffect(() => {
        console.log('id', id)
        if (id) fetchProfileData(id)
    })

    return (
        <Page className={classNames('', {}, [className])}>
            <div className={ classNames('pageTitleContainer', {}, [styles.titleContainer])}>
                <Text tag='h1'>{t('Профиль')}</Text>
                <ProfileActionControls />
            </div>

            <ProfileCard />

            <Button onClick={logout}>{t('Выйти из аккаунта')}</Button>

            <ProfileErrorModal />
        </Page>
    )
}

export default ProfilePage

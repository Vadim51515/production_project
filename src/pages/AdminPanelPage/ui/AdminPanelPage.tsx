import React, { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '../../../shared/ui/Text'
import { Page } from '../../../widgets/Page'

interface IAdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<IAdminPanelPageProps> = ({ className }) => {
    return (
        <Page dataTestId={'AdminPanelPage'} className={classNames('', {}, [className])}>
            <Text>{'AdminPanelPage'}</Text>
        </Page>
    )
}

export default AdminPanelPage

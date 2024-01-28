import React, { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '../../../shared/ui/Text'

interface IAdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<IAdminPanelPageProps> = ({ className }) => {
    return (
        <div className={classNames('', {}, [className])}>
            <Text>{'AdminPanelPage'}</Text>
        </div>
    )
}

export default AdminPanelPage

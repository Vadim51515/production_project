import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from '../../../shared/ui/Text'
import styles from './AdminPanelPage.module.scss'

interface IAdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<IAdminPanelPageProps> = ({ className }) => {
    return (
        <div className={classNames(styles.AdminPanelPage, {}, [className])}>
            <Text>{'AdminPanelPage'}</Text>
        </div>
    )
}

export default AdminPanelPage

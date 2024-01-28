import React, { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '../../../../shared/ui/AppLink/AppLink'
import { VStack } from '../../../../shared/ui/Stack'
import { Text } from '../../../../shared/ui/Text'
import { type INotification } from '../../model/types'
import styles from './NotificationItem.module.scss'

interface INotificationItemProps {
    className?: string
    item: INotification
}

export const NotificationItem: FC<INotificationItemProps> = ({ className, item }) => {
    const content = (
        <VStack className={classNames(styles.notificationItem, {}, [className])} >
            <Text className={!item.href && styles.title} tag={'h3'}>{item.title}</Text>
            <Text>{item.description}</Text>
        </VStack>
    )

    if (item.href) return <AppLink to={item.href}>{content}</AppLink>

    return content
}

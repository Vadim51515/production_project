import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton'
import { VStack } from '../../../../shared/ui/Stack'
import { useGetNotificationQuery } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import styles from './NotificationList.module.scss'

interface INotificationListProps {
    className?: string
}

export const NotificationList: FC<INotificationListProps> = ({ className }) => {
    const {
        data,
        isLoading
    } = useGetNotificationQuery(null, {
        pollingInterval: 5000
    })

    const content = data?.map((item) => (
        <NotificationItem
            key={item.id}
            item={item}
        />
    ))

    const loadingContent = (
        <>
            <Skeleton
                width={'100%'}
                borderRadius={'8px'}
                height={'80px'}
            />
            <Skeleton
                width={'100%'}
                borderRadius={'8px'}
                height={'80px'}
            />
            <Skeleton
                width={'100%'}
                borderRadius={'8px'}
                height={'80px'}
            />
        </>
    )

    return (
        <VStack gap={'10'} className={classNames(styles.NotificationList, {}, [className])}>
            {isLoading
                ? loadingContent
                : content}
        </VStack>
    )
}

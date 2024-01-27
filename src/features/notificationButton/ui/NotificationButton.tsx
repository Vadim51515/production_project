import React, { type FC } from 'react'
import { NotificationList } from '../../../entities/Notification'
import NotificationIcon from '../../../shared/assets/icons/Notification.svg'
import { Icon } from '../../../shared/ui/Icon/Icon'
import { Popover } from '../../../shared/ui/Popups/ui/Popover/Popover'

export const NotificationButton: FC = () => {
    return (
        <Popover trigger={<Icon Svg={NotificationIcon} />}>
            <NotificationList />
        </Popover>

    )
}

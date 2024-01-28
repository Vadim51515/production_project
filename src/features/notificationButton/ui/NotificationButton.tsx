import React, {
    type FC,
    useState
} from 'react'
import { NotificationList } from '../../../entities/Notification'
import NotificationIcon from '../../../shared/assets/icons/Notification.svg'
import { Button } from '../../../shared/ui/Button'
import { Drawer } from '../../../shared/ui/Drawer'
import { Icon } from '../../../shared/ui/Icon/Icon'
import { Popover } from '../../../shared/ui/Popups/ui/Popover/Popover'
import {
    BrowserView,
    MobileView
} from 'react-device-detect'
export const NotificationButton: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const trigger = (
        <Button pattern={'clear'} onClick={() => { setIsOpen(true) }}>
            <Icon Svg={NotificationIcon} />
        </Button>
    )

    return (
        <>
            <BrowserView>
                <Popover trigger={trigger}>
                    <NotificationList />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    )
}

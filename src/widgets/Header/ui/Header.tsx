import React, {
    type FC
} from 'react'

import { AvatarDropdown } from '../../../features/avatarDropdown'
import { NotificationButton } from '../../../features/notificationButton'
import { HStack } from '../../../shared/ui/Stack'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <header
            data-testid='header'
            className={styles.container}
        >
            <ThemeSwitcher />

            <HStack
                gap={'10'}
                align={'center'}
            >
                <NotificationButton />

                <AvatarDropdown />
            </HStack>

        </header>
    )
}

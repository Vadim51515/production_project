import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
    isUserAdminSelector,
    isUserManagerSelector,
    userAuthDataSelector
} from '../../../entities/User'

import { RoutePath } from '../../../shared/constants/common'
import { Avatar } from '../../../shared/ui/Avatar/ui/Avatar'
import { Dropdown } from '../../../shared/ui/Popups'

interface IAvatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<IAvatarDropdownProps> = () => {
    const userAuthData = useSelector(userAuthDataSelector)

    const isAdmin = useSelector(isUserAdminSelector)
    const isManager = useSelector(isUserManagerSelector)

    const isAvailableAdminPage = isAdmin || isManager

    const navigate = useNavigate()
    const options = [
        {
            label: 'Item под номером 1',
            value: 'Item под номером 1',
            onClick: () => {

            }
        },
        {
            label: 'Item под номером 2',
            value: 'Item под номером 2',
            onClick: () => {

            }
        },
        ...(isAvailableAdminPage
            ? [
                {
                    label: 'Админка',
                    value: 'Админка',
                    onClick: () => {
                        navigate(RoutePath.admin_panel)
                    }
                }
            ]
            : [])
    ]

    const onClick = (newOptionValue: string) => {
        options.find((option) => option.value === newOptionValue)?.onClick()
    }
    return (
        <Dropdown
            options={options}
            onClick={onClick}
        >
            <Avatar
                size={50}
                image={userAuthData?.avatar}
            />
        </Dropdown>
    )
}

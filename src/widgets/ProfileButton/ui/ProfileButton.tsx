import React, { type FC } from 'react'
import { LoginButton } from '../../LoginButton'

interface IProfileButtonProps {
    className?: string
}

const isAuth = false

export const ProfileButton: FC<IProfileButtonProps> = () => {
    if (!isAuth) return <LoginButton />
    return (
        <div>

        </div>
    )
}

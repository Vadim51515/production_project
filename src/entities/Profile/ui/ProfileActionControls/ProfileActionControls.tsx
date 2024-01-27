import React, {
    type FC
} from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../../../shared/hooks/useActions'
import { ActionControls } from '../../../../widgets/ActionControls'
import { userAuthDataSelector } from '../../../User'
import { profileActions } from '../../model/actions'
import {
    profileDataSelector,
    profileIsReadonlySelector
} from '../../model/selectors/selectors'

interface IProfileEditBtnProps {
    className?: string
}

export const ProfileActionControls: FC<IProfileEditBtnProps> = () => {
    const isReadonly = useSelector(profileIsReadonlySelector)
    const data = useSelector(profileDataSelector)
    const authData = useSelector(userAuthDataSelector)

    const {
        setIsReadonly,
        setForm,
        updateProfileData,
        cancelEdit
    } = useActions(profileActions)

    const onCancel = () => {
        cancelEdit()
    }

    const onEdit = () => {
        setIsReadonly(false)
        setForm(data)
    }
    const onSave = () => {
        updateProfileData(data?.id || '')
    }

    console.log('authData', authData)
    console.log('data', data)
    if (authData?.id !== data?.id) return null

    return (
        <ActionControls
            dataTestId={'Profile'}
            isReadonly={isReadonly}
            onEdit={onEdit}
            onCancel={onCancel}
            onSave={onSave}
        />
    )
}

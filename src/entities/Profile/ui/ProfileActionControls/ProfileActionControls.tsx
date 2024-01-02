import React, {
    type FC
} from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../../../shared/hooks/useActions'
import { ActionControls } from '../../../../widgets/ActionControls'
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

    const {
        setIsReadonly,
        setForm,
        updateProfileData
    } = useActions(profileActions)

    const onCancel = () => {
        setIsReadonly(true)
        setForm()
    }

    const onEdit = () => {
        setIsReadonly(false)
        setForm(data)
    }
    const onSave = () => {
        updateProfileData()
    }

    return (
        <ActionControls
            isReadonly={isReadonly}
            onEdit={onEdit}
            onCancel={onCancel}
            onSave={onSave}
        />
    )
}

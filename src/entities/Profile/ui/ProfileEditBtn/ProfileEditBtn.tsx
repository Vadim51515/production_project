import React, {
    type FC
} from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../../../shared/hooks/useActions'
import { ActionControls } from '../../../../widgets/ActionControls'
import { profileActions } from '../../model/actions'
import { profileIsReadonlySelector } from '../../model/selectors/selectors'

interface IProfileEditBtnProps {
    className?: string
}

export const ProfileEditBtn: FC<IProfileEditBtnProps> = () => {
    const isReadonly = useSelector(profileIsReadonlySelector)

    const { setIsReadonly } = useActions(profileActions)

    return (
        <ActionControls
            isReadonly={isReadonly}
            onEdit={() => { setIsReadonly(false) }}
            onCancel={() => {}}
            onSave={() => {}}
        />
    )
}

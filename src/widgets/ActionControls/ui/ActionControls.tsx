import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { type Func } from '../../../app/types'
import { Button } from '../../../shared/ui/Button'
import { HStack } from '../../../shared/ui/Stack'
interface IActionControlsProps {
    className?: string
    onEdit: Func
    onSave?: Func
    onCancel?: Func
    saveButtonText?: string
    cancelButtonText?: string
    editButtonText?: string
    isReadonly?: boolean
}

export const ActionControls: FC<IActionControlsProps> = ({
    editButtonText,
    cancelButtonText,
    onEdit,
    saveButtonText,
    onSave,
    onCancel,
    isReadonly
}) => {
    const { t } = useTranslation()

    return (
        <HStack>
            {isReadonly && (<Button onClick={onEdit}>{editButtonText ?? t('Редактировать')}</Button>)}
            {!isReadonly && <div className='row'>
                {onCancel && <Button
                    pattern={'outline'}
                    onClick={onCancel}
                >{cancelButtonText ?? t('Отменить')}</Button>}
                {onSave && <Button onClick={onSave}>{saveButtonText ?? t('Сохранить')}</Button>}
            </div>}
        </HStack>
    )
}

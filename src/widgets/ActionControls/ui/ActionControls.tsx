import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Func } from '../../../app/types'
import { Button } from '../../../shared/ui/Button'
import styles from './ActionControls.module.scss'

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
    className,
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
        <div
            className={classNames(
                styles.actionControls,
                {},
                [className]
            )}
        >
            {isReadonly && (<Button onClick={onEdit}>{editButtonText ?? t('Редактировать')}</Button>)}
            {!isReadonly && <div className='row'>
                {onCancel && <Button
                    pattern={'outline'}
                    onClick={onCancel}
                >{cancelButtonText ?? t('Отменить')}</Button>}
                {onSave && <Button onClick={onSave}>{saveButtonText ?? t('Сохранить')}</Button>}
            </div>}
        </div>
    )
}

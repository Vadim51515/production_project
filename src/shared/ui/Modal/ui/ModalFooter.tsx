import React, {
    type FC,
    memo
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type Func } from '../../../../app/types'
import { Button } from '../../Button'
import { type IModalFooterProps } from '../types'
import styles from './Modal.module.scss'

interface IFooterProps extends IModalFooterProps {
    onCloseModal: Func<[Func]>
}

export const ModalFooter: FC<IFooterProps> = memo(({
    confirmText = 'Принять',
    onConfirm,
    cancelText = 'Отмена',
    onCancel,
    onCloseModal
}) => {
    return (
        <div className={classNames(styles.footer, {}, [])}>
            {onCancel && <Button onClick={() => { onCloseModal(onCancel) }} pattern='outline'>{cancelText}</Button>}
            {onConfirm && <Button onClick={() => { onCloseModal(onConfirm) }}>{confirmText}</Button>}
        </div>
    )
})

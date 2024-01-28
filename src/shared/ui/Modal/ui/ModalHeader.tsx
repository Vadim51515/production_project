import React, {
    type FC,
    memo
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import type { Func } from '../../../../app/types'
import { Button } from '../../Button'
import { Text } from '../../Text'
import { type IModalHeaderProps } from '../types'
import styles from './Modal.module.scss'
import CloseIcon from '@/shared/assets/icons/close.svg?react'

interface IHeaderProps extends IModalHeaderProps {
    onCloseModal: Func
}

export const ModalHeader: FC<IHeaderProps> = memo(({
    title,
    onCloseModal
}) => {
    return (
        <div className={classNames(styles.header, {}, [])}>
            <Text tag='h1' className={styles.title}>{title}</Text>
            <Button
                isRound
                className={styles.closeBtn}
                onClick={() => { onCloseModal() }}
            >
                <CloseIcon />
            </Button>
        </div>
    )
})

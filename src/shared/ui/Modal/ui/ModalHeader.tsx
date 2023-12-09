import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import type { Func } from '../../../../app/types'
import { Button } from '../../Button'
import { type IModalHeaderProps } from '../types'
import styles from './Modal.module.scss'
import CloseIcon from 'shared/assets/icons/close.svg'

interface IHeaderProps extends IModalHeaderProps {
    onCloseModal: Func
}

export const ModalHeader: FC<IHeaderProps> = ({
    title,
    onCloseModal
}) => {
    return (
        <div className={classNames(styles.header, {}, [])}>
            <h1 className={styles.title}>{title}</h1>
            <Button
                isRound
                className={styles.closeBtn}
                onClick={() => { onCloseModal() }}
            >
                <CloseIcon />
            </Button>
        </div>
    )
}

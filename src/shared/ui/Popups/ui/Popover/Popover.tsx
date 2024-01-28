import { Popover as HPopover } from '@headlessui/react'
import React, { type ReactNode } from 'react'
import { type CFC } from '../../../../../app/types'
import { classNames } from '../../../../lib/classNames/classNames'
import sharedStyles from '../../styles.module.scss'

interface IPopoverProps {
    className?: string
    trigger: ReactNode
}

export const Popover: CFC<IPopoverProps> = ({
    className,
    children,
    trigger
}) => {
    return (
        <HPopover className={sharedStyles.container}>
            <HPopover.Button as={'div'} className={sharedStyles.trigger}> {trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(sharedStyles.menu, {}, [className])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}

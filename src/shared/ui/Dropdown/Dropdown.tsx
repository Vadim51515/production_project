import { Menu } from '@headlessui/react'
import React, { type ReactNode } from 'react'
import {
    type Func,
    type TOptions
} from '../../../app/types'
import { classNames } from '../../lib/classNames/classNames'
import { Button } from '../Button'
import styles from './Dropdown.module.scss'

interface IDropdownProps<T> {
    className?: string
    options: TOptions<T>
    onClick: Func<[T]>
    children: ReactNode
}

export const Dropdown = <T extends string>({
    className,
    options,
    children,
    onClick
}: IDropdownProps<T>) => {
    return (
        <Menu
            as={'div'}
            className={classNames(styles.container, {}, [className])}
        >
            <Menu.Button className={styles.btn}>
                {children}
            </Menu.Button>
            <Menu.Items className={styles.menu}>
                {options.map((option) => (
                    <Menu.Item key={option.value} disabled={option.isDisabled}>
                        {({ active }) => (
                            <>
                                <Button
                                    isDisabled={option.isDisabled}
                                    pattern={'clear'}
                                    className={classNames(styles.option, { [styles.active]: active })}
                                    onClick={() => { onClick(option.value) }}
                                >
                                    {option.label}
                                </Button>
                            </>
                        )}
                    </Menu.Item>
                ))}

            </Menu.Items>
        </Menu>
    )
}

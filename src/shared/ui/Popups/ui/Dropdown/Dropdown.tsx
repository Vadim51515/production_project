import { Menu } from '@headlessui/react';
import React, { type ReactNode } from 'react';
import { type Func, type TOptions } from '../../../../../app/types';
import { classNames } from '../../../../lib/classNames/classNames';
import { Button } from '../../../Button';
import sharedStyles from '../../styles.module.scss';

interface IDropdownProps<T> {
    className?: string;
    options: TOptions<T>;
    onClick: Func<[T]>;
    children: ReactNode;
}

export const Dropdown = <T extends string>({ className, options, children, onClick }: IDropdownProps<T>) => {
    return (
        <Menu
            as={'div'}
            className={classNames(sharedStyles.container, {}, [className])}
        >
            <Menu.Button className={sharedStyles.trigger}>{children}</Menu.Button>
            <Menu.Items
                as={'div'}
                className={sharedStyles.menu}
            >
                {options.map((option) => (
                    <Menu.Item
                        as={'div'}
                        key={option.value}
                        disabled={option.isDisabled}
                    >
                        {({ active }) => (
                            <>
                                <Button
                                    isDisabled={option.isDisabled}
                                    pattern={'clear'}
                                    className={classNames(sharedStyles.option, { [sharedStyles.active]: active })}
                                    onClick={() => {
                                        onClick(option.value);
                                    }}
                                >
                                    {option.label}
                                </Button>
                            </>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};

import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type Func, type IOption } from '../../../../app/types';
import { Card } from '../../Card/Card';
import { Text } from '../../Text';
import styles from './Tabs.module.scss';

interface ITabsProps<T extends string> {
    className?: string;
    tabs: Array<IOption<T>>;
    value: T;
    onTabClick: Func<[T]>;
}

export const Tabs = <T extends string>({ className, tabs, onTabClick, value }: ITabsProps<T>) => {
    return (
        <div className={classNames(styles.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={styles.tabContainer}
                    key={tab.value}
                    onClick={() => {
                        onTabClick(tab.value);
                    }}
                    pattern={tab.value === value ? 'outline' : 'normal'}
                >
                    <Text>{tab.label}</Text>
                </Card>
            ))}
        </div>
    );
};

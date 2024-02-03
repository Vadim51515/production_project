import React, {
    type FC,
    useMemo
} from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '../../../shared/lib/classNames/classNames'
import {
    type Func,
    type IOption,
    type TOptions,
    type TSortOrder
} from '../../../app/types'
import { type TArticleSortField } from '../../../entities/Article'
import { type ISortFieldNameOption } from '../../../entities/Article/model/types'
import { Select } from '../../../shared/ui/Select'

import styles from './ArticleSortSelector.module.scss'

interface IArticleSortSelectorProps {
    className?: string
    sort: TArticleSortField
    order: TSortOrder
    onChangeSort: Func<[IOption<TArticleSortField>]>
    onChangeOrder: Func<[IOption<TSortOrder>]>
}

export const ArticleSortSelector: FC<IArticleSortSelectorProps> = ({
    className,
    onChangeSort,
    sort,
    onChangeOrder,
    order
}) => {
    const { t } = useTranslation()

    const orderOptions = useMemo<TOptions<TSortOrder>>(() => [
        {
            value: 'asc',
            label: t('возрастанию')
        },
        {
            value: 'desc',
            label: t('убыванию')
        }
    ], [])

    const sortFieldNameOptions = useMemo<ISortFieldNameOption[]>(() => [
        {
            value: 'title',
            label: t('названию')
        },
        {
            value: 'createdAt',
            label: t('дате созданию')
        },
        {
            value: 'views',
            label: t('просмотрам')
        }
    ], [])

    return (
        <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldNameOptions}
                onChange={onChangeSort}
                placeholder={t('Сортировать по') + ':'}
                value={sort}
            />
            <Select
                options={orderOptions}
                onChange={onChangeOrder}
                placeholder={t('По') + ':'}
                value={order}
            />
        </div>
    )
}

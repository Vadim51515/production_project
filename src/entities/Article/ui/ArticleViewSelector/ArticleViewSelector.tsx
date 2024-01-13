import React, {
    type FC,
    type SVGProps
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Func } from '../../../../app/types'
import { Button } from '../../../../shared/ui/Button'
import { Icon } from '../../../../shared/ui/Icon/Icon'
import { type TArticleViewType } from '../../model/types'
import styles from './ArticleViewSelector.module.scss'
import TileIcon from 'shared/assets/icons/Tile.svg'
import ListIcon from 'shared/assets/icons/List.svg'

interface IArticleViewSelectorProps {
    className?: string
    view: TArticleViewType
    onViewClick: Func<[TArticleViewType]>
}

const viewTypes: Array<{ view: TArticleViewType, icon: FC<SVGProps<SVGSVGElement>> }> = [
    {
        view: 'tile',
        icon: TileIcon
    },
    {
        view: 'list',
        icon: ListIcon
    }
]

export const ArticleViewSelector: FC<IArticleViewSelectorProps> = ({
    className,
    onViewClick,
    view
}) => {
    return (
        <div className={classNames(styles.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType => (
                <Button
                    onClick={() => {
                        if (viewType.view !== view) onViewClick(viewType.view)
                    }}
                    pattern='clear'
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [styles.notSelected]: viewType.view !== view })}
                    />
                </Button>
            )))}

        </div>
    )
}

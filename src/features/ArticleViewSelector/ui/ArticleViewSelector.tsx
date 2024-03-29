import React, { type FC, type SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type Func } from '../../../app/types';
import { type TArticleViewType } from '../../../entities/Article';
import { Button } from '../../../shared/ui/Button';
import { Icon } from '../../../shared/ui/Icon';
import styles from './ArticleViewSelector.module.scss';
import TileIcon from '@/shared/assets/icons/Tile.svg?react';
import ListIcon from '@/shared/assets/icons/List.svg?react';

interface IArticleViewSelectorProps {
    className?: string;
    view: TArticleViewType;
    onViewClick: Func<[TArticleViewType]>;
}

const viewTypes: Array<{ view: TArticleViewType; icon: FC<SVGProps<SVGSVGElement>> }> = [
    {
        view: 'list',
        icon: ListIcon,
    },
    {
        view: 'tile',
        icon: TileIcon,
    },
];

export const ArticleViewSelector: FC<IArticleViewSelectorProps> = ({ className, onViewClick, view }) => {
    return (
        <div className={classNames(styles.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    onClick={() => {
                        if (viewType.view !== view) onViewClick(viewType.view);
                    }}
                    pattern="clear"
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [styles.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
};

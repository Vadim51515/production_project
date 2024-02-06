import React, { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '../../../../shared/ui/Text';
import type { IArticleImageBlock } from '../../model/types';
import styles from './ArticleImageBlock.module.scss';

interface IArticleImageBlockProps {
    className?: string;
    block: IArticleImageBlock;
}

export const ArticleImageBlock: FC<IArticleImageBlockProps> = ({ className, block }) => {
    return (
        <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
            <img
                className={styles.img}
                src={block.src}
            />
            {block.title && (
                <Text
                    withMarginBottom
                    isCenter
                >
                    {block.title}
                </Text>
            )}
        </div>
    );
};

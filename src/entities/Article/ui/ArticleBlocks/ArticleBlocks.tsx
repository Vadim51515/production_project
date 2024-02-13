import React, { type FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { articleDataSelector } from '../../model/selectors/selectors';
import { ArticleBlockTypes, type TArticleBlock } from '../../model/types';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

interface IArticleBlocksProps {
    className?: string;
}

export const ArticleBlocks: FC<IArticleBlocksProps> = () => {
    const article = useSelector(articleDataSelector);

    const renderBlock = useCallback(
        (block: TArticleBlock) => {
            switch (block.type) {
                case ArticleBlockTypes.TEXT:
                    return (
                        <ArticleTextBlock
                            key={block.id}
                            block={block}
                        />
                    );
                case ArticleBlockTypes.CODE:
                    return <ArticleCodeBlock key={block.id} />;
                case ArticleBlockTypes.IMAGE:
                    return (
                        <ArticleImageBlock
                            key={block.id}
                            block={block}
                        />
                    );
                default:
                    return null;
            }
        },
        [article],
    );

    return article?.blocks.map(renderBlock);
};

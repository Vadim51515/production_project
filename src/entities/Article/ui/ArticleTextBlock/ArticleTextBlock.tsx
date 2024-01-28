import React, { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '../../../../shared/ui/Text'
import { type IArticleTextBlock } from '../../model/types'

interface IArticleTextBlockProps {
    className?: string
    block: IArticleTextBlock
}

export const ArticleTextBlock: FC<IArticleTextBlockProps> = ({ className, block }) => {
    return (
        <div className={classNames('', {}, [className])}>
            {block.title && <Text tag={'h1'} withMarginBottom marginBottom={20}>{block.title}</Text>}

            {block.paragraphs.map((paragraph, index) => (
                <Text key={paragraph + index} withMarginBottom>{paragraph}</Text>
            ))}
        </div>
    )
}

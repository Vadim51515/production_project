import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Code } from '../../../../shared/ui/Code'
import { type IArticleCodeBlock } from '../../model/types'
import styles from './ArticleCodeBlock.module.scss'

interface IArticleCodeBlockProps {
    className?: string
    block: IArticleCodeBlock
}

export const ArticleCodeBlock: FC<IArticleCodeBlockProps> = ({ className, block }) => {
    return (
        <div className={classNames(styles.articleCodeBlock, {}, [className])}>
            <Code codeText={block.code} />
        </div>
    )
}

import React, {
    type FC,
    useCallback
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '../../Button'
import styles from './Code.module.scss'
import CopyIcon from '@/shared/assets/icons/Copy.svg'

interface ICodeProps {
    className?: string
    codeText: string
}

export const Code: FC<ICodeProps> = ({
    className,
    codeText
}) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codeText)
    }, [])

    return (
        <pre className={classNames(styles.code, {}, [className])}>
            <Button
                pattern='clear'
                onClick={onCopy}
                className={styles.copyBtn}
            ><CopyIcon className={styles.copyBtnIcon} /></Button>
            <code>
                {codeText}
            </code>
        </pre>
    )
}

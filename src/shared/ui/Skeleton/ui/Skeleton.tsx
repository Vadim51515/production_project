import React, {
    type CSSProperties,
    type FC
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Skeleton.module.scss'
interface ISkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
    marginBottom?: string | number
}

export const Skeleton: FC<ISkeletonProps> = ({
    className,
    height,
    borderRadius,
    width,
    marginBottom
}) => {
    const style: CSSProperties = {
        width,
        height,
        borderRadius,
        marginBottom
    }

    return (
        <div style={style} className={classNames(styles.skeleton, {}, [className])}>

        </div>
    )
}

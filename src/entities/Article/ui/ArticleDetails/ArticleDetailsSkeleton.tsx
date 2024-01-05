import React, { type FC } from 'react'
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton'
import styles from './ArticleDetails.module.scss'

export const ArticleDetailsSkeleton: FC = () => {
    return (
        <>
            <Skeleton className={styles.skeletonAvatar} width={200} height={200} borderRadius="50%" />
            <Skeleton className={styles.skeletonTitle} width={300} height={32} />
            <Skeleton className={styles.skeleton} width={600} height={24} />
            <Skeleton className={styles.skeleton} width="100%" height={200} />
            <Skeleton className={styles.skeleton} width="100%" height={200} />
        </>
    )
}

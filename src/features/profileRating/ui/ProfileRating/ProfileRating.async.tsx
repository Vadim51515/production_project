import {
    type FC,
    lazy,
    Suspense
} from 'react'
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton'
import { type IProfileRatingProps } from './ProfileRating'

const ProfileRatingLazy = lazy(
    async () => await import('./ProfileRating')
)

export const ProfileRatingAsync: FC<IProfileRatingProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={92} />}>
            <ProfileRatingLazy {...props} />
        </Suspense>
    )
}

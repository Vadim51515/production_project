import React, {
    type FC,
    useState
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type Func } from '../../../../app/types'
import { Icon } from '../../Icon/Icon'
import styles from './StarRating.module.scss'
import RightArrow from '@/shared/assets/icons/star.svg?react'

interface IStarRatingProps {
    className?: string
    onSelect?: Func<[number]>
    selectedStars?: number
    size?: number
}

const stars = [
    1,
    2,
    3,
    4,
    5
]

export const StarRating: FC<IStarRatingProps> = ({
    className,
    selectedStars = 0,
    onSelect,
    size = 30
}) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(styles.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    key={starNumber}
                    width={size}
                    height={size}
                    className={classNames(
                        styles.starIcon,
                        { [styles.selected]: isSelected },
                        [
                            currentStarsCount >= starNumber
                                ? styles.hovered
                                : styles.normal
                        ]
                    )}
                    Svg={RightArrow}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    )
}

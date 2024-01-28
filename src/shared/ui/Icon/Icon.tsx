import React, { type FC } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
    withRightMargin?: boolean
    withLeftMargin?: boolean
}

export const Icon: FC<IIconProps> = ({
    Svg,
    withRightMargin,
    withLeftMargin,
    className,
    ...props
}) => {
    const mods = {
        [styles.withRightMargin]: withRightMargin,
        [styles.withLeftMargin]: withLeftMargin
    }

    return <Svg
        className={classNames(styles.icon, mods, [className])}
        {...props} />
}

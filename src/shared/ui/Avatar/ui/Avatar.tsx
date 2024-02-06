import React, { type CSSProperties, type FC } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import { AppImage } from '../../AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton/ui/Skeleton';
import styles from './Avatar.module.scss';
import svgUserIcon from '@/shared/assets/icons/userIcon.svg?react';
import defaultUserIcon from '@/shared/assets/icons/defaultUserIcon.png';
interface IAvatarProps {
    className?: string;
    image: string | undefined;
    alt?: string;
    size?: number;
}

export const Avatar: FC<IAvatarProps> = ({ className, image, alt, size }) => {
    const style: CSSProperties = {
        height: size,
        width: size,
    };
    const errorFallback = <Icon Svg={svgUserIcon} />;
    const fallback = (
        <Skeleton
            width={size}
            height={size}
            borderRadius={'50%'}
        />
    );

    return (
        <AppImage
            style={style}
            src={image ?? defaultUserIcon}
            fallback={fallback}
            alt={alt}
            errorFallback={errorFallback}
            className={classNames(styles.avatar, {}, [className])}
        />
    );
};

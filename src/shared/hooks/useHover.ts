import { useCallback, useMemo, useState } from 'react';
import { type Func } from '../../app/types';

interface IUseHoverBind {
    onMouseEnter: Func;
    onMouseLeave: Func;
}

export type TUseHoverResult = [boolean, IUseHoverBind];

export const useHover: Func<[void], TUseHoverResult> = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave]);
};

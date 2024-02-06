import { type RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { type Func } from '../../app/types';
import { useClickOutside } from './useClickOutside';

interface IUseModalProps {
    onClose: Func;
    isOpen?: boolean;
    animationDelay?: number;
    closeOnPressEsc?: boolean;
    closeOnOutsideClick?: boolean;
}

interface IUseModalResult {
    isClosing: boolean;
    isMounted: boolean;
    close: Func<[Func]>;
    refForContent: RefObject<HTMLDivElement>;
}

export const useModal: Func<[IUseModalProps], IUseModalResult> = ({
    animationDelay = 300,
    isOpen,
    onClose,
    closeOnOutsideClick = true,
    closeOnPressEsc = true,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(
        (callback = onClose) => {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                callback();
                setIsClosing(false);
            }, animationDelay);
        },
        [onClose],
    );

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeHandler();
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen && closeOnPressEsc) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [closeOnPressEsc, isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    const isUseClickOutside = isOpen && closeOnOutsideClick;

    const refForContent = useClickOutside(isUseClickOutside ? closeHandler : () => {});
    return {
        isClosing,
        isMounted,
        refForContent,
        close: closeHandler,
    };
};

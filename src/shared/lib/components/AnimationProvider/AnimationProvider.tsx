import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { type CFC } from '../../../../app/types';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type TSpringType = typeof import('@react-spring/web');
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type TGestureType = typeof import('@use-gesture/react');

interface IAnimationContextPayload {
    Gesture?: TGestureType;
    Spring?: TSpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<IAnimationContextPayload>({});

// Обе либы зависят друг от друга
const getAsyncAnimationModules = async () => {
    return await Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<IAnimationContextPayload>;
};

export const AnimationProvider: CFC = ({ children }) => {
    const SpringRef = useRef<TSpringType>();
    const GestureRef = useRef<TGestureType>();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};

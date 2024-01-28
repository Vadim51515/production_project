import React, {
    memo,
    type ReactNode,
    useCallback,
    useEffect
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '../../../../app/providers/ThemeProvider'
import {
    type CFC,
    type Func
} from '../../../../app/types'
import { useModal } from '../../../hooks/useModal'
import {
    AnimationProvider,
    useAnimationLibs
} from '../../../lib/components/AnimationProvider'
import { Overlay } from '../../Overlay/ui/Overlay'
import { Portal } from '../../Portal/ui/Portal'
import styles from './Drawer.module.scss'

interface IDrawerProps {
    className?: string
    isOpen: boolean
    closeOnOutsideClick?: boolean
    onClose: Func<[]>
}

const height = window.innerHeight - 100

const DrawerContent: CFC<IDrawerProps> = ({
    className,
    isOpen,
    children,
    onClose
}) => {
    console.log('DrawerContent')
    const { theme } = useTheme()
    const {} = useModal({
        onClose,
        isOpen
    })

    const { Spring, Gesture } = useAnimationLibs()
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false })
    }, [api])

    useEffect(() => {
        if (isOpen) {
            openDrawer()
        }
    }, [api, isOpen, openDrawer])

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose
        })
    }

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel
        }) => {
            if (my < -70) cancel()

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close()
                } else {
                    openDrawer()
                }
            } else {
                api.start({ y: my, immediate: true })
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true
        }
    )

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    if (!isOpen) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.drawer, { }, [className, theme, 'app_drawer'])}>
                <Overlay className={styles.overlay}>
                    <Spring.a.div
                        className={styles.sheet}
                        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                        {...bind()}
                    >
                        {children}
                    </Spring.a.div>
                </Overlay>

            </div>
        </Portal>
    )
}

const DrawerAsync: CFC<IDrawerProps> = (props) => {
    const { isLoaded } = useAnimationLibs()

    if (!isLoaded) {
        return null
    }

    return <DrawerContent {...props} />
}

export const Drawer = memo <IDrawerProps & { children: ReactNode }>((props) => {
    const { isLoaded } = useAnimationLibs()

    if (!isLoaded) {
        return null
    }

    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    )
})

import type { Func } from '../../../app/types'
import { type ITestProps } from '../../types'

export interface IModalHeaderProps {
    title?: string
}

export interface IModalFooterProps extends ITestProps {
    confirmText?: string
    onConfirm?: Func
    cancelText?: string
    onCancel?: Func
    customAction?: Func
}

export interface IModalProps extends ITestProps {
    className?: string
    isOpen: boolean
    onClose: Func
    closeOnOutsideClick?: boolean
    closeOnPressEsc?: boolean
    footerProps?: IModalFooterProps
    headerProps?: IModalHeaderProps
    isLazy?: boolean
}

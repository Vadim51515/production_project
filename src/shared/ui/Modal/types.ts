import type { Func } from '../../../app/types'

export interface IModalHeaderProps {
    title?: string
}

export interface IModalFooterProps {
    confirmText?: string
    onConfirm?: Func
    cancelText?: string
    onCancel?: Func
    customAction?: Func
}

export interface IModalProps {
    className?: string
    isOpen: boolean
    onClose: Func
    closeOnOutsideClick?: boolean
    closeOnPressEsc?: boolean
    footerProps?: IModalFooterProps
    headerProps?: IModalHeaderProps
    isLazy?: boolean
}

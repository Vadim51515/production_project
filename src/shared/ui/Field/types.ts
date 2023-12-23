import { type Func } from '../../../app/types'
import { type ISharedFieldComponentProps } from '../../types'
import { type IInputProps } from '../Input/ui/Input'

type TFieldType =
    'input'
    | 'select'

interface IBaseFieldProps extends ISharedFieldComponentProps {
    fieldType: TFieldType
    label: string
    onChange: Func<[unknown]>
    isRequired?: boolean
    error?: string
}

export type TFieldInputProps =
    IBaseFieldProps
    & IInputProps & {
    fieldType: 'input'
    isFullWidth: boolean
}

export type TFieldInputSelect =
    IBaseFieldProps
    & {
    fieldType: 'select'
    isMinWidth: boolean
}

export type TFieldProps =
    TFieldInputProps
    | TFieldInputSelect

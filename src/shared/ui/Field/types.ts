import {
    type Func,
    type IOption
} from '../../../app/types'
import { type ISharedFieldComponentProps } from '../../types'
import { type InputPropsWithEvent } from '../Input'
import { type ISelectProps } from '../Select'

export type TFieldType =
    'input'
    | 'select'

interface IBaseFieldProps extends ISharedFieldComponentProps {
    fieldType: TFieldType
    fieldName: string
    label: string
    isRequired?: boolean
    error?: string
}

interface IFieldInputProps extends Omit<InputPropsWithEvent, 'onChange'> {
    fieldType: 'input'
    value?: string | number
    onChange: Func<[string, string]>
}

interface IFieldSelectProps extends Omit<ISelectProps, 'onChange'> {
    fieldType: 'select'
    onChange: Func<[string, IOption]>
}

export type TFieldProps = IBaseFieldProps & (IFieldInputProps | IFieldSelectProps)

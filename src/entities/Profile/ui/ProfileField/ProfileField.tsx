import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import {
    type IOption,
    type TOptions
} from '../../../../app/types'
import { useActions } from '../../../../shared/hooks/useActions'
import { useParamSelector } from '../../../../shared/hooks/useParamSelector'
import { type TFieldType } from '../../../../shared/ui/Field'

import { Field } from '@/shared/ui/Field/ui/Field'
import { profileActions } from '../../model/actions'
import {
    profileFieldErrorSelector,
    profileFieldValue,
    profileIsReadonlySelector
} from '../../model/selectors/selectors'
import { type TKeysProfile } from '../../types'

interface IBaseProfileFieldProps {
    fieldName: TKeysProfile
    label: string
    isRequired?: boolean
    fieldType?: TFieldType
}

interface IInputProfileField {
    fieldType?: 'input'
}

interface ISelectProfileField {
    fieldType: 'select'
    options: TOptions<string>
}

type TProfileFieldProps = IBaseProfileFieldProps & (IInputProfileField | ISelectProfileField)

export const ProfileField: FC<TProfileFieldProps> = ({
    fieldType = 'input',
    fieldName,
    label,
    isRequired,
    ...props
}) => {
    const fieldValue = useParamSelector(profileFieldValue, fieldName)
    const isReadonly = useSelector(profileIsReadonlySelector)
    const error = useParamSelector(profileFieldErrorSelector, fieldName)

    const { setFormField } = useActions(profileActions)

    const onChangeField = (fieldKey: string, propValue: string | IOption<string>) => {
        // TODO Пофиксить типы
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const newValue = fieldType === 'select' ? propValue.value : propValue

        setFormField({
            fieldKey,
            value: newValue
        })
    }

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Field
            fieldType={fieldType}
            fieldName={fieldName}
            label={label}
            isRequired={isRequired}
            isFullWidth
            isReadOnly={isReadonly}
            onChange={onChangeField}
            value={fieldValue}
            error={error}
            dataTestId={fieldName}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            options={props.options}
        />
    )
}

import { type ISharedFieldComponentProps } from '../../types';
import { type InputPropsWithEvent } from '../Input';
import { type ISelectProps } from '../Select';

export type TFieldType = 'input' | 'select';

interface IBaseFieldProps extends ISharedFieldComponentProps {
    fieldType: TFieldType;
    fieldName: string;
    label: string;
    dataTestId?: string;
    isRequired?: boolean;
    error?: string;
}

interface IFieldInputProps extends Omit<InputPropsWithEvent, 'onChange' | 'withEventChange'> {
    fieldType: 'input';
    value?: string | number;
    // onChange: Func<[string, string]>;
    onChange: (val_1: string, val_2: string) => void;
}

interface IFieldSelectProps extends Omit<ISelectProps<string>, 'onChange'> {
    fieldType: 'select';
    // onChange: Func<[string, IOption<string>]>;
    onChange: (val_1: string, val_2: string) => void;
}

export type TFieldProps = IBaseFieldProps & (IFieldInputProps | IFieldSelectProps);

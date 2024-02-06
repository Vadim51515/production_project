import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type Func } from '../../../../app/types';
import { useActions } from '../../../../shared/hooks/useActions';
import { type TReducersList, useAsyncReducer } from '../../../../shared/hooks/useAsyncReducer';
import { Button } from '../../../../shared/ui/Button';
import { Field } from '../../../../shared/ui/Field';
import { addCommentActions } from '../../model/actions';
import { addCommentFormTextSelector } from '../../model/selectors/selectors';
import { addCommentReducer } from '../../model/slices/addCommentFormSlice';
import styles from './AddCommentForm.module.scss';

export interface IAddCommentFormProps {
    className?: string;
    sendComment: Func<[string]>;
}

const initialReducers: TReducersList = {
    addCommentForm: addCommentReducer,
};

const AddCommentForm: FC<IAddCommentFormProps> = ({ className, sendComment }) => {
    useAsyncReducer(initialReducers, true);

    const text = useSelector(addCommentFormTextSelector);

    const { setText } = useActions(addCommentActions);

    const { t } = useTranslation();

    const onChangeInput = (_: string, value: string) => {
        setText(value);
    };

    const onSendComment = () => {
        sendComment(text || '');
        setText('');
    };

    return (
        <div
            className={classNames(styles.addCommentForm, {}, [className])}
            data-testid={'AddCommentForm'}
        >
            <Field
                fieldType={'input'}
                dataTestId={'NewComment'}
                fieldName={'newComment'}
                value={text}
                label={t('Введите текст комментария')}
                onChange={onChangeInput}
                withEventChange
                className={styles.input}
            />

            <Button
                data-testid={'AddNewCommentBtn'}
                className={styles.submitBtn}
                onClick={onSendComment}
            >
                {t('Отправить')}
            </Button>
        </div>
    );
};

export default AddCommentForm;

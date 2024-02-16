import { classNames } from '@/shared/lib/classNames/classNames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { userActionsObj } from '../../../../entities/User/model/actions';
import { useJsonSettings } from '../../../../entities/User/model/selectors/jsonSettingsSelector';
import { useActions } from '../../../../shared/hooks/useActions';
import { Modal } from '../../../../shared/ui/Modal';
import styles from './ArticlePageGreeting.module.scss';

export const ArticlePageGreeting: FC = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const { isArticlesPageWasOpened } = useJsonSettings();

    const { saveJsonSettings } = useActions(userActionsObj);

    useEffect(() => {
        if (!isArticlesPageWasOpened && isArticlesPageWasOpened !== undefined) {
            setIsOpen(true);
            saveJsonSettings({ isArticlesPageWasOpened: true });
        }
    }, []);

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            headerProps={{
                title: t('Добро пожаловать на страницу статей'),
            }}
            onClose={onClose}
            isOpen={isOpen}
            className={classNames(styles.articlePageGreeting, {}, [])}
        ></Modal>
    );
};

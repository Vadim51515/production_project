import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '../../../../widgets/Page';

interface IArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<IArticleEditPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page
            className={classNames('', {}, [className])}
            dataTestId={'ArticleEditPage'}
        >
            {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи')}
        </Page>
    );
};

export default ArticleEditPage;

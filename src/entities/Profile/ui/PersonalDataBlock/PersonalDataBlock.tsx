import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { COUNTRIES } from '../../../../app/constans';

import { Loader } from '../../../../shared/ui/Loader';
import { Text } from '../../../../shared/ui/Text';
import { profileIsLoadingSelector } from '../../model/selectors/selectors';
import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar';
import { ProfileField } from '../ProfileField/ProfileField';
import styles from './PersonalDataBlock.module.scss';

interface IPersonalDataBlockProps {
    className?: string;
}

export const PersonalDataBlock: FC<IPersonalDataBlockProps> = ({ className }) => {
    const isLoading = useSelector(profileIsLoadingSelector);

    const { t } = useTranslation();
    return (
        <div className={classNames(styles.personalData, {}, ['box', className])}>
            {isLoading && <Loader />}
            <ProfileAvatar />
            <div className={styles.personalDataContainer}>
                <Text
                    className={styles.personalDataTitle}
                    tag="h2"
                >
                    {t('Личные данные')}
                </Text>
                <div className={styles.personalDataFieldContainer}>
                    <div className={styles.nameContainer}>
                        <ProfileField
                            fieldName={'firstName'}
                            label={'Имя'}
                            isRequired
                        />

                        <ProfileField
                            fieldName={'surname'}
                            label={'Фамилия'}
                            isRequired
                        />
                    </div>
                    <div className={styles.nameContainer}>
                        <ProfileField
                            fieldName={'age'}
                            label={'Возраст'}
                        />

                        <ProfileField
                            fieldName={'currency'}
                            fieldType={'select'}
                            label={t('Страна')}
                            options={COUNTRIES}
                        />

                        <ProfileField
                            fieldName={'city'}
                            label={'Город'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

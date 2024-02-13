import React, { type FC, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { type Func } from '../../../app/types';
import { Button } from '../../../shared/ui/Button';
import { Card } from '../../../shared/ui/Card/Card';
import { Drawer } from '../../../shared/ui/Drawer';
import { Field } from '../../../shared/ui/Field';
import { Modal } from '../../../shared/ui/Modal';
import { HStack, VStack } from '../../../shared/ui/Stack';
import { StarRating } from '../../../shared/ui/StarRating/ui/StarRating';
import { Text } from '../../../shared/ui/Text';

interface IRatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: Func<[number]>;
    onConfirm?: Func<[number, string?]>;
    rate?: number;
}

export const Rating: FC<IRatingProps> = ({ className, title, feedbackTitle, hasFeedback, onCancel, onConfirm, rate = 0 }) => {
    const { t } = useTranslation();
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSelectStars = (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onConfirm?.(selectedStarsCount);
        }
    };

    const onConfirmHandler = useCallback(() => {
        setIsModalOpen(false);
        onConfirm?.(starsCount, feedback);
    }, [feedback, starsCount]);

    const onCancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <Field
            dataTestId={'RatingCardModal'}
            fieldType={'input'}
            fieldName={'modalReviewInput'}
            label={t('Ваш отзыв')}
            onChange={(_, value) => {
                setFeedback(value);
            }}
            value={feedback}
        />
    );

    return (
        <Card
            className={classNames('', {}, [className])}
            data-testid={'RatingCard'}
        >
            <VStack gap={'16'}>
                <Text tag={'h3'}>{starsCount ? t('Спасибо за оценку') + '!' : title}</Text>

                <StarRating
                    selectedStars={starsCount}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal
                    dataTestId={'RatingCardModal'}
                    isOpen={isModalOpen}
                    onClose={onCancelHandler}
                    isLazy
                    headerProps={{
                        title: feedbackTitle,
                    }}
                    footerProps={{
                        onCancel: onCancelHandler,
                        onConfirm: onConfirmHandler,
                        confirmText: t('Отправить'),
                    }}
                >
                    {modalContent}
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    onClose={onCancelHandler}
                >
                    <VStack gap="32">
                        <Text tag={'h1'}>{feedbackTitle}</Text>

                        {modalContent}

                        <HStack gap={'32'}>
                            <Button
                                pattern={'outline'}
                                onClick={onCancelHandler}
                            >
                                {t('Отмена')}
                            </Button>
                            <Button onClick={onConfirmHandler}>{t('Отправить')}</Button>
                        </HStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
};

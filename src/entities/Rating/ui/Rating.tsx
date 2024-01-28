import React, {
    type FC,
    useCallback,
    useState
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    BrowserView,
    MobileView
} from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { type Func } from '../../../app/types'
import { Button } from '../../../shared/ui/Button'
import { Card } from '../../../shared/ui/Card/Card'
import { Drawer } from '../../../shared/ui/Drawer'
import { Field } from '../../../shared/ui/Field'
import { Modal } from '../../../shared/ui/Modal'
import {
    HStack,
    VStack
} from '../../../shared/ui/Stack'
import { StarRating } from '../../../shared/ui/StarRating/ui/StarRating'
import { Text } from '../../../shared/ui/Text'
import styles from './Rating.module.scss'

interface IRatingProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: Func<[number]>
    onConfirm?: Func<[number, string?]>
}

export const Rating: FC<IRatingProps> = ({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onConfirm
}) => {
    const { t } = useTranslation()
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onSelectStars = (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onConfirm?.(selectedStarsCount)
        }
    }

    const onConfirmHandler = useCallback(() => {
        setIsModalOpen(false)
        onConfirm?.(starsCount, feedback)
    }, [feedback, starsCount])

    const onCancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <Field
            fieldType={'input'}
            fieldName={'modalReviewInput'}
            label={t('Ваш отзыв')}
            onChange={setFeedback}
            value={feedback}
        />
    )

    return (
        <Card className={classNames(styles.Rating, {}, [className])}>
            <VStack gap={'16'}>
                <Text tag={'h3'}>{title}</Text>
                <StarRating onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    onClose={onCancelHandler}
                    isLazy
                    headerProps={{
                        title: feedbackTitle
                    }}
                    footerProps={{
                        onCancel: onCancelHandler,
                        onConfirm: onConfirmHandler,
                        confirmText: t('Отправить')
                    }}
                >
                    {modalContent}
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={onCancelHandler}>
                    <VStack gap="32">
                        <Text tag={'h1'}>{feedbackTitle}</Text>

                        {modalContent}

                        <HStack gap={'32'}>
                            <Button pattern={'outline'} onClick={onCancelHandler}>{t('Отмена')}</Button>
                            <Button onClick={onConfirmHandler}>{t('Отправить')}</Button>
                        </HStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    )
}

import React, {
    type FC,
    useState
} from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { BugButton } from '../../../../app/providers/ErrorBoundary/ui/BugButton'
import { Button } from '../../../../shared/ui/Button'
import { LangSwitcher } from '../../../LangSwitcher'
import { Navbar } from '../../../Navbar'
import styles from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(true)
    const { t } = useTranslation()
    return (
        <div
            data-testid='sidebar'
            className={classNames(styles.sidebar, { [styles.collapsed]: !isOpen }, [className])}>
            <Button
                data-testid='sidebar-toggle-size'
                onClick={() => { setIsOpen(_isOpen => !_isOpen) }}>{t('Свернуть меню')}</Button>
            <Navbar />
            <LangSwitcher />
            <BugButton />
        </div>
    )
}

import React, {
    type FC,
    useState
} from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { userActions } from '../../../../entities/User'
import { userAuthDataSelector } from '../../../../entities/User/model/selectors/selectors'
import { LoginModal } from '../../../../features/AuthByUsername'
import { useActions } from '../../../../shared/hooks/useActions'
import { useParamSelector } from '../../../../shared/hooks/useParamSelector'
import { Button } from '../../../../shared/ui/Button'
import { LangSwitcher } from '../../../LangSwitcher'
import { Navbar } from '../../../Navbar'
import { HideBtn } from './HideBtn'
import styles from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const userAuthData = useParamSelector(userAuthDataSelector)

    const { logout } = useActions(userActions)

    const [isOpen, setIsOpen] = useState(true)

    const { t } = useTranslation()

    return (
        <div
            data-testid='sidebar'
            className={classNames(styles.sidebar, { [styles.collapsed]: !isOpen }, [className])}
        >
            <HideBtn
                isOpen={isOpen}
                onClick={() => { setIsOpen(_isOpen => !_isOpen) }}
            />
            <Navbar isCollapsedNavbar={!isOpen} />
            <LangSwitcher isShortName={!isOpen} />
            <BugButton />
            <div className={styles.bottomBlock}>

            </div>
            {userAuthData ? <Button onClick={logout}>{t('Выйти из аккаунта')}</Button> : <LoginModal /> }
        </div>
    )
}

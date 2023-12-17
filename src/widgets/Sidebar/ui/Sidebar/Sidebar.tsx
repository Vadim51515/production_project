import React, {
    type FC,
    memo,
    useState
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { userAuthDataSelector } from '../../../../entities/User/model/selectors/selectors'
import { LoginModal } from '../../../../features/AuthByUsername'
import { useParamSelector } from '../../../../shared/hooks/useParamSelector'
import { LangSwitcher } from '../../../LangSwitcher'
import { Navbar } from '../../../Navbar'
import { ProfileBtn } from '../ProfileBtn'
import { HideBtn } from './HideBtn'
import styles from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
    const userAuthData = useParamSelector(userAuthDataSelector)

    const [isOpen, setIsOpen] = useState(true)

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
            {!userAuthData ? <ProfileBtn isCollapsedNavbar={!isOpen} /> : <LoginModal /> }
        </div>
    )
})

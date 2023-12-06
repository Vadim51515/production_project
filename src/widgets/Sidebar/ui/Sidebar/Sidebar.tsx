import React, {
    type FC,
    useState
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { LangSwitcher } from '../../../LangSwitcher'
import { Navbar } from '../../../Navbar'
import { HideBtn } from './HideBtn'
import styles from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div
            data-testid='sidebar'
            className={classNames(styles.sidebar, { [styles.collapsed]: !isOpen }, [className])}>
            <HideBtn isOpen={isOpen} onClick={() => { setIsOpen(_isOpen => !_isOpen) }}/>
            <Navbar isCollapsedNavbar={!isOpen} />
            <LangSwitcher isShortName={!isOpen}/>
            <BugButton />
        </div>
    )
}
